import { Mint, Burn } from "../generated/XID/XID"
import { User, XIDToken } from "../generated/schema"
import { store } from "@graphprotocol/graph-ts"

// Mint event handler
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

  user.xidToken = xidToken.id
  user.save()
  xidToken.save()
}

// Burn event handler
export function handleBurn(event: Burn): void {
  let xidToken = XIDToken.load(event.params.tokenId.toHex())
  if (xidToken != null) {
    let user = User.load(xidToken.owner)
    if (user != null) {
      user.username = null
      user.xidToken = null
      user.save()
    }
    store.remove('XIDToken', xidToken.id)
  }
}