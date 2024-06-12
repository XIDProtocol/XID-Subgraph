import { SignerChanged, MintFeeChanged } from "../generated/XIDController/XIDController"
import { Signer, MintFee } from "../generated/schema"

export function handleSignerChanged(event: SignerChanged): void {
  let signer = new Signer(event.transaction.hash.toHex())
  signer.oldSigner = event.params.oldSigner
  signer.newSigner = event.params.newSigner
  signer.save()
}

export function handleMintFeeChanged(event: MintFeeChanged): void {
  let mintFee = new MintFee(event.transaction.hash.toHex())
  mintFee.oldFee = event.params.oldFee
  mintFee.newFee = event.params.newFee
  mintFee.save()
}
