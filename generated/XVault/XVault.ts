// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class EthDeposited extends ethereum.Event {
  get params(): EthDeposited__Params {
    return new EthDeposited__Params(this);
  }
}

export class EthDeposited__Params {
  _event: EthDeposited;

  constructor(event: EthDeposited) {
    this._event = event;
  }

  get usernameHash(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get username(): string {
    return this._event.parameters[1].value.toString();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class EthWithdrawn extends ethereum.Event {
  get params(): EthWithdrawn__Params {
    return new EthWithdrawn__Params(this);
  }
}

export class EthWithdrawn__Params {
  _event: EthWithdrawn;

  constructor(event: EthWithdrawn) {
    this._event = event;
  }

  get usernameHash(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get username(): string {
    return this._event.parameters[1].value.toString();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class FeesWithdrawn extends ethereum.Event {
  get params(): FeesWithdrawn__Params {
    return new FeesWithdrawn__Params(this);
  }
}

export class FeesWithdrawn__Params {
  _event: FeesWithdrawn;

  constructor(event: FeesWithdrawn) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class InactiveBalanceCleared extends ethereum.Event {
  get params(): InactiveBalanceCleared__Params {
    return new InactiveBalanceCleared__Params(this);
  }
}

export class InactiveBalanceCleared__Params {
  _event: InactiveBalanceCleared;

  constructor(event: InactiveBalanceCleared) {
    this._event = event;
  }

  get username(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get ethAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get tokens(): Array<Address> {
    return this._event.parameters[2].value.toAddressArray();
  }

  get amounts(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TokenDeposited extends ethereum.Event {
  get params(): TokenDeposited__Params {
    return new TokenDeposited__Params(this);
  }
}

export class TokenDeposited__Params {
  _event: TokenDeposited;

  constructor(event: TokenDeposited) {
    this._event = event;
  }

  get usernameHash(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get username(): string {
    return this._event.parameters[1].value.toString();
  }

  get token(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class TokenWithdrawn extends ethereum.Event {
  get params(): TokenWithdrawn__Params {
    return new TokenWithdrawn__Params(this);
  }
}

export class TokenWithdrawn__Params {
  _event: TokenWithdrawn;

  constructor(event: TokenWithdrawn) {
    this._event = event;
  }

  get usernameHash(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get username(): string {
    return this._event.parameters[1].value.toString();
  }

  get token(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class XVault__getAllBalancesResult {
  value0: BigInt;
  value1: Array<Address>;
  value2: Array<BigInt>;

  constructor(value0: BigInt, value1: Array<Address>, value2: Array<BigInt>) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddressArray(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigIntArray(this.value2));
    return map;
  }

  getEthBalance(): BigInt {
    return this.value0;
  }

  getTokens(): Array<Address> {
    return this.value1;
  }

  getBalances(): Array<BigInt> {
    return this.value2;
  }
}

export class XVault extends ethereum.SmartContract {
  static bind(address: Address): XVault {
    return new XVault("XVault", address);
  }

  FEE_RATE(): BigInt {
    let result = super.call("FEE_RATE", "FEE_RATE():(uint256)", []);

    return result[0].toBigInt();
  }

  try_FEE_RATE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("FEE_RATE", "FEE_RATE():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MAX_INACTIVE_PERIOD(): BigInt {
    let result = super.call(
      "MAX_INACTIVE_PERIOD",
      "MAX_INACTIVE_PERIOD():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_MAX_INACTIVE_PERIOD(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MAX_INACTIVE_PERIOD",
      "MAX_INACTIVE_PERIOD():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  accumulatedEthFees(): BigInt {
    let result = super.call(
      "accumulatedEthFees",
      "accumulatedEthFees():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_accumulatedEthFees(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "accumulatedEthFees",
      "accumulatedEthFees():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  accumulatedTokenFees(param0: Address): BigInt {
    let result = super.call(
      "accumulatedTokenFees",
      "accumulatedTokenFees(address):(uint256)",
      [ethereum.Value.fromAddress(param0)],
    );

    return result[0].toBigInt();
  }

  try_accumulatedTokenFees(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "accumulatedTokenFees",
      "accumulatedTokenFees(address):(uint256)",
      [ethereum.Value.fromAddress(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  ethBalances(param0: Bytes): BigInt {
    let result = super.call("ethBalances", "ethBalances(bytes32):(uint256)", [
      ethereum.Value.fromFixedBytes(param0),
    ]);

    return result[0].toBigInt();
  }

  try_ethBalances(param0: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "ethBalances",
      "ethBalances(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getAllBalances(username: string): XVault__getAllBalancesResult {
    let result = super.call(
      "getAllBalances",
      "getAllBalances(string):(uint256,address[],uint256[])",
      [ethereum.Value.fromString(username)],
    );

    return new XVault__getAllBalancesResult(
      result[0].toBigInt(),
      result[1].toAddressArray(),
      result[2].toBigIntArray(),
    );
  }

  try_getAllBalances(
    username: string,
  ): ethereum.CallResult<XVault__getAllBalancesResult> {
    let result = super.tryCall(
      "getAllBalances",
      "getAllBalances(string):(uint256,address[],uint256[])",
      [ethereum.Value.fromString(username)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new XVault__getAllBalancesResult(
        value[0].toBigInt(),
        value[1].toAddressArray(),
        value[2].toBigIntArray(),
      ),
    );
  }

  getEthBalance(username: string): BigInt {
    let result = super.call(
      "getEthBalance",
      "getEthBalance(string):(uint256)",
      [ethereum.Value.fromString(username)],
    );

    return result[0].toBigInt();
  }

  try_getEthBalance(username: string): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getEthBalance",
      "getEthBalance(string):(uint256)",
      [ethereum.Value.fromString(username)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getSupportedTokens(): Array<Address> {
    let result = super.call(
      "getSupportedTokens",
      "getSupportedTokens():(address[])",
      [],
    );

    return result[0].toAddressArray();
  }

  try_getSupportedTokens(): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getSupportedTokens",
      "getSupportedTokens():(address[])",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getTokenBalance(username: string, token: Address): BigInt {
    let result = super.call(
      "getTokenBalance",
      "getTokenBalance(string,address):(uint256)",
      [ethereum.Value.fromString(username), ethereum.Value.fromAddress(token)],
    );

    return result[0].toBigInt();
  }

  try_getTokenBalance(
    username: string,
    token: Address,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTokenBalance",
      "getTokenBalance(string,address):(uint256)",
      [ethereum.Value.fromString(username), ethereum.Value.fromAddress(token)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isTokenSupported(param0: Address): boolean {
    let result = super.call(
      "isTokenSupported",
      "isTokenSupported(address):(bool)",
      [ethereum.Value.fromAddress(param0)],
    );

    return result[0].toBoolean();
  }

  try_isTokenSupported(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isTokenSupported",
      "isTokenSupported(address):(bool)",
      [ethereum.Value.fromAddress(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  lastDepositTime(param0: Bytes): BigInt {
    let result = super.call(
      "lastDepositTime",
      "lastDepositTime(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(param0)],
    );

    return result[0].toBigInt();
  }

  try_lastDepositTime(param0: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "lastDepositTime",
      "lastDepositTime(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportedTokens(param0: BigInt): Address {
    let result = super.call(
      "supportedTokens",
      "supportedTokens(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );

    return result[0].toAddress();
  }

  try_supportedTokens(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "supportedTokens",
      "supportedTokens(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  tokenBalances(param0: Bytes, param1: Address): BigInt {
    let result = super.call(
      "tokenBalances",
      "tokenBalances(bytes32,address):(uint256)",
      [
        ethereum.Value.fromFixedBytes(param0),
        ethereum.Value.fromAddress(param1),
      ],
    );

    return result[0].toBigInt();
  }

  try_tokenBalances(
    param0: Bytes,
    param1: Address,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenBalances",
      "tokenBalances(bytes32,address):(uint256)",
      [
        ethereum.Value.fromFixedBytes(param0),
        ethereum.Value.fromAddress(param1),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  xid(): Address {
    let result = super.call("xid", "xid():(address)", []);

    return result[0].toAddress();
  }

  try_xid(): ethereum.CallResult<Address> {
    let result = super.tryCall("xid", "xid():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _xid(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ClearInactiveBalanceCall extends ethereum.Call {
  get inputs(): ClearInactiveBalanceCall__Inputs {
    return new ClearInactiveBalanceCall__Inputs(this);
  }

  get outputs(): ClearInactiveBalanceCall__Outputs {
    return new ClearInactiveBalanceCall__Outputs(this);
  }
}

export class ClearInactiveBalanceCall__Inputs {
  _call: ClearInactiveBalanceCall;

  constructor(call: ClearInactiveBalanceCall) {
    this._call = call;
  }

  get username(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class ClearInactiveBalanceCall__Outputs {
  _call: ClearInactiveBalanceCall;

  constructor(call: ClearInactiveBalanceCall) {
    this._call = call;
  }
}

export class DepositEthCall extends ethereum.Call {
  get inputs(): DepositEthCall__Inputs {
    return new DepositEthCall__Inputs(this);
  }

  get outputs(): DepositEthCall__Outputs {
    return new DepositEthCall__Outputs(this);
  }
}

export class DepositEthCall__Inputs {
  _call: DepositEthCall;

  constructor(call: DepositEthCall) {
    this._call = call;
  }

  get username(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class DepositEthCall__Outputs {
  _call: DepositEthCall;

  constructor(call: DepositEthCall) {
    this._call = call;
  }
}

export class DepositTokenCall extends ethereum.Call {
  get inputs(): DepositTokenCall__Inputs {
    return new DepositTokenCall__Inputs(this);
  }

  get outputs(): DepositTokenCall__Outputs {
    return new DepositTokenCall__Outputs(this);
  }
}

export class DepositTokenCall__Inputs {
  _call: DepositTokenCall;

  constructor(call: DepositTokenCall) {
    this._call = call;
  }

  get username(): string {
    return this._call.inputValues[0].value.toString();
  }

  get token(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class DepositTokenCall__Outputs {
  _call: DepositTokenCall;

  constructor(call: DepositTokenCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawAllCall extends ethereum.Call {
  get inputs(): WithdrawAllCall__Inputs {
    return new WithdrawAllCall__Inputs(this);
  }

  get outputs(): WithdrawAllCall__Outputs {
    return new WithdrawAllCall__Outputs(this);
  }
}

export class WithdrawAllCall__Inputs {
  _call: WithdrawAllCall;

  constructor(call: WithdrawAllCall) {
    this._call = call;
  }

  get username(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class WithdrawAllCall__Outputs {
  _call: WithdrawAllCall;

  constructor(call: WithdrawAllCall) {
    this._call = call;
  }
}

export class WithdrawEthCall extends ethereum.Call {
  get inputs(): WithdrawEthCall__Inputs {
    return new WithdrawEthCall__Inputs(this);
  }

  get outputs(): WithdrawEthCall__Outputs {
    return new WithdrawEthCall__Outputs(this);
  }
}

export class WithdrawEthCall__Inputs {
  _call: WithdrawEthCall;

  constructor(call: WithdrawEthCall) {
    this._call = call;
  }

  get username(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class WithdrawEthCall__Outputs {
  _call: WithdrawEthCall;

  constructor(call: WithdrawEthCall) {
    this._call = call;
  }
}

export class WithdrawFeesCall extends ethereum.Call {
  get inputs(): WithdrawFeesCall__Inputs {
    return new WithdrawFeesCall__Inputs(this);
  }

  get outputs(): WithdrawFeesCall__Outputs {
    return new WithdrawFeesCall__Outputs(this);
  }
}

export class WithdrawFeesCall__Inputs {
  _call: WithdrawFeesCall;

  constructor(call: WithdrawFeesCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class WithdrawFeesCall__Outputs {
  _call: WithdrawFeesCall;

  constructor(call: WithdrawFeesCall) {
    this._call = call;
  }
}

export class WithdrawTokenCall extends ethereum.Call {
  get inputs(): WithdrawTokenCall__Inputs {
    return new WithdrawTokenCall__Inputs(this);
  }

  get outputs(): WithdrawTokenCall__Outputs {
    return new WithdrawTokenCall__Outputs(this);
  }
}

export class WithdrawTokenCall__Inputs {
  _call: WithdrawTokenCall;

  constructor(call: WithdrawTokenCall) {
    this._call = call;
  }

  get username(): string {
    return this._call.inputValues[0].value.toString();
  }

  get token(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class WithdrawTokenCall__Outputs {
  _call: WithdrawTokenCall;

  constructor(call: WithdrawTokenCall) {
    this._call = call;
  }
}
