/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type StateStruct = {
  stackIndex: BigNumberish;
  stack: BigNumberish[];
  sources: BytesLike[];
  constants: BigNumberish[];
  arguments: BigNumberish[];
};

export type StateStructOutput = [
  BigNumber,
  BigNumber[],
  string[],
  BigNumber[],
  BigNumber[]
] & {
  stackIndex: BigNumber;
  stack: BigNumber[];
  sources: string[];
  constants: BigNumber[];
  arguments: BigNumber[];
};

export type StateConfigStruct = {
  sources: BytesLike[];
  constants: BigNumberish[];
  stackLength: BigNumberish;
  argumentsLength: BigNumberish;
};

export type StateConfigStructOutput = [
  string[],
  BigNumber[],
  BigNumber,
  BigNumber
] & {
  sources: string[];
  constants: BigNumber[];
  stackLength: BigNumber;
  argumentsLength: BigNumber;
};

export interface CombineTierInterface extends utils.Interface {
  functions: {
    "initialize((bytes[],uint256[],uint256,uint256))": FunctionFragment;
    "report(address)": FunctionFragment;
    "setTier(address,uint256,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "initialize",
    values: [StateConfigStruct]
  ): string;
  encodeFunctionData(functionFragment: "report", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setTier",
    values: [string, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "report", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setTier", data: BytesLike): Result;

  events: {
    "Snapshot(address,address,tuple)": EventFragment;
    "TierChange(address,address,uint256,uint256,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Snapshot"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TierChange"): EventFragment;
}

export type SnapshotEvent = TypedEvent<
  [string, string, StateStructOutput],
  { sender: string; pointer: string; state: StateStructOutput }
>;

export type SnapshotEventFilter = TypedEventFilter<SnapshotEvent>;

export type TierChangeEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, string],
  {
    sender: string;
    account: string;
    startTier: BigNumber;
    endTier: BigNumber;
    data: string;
  }
>;

export type TierChangeEventFilter = TypedEventFilter<TierChangeEvent>;

export interface CombineTier extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CombineTierInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    initialize(
      config_: StateConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    report(account_: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    setTier(
      arg0: string,
      arg1: BigNumberish,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  initialize(
    config_: StateConfigStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  report(account_: string, overrides?: CallOverrides): Promise<BigNumber>;

  setTier(
    arg0: string,
    arg1: BigNumberish,
    arg2: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    initialize(
      config_: StateConfigStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    report(account_: string, overrides?: CallOverrides): Promise<BigNumber>;

    setTier(
      arg0: string,
      arg1: BigNumberish,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Snapshot(address,address,tuple)"(
      sender?: null,
      pointer?: null,
      state?: null
    ): SnapshotEventFilter;
    Snapshot(sender?: null, pointer?: null, state?: null): SnapshotEventFilter;

    "TierChange(address,address,uint256,uint256,bytes)"(
      sender?: null,
      account?: null,
      startTier?: null,
      endTier?: null,
      data?: null
    ): TierChangeEventFilter;
    TierChange(
      sender?: null,
      account?: null,
      startTier?: null,
      endTier?: null,
      data?: null
    ): TierChangeEventFilter;
  };

  estimateGas: {
    initialize(
      config_: StateConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    report(account_: string, overrides?: CallOverrides): Promise<BigNumber>;

    setTier(
      arg0: string,
      arg1: BigNumberish,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    initialize(
      config_: StateConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    report(
      account_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setTier(
      arg0: string,
      arg1: BigNumberish,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
