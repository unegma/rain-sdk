/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface SaturatingMathTestInterface extends utils.Interface {
  functions: {
    "saturatingAdd(uint256,uint256)": FunctionFragment;
    "saturatingMul(uint256,uint256)": FunctionFragment;
    "saturatingSub(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "saturatingAdd",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "saturatingMul",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "saturatingSub",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "saturatingAdd",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "saturatingMul",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "saturatingSub",
    data: BytesLike
  ): Result;

  events: {};
}

export interface SaturatingMathTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SaturatingMathTestInterface;

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
    saturatingAdd(
      a_: BigNumberish,
      b_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    saturatingMul(
      a_: BigNumberish,
      b_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    saturatingSub(
      a_: BigNumberish,
      b_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  saturatingAdd(
    a_: BigNumberish,
    b_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  saturatingMul(
    a_: BigNumberish,
    b_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  saturatingSub(
    a_: BigNumberish,
    b_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    saturatingAdd(
      a_: BigNumberish,
      b_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    saturatingMul(
      a_: BigNumberish,
      b_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    saturatingSub(
      a_: BigNumberish,
      b_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    saturatingAdd(
      a_: BigNumberish,
      b_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    saturatingMul(
      a_: BigNumberish,
      b_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    saturatingSub(
      a_: BigNumberish,
      b_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    saturatingAdd(
      a_: BigNumberish,
      b_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    saturatingMul(
      a_: BigNumberish,
      b_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    saturatingSub(
      a_: BigNumberish,
      b_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
