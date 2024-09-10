import { Mint, Burn, RegistrationRenewed } from "../generated/XID/XID"
import { User, XIDToken, GlobalState } from "../generated/schema"
import { store, BigInt } from "@graphprotocol/graph-ts"
import { XID } from "../generated/XID/XID"

export function handleMint(event: Mint): void {
  let user = User.load(event.params.user.toHexString())
  if (user == null) {
    user = new User(event.params.user.toHexString())
    user.address = event.params.user
  }
  user.username = event.params.username

  let xidToken = new XIDToken(event.params.tokenId.toHexString())
  xidToken.tokenId = event.params.tokenId
  xidToken.owner = user.id
  xidToken.username = event.params.username
  xidToken.expirationTime = event.params.expirationTime

  user.xidToken = xidToken.id
  user.save()
  xidToken.save()
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

}

export function handleRegistrationRenewed(event: RegistrationRenewed): void {
  let xidToken = XIDToken.load(event.params.tokenId.toHexString())
  if (xidToken != null) {
    xidToken.expirationTime = event.params.newExpirationTime
    xidToken.save()
  }
}

