import { Address } from "@graphprotocol/graph-ts"
import { ERC20 } from "../generated/XVault/ERC20"

export function fetchTokenName(tokenAddress: Address): string {
  let contract = ERC20.bind(tokenAddress)
  let nameResult = contract.try_name()
  return nameResult.reverted ? "Unknown" : nameResult.value
}

export function fetchTokenSymbol(tokenAddress: Address): string {
  let contract = ERC20.bind(tokenAddress)
  let symbolResult = contract.try_symbol()
  return symbolResult.reverted ? "Unknown" : symbolResult.value
}

export function fetchTokenDecimals(tokenAddress: Address): i32 {
  let contract = ERC20.bind(tokenAddress)
  let decimalsResult = contract.try_decimals()
  return decimalsResult.reverted ? 18 : decimalsResult.value
} 

