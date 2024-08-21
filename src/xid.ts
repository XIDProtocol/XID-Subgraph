import { Mint, Burn, RegistrationRenewed } from "../generated/XID/XID"
import { User, XIDToken, GlobalState } from "../generated/schema"
import { store, BigInt } from "@graphprotocol/graph-ts"
import { XID } from "../generated/XID/XID"

export function handleMint(event: Mint): void {
  let user = User.load(event.params.user.toHex())
  if (user == null) {
    user = new User(event.params.user.toHex())
    user.address = event.params.user
  } 
  user.username = event.params.username

  let xidToken = new XIDToken(event.params.tokenId.toHex())
  xidToken.tokenId = event.params.tokenId
  xidToken.owner = user.id
  xidToken.username = event.params.username
  xidToken.expirationTime = event.params.expirationTime
  xidToken.isValid = true

  user.xidToken = xidToken.id
  user.save()
  xidToken.save()

  updateGlobalState(event.block.timestamp)
}

export function handleBurn(event: Burn): void {
  let xidToken = XIDToken.load(event.params.tokenId.toHex())
  if (xidToken != null) {
    let user = User.load(xidToken.owner)
    if (user != null) {
      store.remove('User', user.id)
    }
    store.remove('XIDToken', xidToken.id)
  }

  updateGlobalState(event.block.timestamp)
}

export function handleRegistrationRenewed(event: RegistrationRenewed): void {
  let xidToken = XIDToken.load(event.params.tokenId.toHex())
  if (xidToken != null) {
    xidToken.expirationTime = event.params.newExpirationTime
    xidToken.isValid = true
    xidToken.save()
  }

  updateGlobalState(event.block.timestamp)
}

function updateGlobalState(timestamp: BigInt): void {
  let globalState = GlobalState.load("1")
  if (globalState == null) {
    globalState = new GlobalState("1")
    globalState.lastCheckTime = timestamp
  }
  globalState.lastCheckTime = timestamp
  globalState.save()

  checkExpiredTokens(timestamp)
}

function checkExpiredTokens(currentTime: BigInt): void {
  let xidContract = XID.bind(XID.address)

  let tokens = XIDToken.load()
  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i]
    if (token.expirationTime.le(currentTime) && token.isValid) {
      token.isValid = false
      token.save()

      let user = User.load(token.owner)
      if (user != null) {
        user.username = null
        user.xidToken = null
        user.save()
      }
    }
  }
}