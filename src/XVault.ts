import { BigInt, Bytes, store, Address } from "@graphprotocol/graph-ts"
import {
  EthDeposited,
  EthWithdrawn,
  TokenDeposited,
  TokenWithdrawn
} from "../generated/XVault/XVault"
import { VaultBalance } from "../generated/schema"
import { fetchTokenName, fetchTokenSymbol, fetchTokenDecimals } from "./ERC20"

function getVaultBalanceId(username: string, token: Bytes): string {
  return username.concat("-").concat(token.toHexString())
}

export function handleEthDeposited(event: EthDeposited): void {
  let balanceId = getVaultBalanceId(
    event.params.username,
    Bytes.fromHexString("0x0000000000000000000000000000000000000000")
  )
  
  
  let balance = VaultBalance.load(balanceId)
  if (!balance) {
    balance = new VaultBalance(balanceId)
    balance.username = event.params.username
    balance.token = Bytes.fromHexString("0x0000000000000000000000000000000000000000")
    balance.tokenName = "Ethereum"
    balance.tokenSymbol = "ETH"
    balance.tokenDecimals = 18
    balance.amount = BigInt.fromI32(0)
    balance.lastUpdatedAt = event.block.timestamp
  }
  
  balance.amount = balance.amount.plus(event.params.amount)
  balance.lastUpdatedAt = event.block.timestamp
  balance.save()
}

export function handleEthWithdrawn(event: EthWithdrawn): void {
  let balanceId = getVaultBalanceId(
    event.params.username,
    Bytes.fromHexString("0x0000000000000000000000000000000000000000")
  )
  

  let balance = VaultBalance.load(balanceId)
  
  if (balance) {
    store.remove("VaultBalance", balanceId)
  }
}

export function handleTokenDeposited(event: TokenDeposited): void {
  let balanceId = getVaultBalanceId(
    event.params.username,
    event.params.token as Bytes
  )
  
  let balance = VaultBalance.load(balanceId)
  if (!balance) {
    balance = new VaultBalance(balanceId)
    balance.username = event.params.username
    balance.token = event.params.token as Bytes
    balance.amount = BigInt.fromI32(0)
    balance.lastUpdatedAt = event.block.timestamp

    if (event.params.token.toHexString() != "0x0000000000000000000000000000000000000000") {
      balance.tokenName = fetchTokenName(event.params.token)
      balance.tokenSymbol = fetchTokenSymbol(event.params.token)
      balance.tokenDecimals = fetchTokenDecimals(event.params.token)
    } else {
      balance.tokenName = "Ethereum"
      balance.tokenSymbol = "ETH"
      balance.tokenDecimals = 18
    }
  }
  
  balance.amount = balance.amount.plus(event.params.amount)
  balance.lastUpdatedAt = event.block.timestamp
  balance.save()
}

export function handleTokenWithdrawn(event: TokenWithdrawn): void {
  let balanceId = getVaultBalanceId(
    event.params.username,
    event.params.token as Bytes
  )

  let balance = VaultBalance.load(balanceId)
  if (balance) {
    store.remove("VaultBalance", balanceId)
  }
}

