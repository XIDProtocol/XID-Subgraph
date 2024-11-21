import { BigInt, Bytes, store, Address } from "@graphprotocol/graph-ts"
import {
  EthDeposited,
  EthWithdrawn,
  TokenDeposited,
  TokenWithdrawn
} from "../generated/XVault/XVault"
import { User, VaultBalance, XIDToken } from "../generated/schema"
import { XID } from "../generated/XID/XID"

function getVaultBalanceId(username: string, token: Bytes): string {
  return username.concat("-").concat(token.toHexString())
}

export function handleEthDeposited(event: EthDeposited): void {
  let xid = XID.bind(Address.fromString("0x6a4f7BBACd0d62D586342A938e2d680814e14f0B"))
  let username = event.params.username.toString()
  let userAddress = xid.try_getAddressByUsername(username)
  
  let userId = userAddress.reverted ? 
    username : 
    userAddress.value.toHexString()
    
  let user = User.load(userId)
  
  if (!user) {
    user = new User(userId)
    user.username = username
    user.address = userAddress.reverted ? 
      Bytes.fromHexString("0x0000000000000000000000000000000000000000") : 
      userAddress.value
    
    let tempTokenId = BigInt.fromI32(0)
    let xidToken = new XIDToken(tempTokenId.toString())
    xidToken.tokenId = tempTokenId
    xidToken.owner = userId
    xidToken.username = username
    xidToken.expirationTime = BigInt.fromI32(0)
    xidToken.save()
    
    user.xidToken = xidToken.id
    user.save()
  }
  
  let balanceId = getVaultBalanceId(username, Bytes.fromHexString("0x0000000000000000000000000000000000000000"))
  let balance = VaultBalance.load(balanceId)
  
  if (!balance) {
    balance = new VaultBalance(balanceId)
    balance.owner = user.id
    balance.token = Bytes.fromHexString("0x0000000000000000000000000000000000000000")
    balance.amount = BigInt.fromI32(0)
    balance.lastUpdatedAt = event.block.timestamp
  }
  
  balance.amount = balance.amount.plus(event.params.amount)
  balance.lastUpdatedAt = event.block.timestamp
  balance.save()
}

export function handleEthWithdrawn(event: EthWithdrawn): void {
  let username = event.params.username.toString()
  let balanceId = getVaultBalanceId(username, Bytes.fromHexString("0x0000000000000000000000000000000000000000"))
  let balance = VaultBalance.load(balanceId)
  
  if (balance) {
    balance.amount = balance.amount.minus(event.params.amount)
    balance.lastUpdatedAt = event.block.timestamp
    
    if (balance.amount.equals(BigInt.fromI32(0))) {
      store.remove("VaultBalance", balanceId)
    } else {
      balance.save()
    }
  }
}

export function handleTokenDeposited(event: TokenDeposited): void {
  let xid = XID.bind(Address.fromString("0x6a4f7BBACd0d62D586342A938e2d680814e14f0B"))
  let username = event.params.username.toString()
  let userAddress = xid.try_getAddressByUsername(username)
  
  let userId = userAddress.reverted ? 
    username : 
    userAddress.value.toHexString()
    
  let user = User.load(userId)
  
  if (!user) {
    user = new User(userId)
    user.username = username
    user.address = userAddress.reverted ? 
      Bytes.fromHexString("0x0000000000000000000000000000000000000000") : 
      userAddress.value
    
    let tempTokenId = BigInt.fromI32(0)
    let xidToken = new XIDToken(tempTokenId.toString())
    xidToken.tokenId = tempTokenId
    xidToken.owner = userId
    xidToken.username = username
    xidToken.expirationTime = BigInt.fromI32(0)
    xidToken.save()
    
    user.xidToken = xidToken.id
    user.save()
  }
  
  let balanceId = getVaultBalanceId(username, event.params.token)
  let balance = VaultBalance.load(balanceId)
  
  if (!balance) {
    balance = new VaultBalance(balanceId)
    balance.owner = user.id
    balance.token = event.params.token
    balance.amount = BigInt.fromI32(0)
    balance.lastUpdatedAt = event.block.timestamp
  }
  
  balance.amount = balance.amount.plus(event.params.amount)
  balance.lastUpdatedAt = event.block.timestamp
  balance.save()
}

export function handleTokenWithdrawn(event: TokenWithdrawn): void {
  let username = event.params.username.toString()
  let balanceId = getVaultBalanceId(username, event.params.token)
  let balance = VaultBalance.load(balanceId)
  
  if (balance) {
    balance.amount = balance.amount.minus(event.params.amount)
    balance.lastUpdatedAt = event.block.timestamp
    
    if (balance.amount.equals(BigInt.fromI32(0))) {
      store.remove("VaultBalance", balanceId)
    } else {
      balance.save()
    }
  }
}