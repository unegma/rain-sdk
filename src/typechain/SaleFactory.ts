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

export type SaleConstructorConfigStruct = {
  maximumSaleTimeout: BigNumberish;
  maximumCooldownDuration: BigNumberish;
  redeemableERC20Factory: string;
};

export type SaleConstructorConfigStructOutput = [
  BigNumber,
  BigNumber,
  string
] & {
  maximumSaleTimeout: BigNumber;
  maximumCooldownDuration: BigNumber;
  redeemableERC20Factory: string;
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

export type SaleConfigStruct = {
  canStartStateConfig: StateConfigStruct;
  canEndStateConfig: StateConfigStruct;
  calculatePriceStateConfig: StateConfigStruct;
  recipient: string;
  reserve: string;
  saleTimeout: BigNumberish;
  cooldownDuration: BigNumberish;
  minimumRaise: BigNumberish;
  dustSize: BigNumberish;
};

export type SaleConfigStructOutput = [
  StateConfigStructOutput,
  StateConfigStructOutput,
  StateConfigStructOutput,
  string,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  canStartStateConfig: StateConfigStructOutput;
  canEndStateConfig: StateConfigStructOutput;
  calculatePriceStateConfig: StateConfigStructOutput;
  recipient: string;
  reserve: string;
  saleTimeout: BigNumber;
  cooldownDuration: BigNumber;
  minimumRaise: BigNumber;
  dustSize: BigNumber;
};

export type ERC20ConfigStruct = {
  name: string;
  symbol: string;
  distributor: string;
  initialSupply: BigNumberish;
};

export type ERC20ConfigStructOutput = [string, string, string, BigNumber] & {
  name: string;
  symbol: string;
  distributor: string;
  initialSupply: BigNumber;
};

export type SaleRedeemableERC20ConfigStruct = {
  erc20Config: ERC20ConfigStruct;
  tier: string;
  minimumTier: BigNumberish;
  distributionEndForwardingAddress: string;
};

export type SaleRedeemableERC20ConfigStructOutput = [
  ERC20ConfigStructOutput,
  string,
  BigNumber,
  string
] & {
  erc20Config: ERC20ConfigStructOutput;
  tier: string;
  minimumTier: BigNumber;
  distributionEndForwardingAddress: string;
};

export interface SaleFactoryInterface extends utils.Interface {
  functions: {
    "createChild(bytes)": FunctionFragment;
    "createChildTyped(((bytes[],uint256[],uint256,uint256),(bytes[],uint256[],uint256,uint256),(bytes[],uint256[],uint256,uint256),address,address,uint256,uint256,uint256,uint256),((string,string,address,uint256),address,uint256,address))": FunctionFragment;
    "isChild(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createChild",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createChildTyped",
    values: [SaleConfigStruct, SaleRedeemableERC20ConfigStruct]
  ): string;
  encodeFunctionData(functionFragment: "isChild", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "createChild",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createChildTyped",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isChild", data: BytesLike): Result;

  events: {
    "Implementation(address,address)": EventFragment;
    "NewChild(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Implementation"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewChild"): EventFragment;
}

export type ImplementationEvent = TypedEvent<
  [string, string],
  { sender: string; implementation: string }
>;

export type ImplementationEventFilter = TypedEventFilter<ImplementationEvent>;

export type NewChildEvent = TypedEvent<
  [string, string],
  { sender: string; child: string }
>;

export type NewChildEventFilter = TypedEventFilter<NewChildEvent>;

export interface SaleFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SaleFactoryInterface;

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
    createChild(
      data_: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createChildTyped(
      config_: SaleConfigStruct,
      saleRedeemableERC20Config_: SaleRedeemableERC20ConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isChild(maybeChild_: string, overrides?: CallOverrides): Promise<[boolean]>;
  };

  createChild(
    data_: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createChildTyped(
    config_: SaleConfigStruct,
    saleRedeemableERC20Config_: SaleRedeemableERC20ConfigStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isChild(maybeChild_: string, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    createChild(data_: BytesLike, overrides?: CallOverrides): Promise<string>;

    createChildTyped(
      config_: SaleConfigStruct,
      saleRedeemableERC20Config_: SaleRedeemableERC20ConfigStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    isChild(maybeChild_: string, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    "Implementation(address,address)"(
      sender?: null,
      implementation?: null
    ): ImplementationEventFilter;
    Implementation(
      sender?: null,
      implementation?: null
    ): ImplementationEventFilter;

    "NewChild(address,address)"(
      sender?: null,
      child?: null
    ): NewChildEventFilter;
    NewChild(sender?: null, child?: null): NewChildEventFilter;
  };

  estimateGas: {
    createChild(
      data_: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createChildTyped(
      config_: SaleConfigStruct,
      saleRedeemableERC20Config_: SaleRedeemableERC20ConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isChild(maybeChild_: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    createChild(
      data_: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createChildTyped(
      config_: SaleConfigStruct,
      saleRedeemableERC20Config_: SaleRedeemableERC20ConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isChild(
      maybeChild_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
