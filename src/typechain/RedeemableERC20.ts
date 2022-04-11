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

export type RedeemableERC20ConfigStruct = {
  reserve: string;
  erc20Config: ERC20ConfigStruct;
  tier: string;
  minimumTier: BigNumberish;
  distributionEndForwardingAddress: string;
};

export type RedeemableERC20ConfigStructOutput = [
  string,
  ERC20ConfigStructOutput,
  string,
  BigNumber,
  string
] & {
  reserve: string;
  erc20Config: ERC20ConfigStructOutput;
  tier: string;
  minimumTier: BigNumber;
  distributionEndForwardingAddress: string;
};

export interface RedeemableERC20Interface extends utils.Interface {
  functions: {
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "blockNumberForPhase(uint32[8],uint256)": FunctionFragment;
    "burn(uint256)": FunctionFragment;
    "burnFrom(address,uint256)": FunctionFragment;
    "currentPhase()": FunctionFragment;
    "decimals()": FunctionFragment;
    "decreaseAllowance(address,uint256)": FunctionFragment;
    "endDistribution(address)": FunctionFragment;
    "grantReceiver(address)": FunctionFragment;
    "grantSender(address)": FunctionFragment;
    "increaseAllowance(address,uint256)": FunctionFragment;
    "initialize((address,(string,string,address,uint256),address,uint256,address))": FunctionFragment;
    "isReceiver(address)": FunctionFragment;
    "isSender(address)": FunctionFragment;
    "minimumTier()": FunctionFragment;
    "name()": FunctionFragment;
    "newTreasuryAsset(address)": FunctionFragment;
    "phaseAtBlockNumber(uint32[8],uint256)": FunctionFragment;
    "phaseBlocks(uint256)": FunctionFragment;
    "redeem(address[],uint256)": FunctionFragment;
    "symbol()": FunctionFragment;
    "tier()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "blockNumberForPhase",
    values: [BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "burnFrom",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "currentPhase",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "endDistribution",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "grantReceiver",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "grantSender", values: [string]): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [RedeemableERC20ConfigStruct]
  ): string;
  encodeFunctionData(functionFragment: "isReceiver", values: [string]): string;
  encodeFunctionData(functionFragment: "isSender", values: [string]): string;
  encodeFunctionData(
    functionFragment: "minimumTier",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "newTreasuryAsset",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "phaseAtBlockNumber",
    values: [BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "phaseBlocks",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [string[], BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(functionFragment: "tier", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "blockNumberForPhase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burnFrom", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentPhase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "endDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "grantReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "grantSender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isReceiver", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isSender", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "minimumTier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "newTreasuryAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "phaseAtBlockNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "phaseBlocks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tier", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "Initialize(address,tuple)": EventFragment;
    "PhaseScheduled(address,uint256,uint256)": EventFragment;
    "Receiver(address,address)": EventFragment;
    "Redeem(address,address,uint256,uint256)": EventFragment;
    "Sender(address,address)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
    "TreasuryAsset(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialize"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PhaseScheduled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Receiver"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Redeem"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Sender"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TreasuryAsset"): EventFragment;
}

export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  { owner: string; spender: string; value: BigNumber }
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export type InitializeEvent = TypedEvent<
  [string, RedeemableERC20ConfigStructOutput],
  { sender: string; config: RedeemableERC20ConfigStructOutput }
>;

export type InitializeEventFilter = TypedEventFilter<InitializeEvent>;

export type PhaseScheduledEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { sender: string; newPhase: BigNumber; scheduledBlock: BigNumber }
>;

export type PhaseScheduledEventFilter = TypedEventFilter<PhaseScheduledEvent>;

export type ReceiverEvent = TypedEvent<
  [string, string],
  { sender: string; grantedReceiver: string }
>;

export type ReceiverEventFilter = TypedEventFilter<ReceiverEvent>;

export type RedeemEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  {
    sender: string;
    treasuryAsset: string;
    redeemAmount: BigNumber;
    assetAmount: BigNumber;
  }
>;

export type RedeemEventFilter = TypedEventFilter<RedeemEvent>;

export type SenderEvent = TypedEvent<
  [string, string],
  { sender: string; grantedSender: string }
>;

export type SenderEventFilter = TypedEventFilter<SenderEvent>;

export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  { from: string; to: string; value: BigNumber }
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export type TreasuryAssetEvent = TypedEvent<
  [string, string],
  { sender: string; asset: string }
>;

export type TreasuryAssetEventFilter = TypedEventFilter<TreasuryAssetEvent>;

export interface RedeemableERC20 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RedeemableERC20Interface;

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
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    blockNumberForPhase(
      phaseBlocks_: BigNumberish[],
      phase_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    burn(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    burnFrom(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    currentPhase(overrides?: CallOverrides): Promise<[BigNumber]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    endDistribution(
      distributor_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    grantReceiver(
      newReceiver_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    grantSender(
      newSender_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      config_: RedeemableERC20ConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isReceiver(
      maybeReceiver_: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isSender(
      maybeSender_: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    minimumTier(overrides?: CallOverrides): Promise<[BigNumber]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    newTreasuryAsset(
      newTreasuryAsset_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    phaseAtBlockNumber(
      phaseBlocks_: BigNumberish[],
      blockNumber_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    phaseBlocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    redeem(
      treasuryAssets_: string[],
      redeemAmount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    tier(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  blockNumberForPhase(
    phaseBlocks_: BigNumberish[],
    phase_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  burn(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  burnFrom(
    account: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  currentPhase(overrides?: CallOverrides): Promise<BigNumber>;

  decimals(overrides?: CallOverrides): Promise<number>;

  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  endDistribution(
    distributor_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  grantReceiver(
    newReceiver_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  grantSender(
    newSender_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    config_: RedeemableERC20ConfigStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isReceiver(
    maybeReceiver_: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isSender(maybeSender_: string, overrides?: CallOverrides): Promise<boolean>;

  minimumTier(overrides?: CallOverrides): Promise<BigNumber>;

  name(overrides?: CallOverrides): Promise<string>;

  newTreasuryAsset(
    newTreasuryAsset_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  phaseAtBlockNumber(
    phaseBlocks_: BigNumberish[],
    blockNumber_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  phaseBlocks(arg0: BigNumberish, overrides?: CallOverrides): Promise<number>;

  redeem(
    treasuryAssets_: string[],
    redeemAmount_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  tier(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    blockNumberForPhase(
      phaseBlocks_: BigNumberish[],
      phase_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    burnFrom(
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    currentPhase(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    endDistribution(
      distributor_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    grantReceiver(
      newReceiver_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    grantSender(newSender_: string, overrides?: CallOverrides): Promise<void>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initialize(
      config_: RedeemableERC20ConfigStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    isReceiver(
      maybeReceiver_: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isSender(maybeSender_: string, overrides?: CallOverrides): Promise<boolean>;

    minimumTier(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    newTreasuryAsset(
      newTreasuryAsset_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    phaseAtBlockNumber(
      phaseBlocks_: BigNumberish[],
      blockNumber_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    phaseBlocks(arg0: BigNumberish, overrides?: CallOverrides): Promise<number>;

    redeem(
      treasuryAssets_: string[],
      redeemAmount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    tier(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): ApprovalEventFilter;
    Approval(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): ApprovalEventFilter;

    "Initialize(address,tuple)"(
      sender?: null,
      config?: null
    ): InitializeEventFilter;
    Initialize(sender?: null, config?: null): InitializeEventFilter;

    "PhaseScheduled(address,uint256,uint256)"(
      sender?: null,
      newPhase?: null,
      scheduledBlock?: null
    ): PhaseScheduledEventFilter;
    PhaseScheduled(
      sender?: null,
      newPhase?: null,
      scheduledBlock?: null
    ): PhaseScheduledEventFilter;

    "Receiver(address,address)"(
      sender?: null,
      grantedReceiver?: null
    ): ReceiverEventFilter;
    Receiver(sender?: null, grantedReceiver?: null): ReceiverEventFilter;

    "Redeem(address,address,uint256,uint256)"(
      sender?: null,
      treasuryAsset?: null,
      redeemAmount?: null,
      assetAmount?: null
    ): RedeemEventFilter;
    Redeem(
      sender?: null,
      treasuryAsset?: null,
      redeemAmount?: null,
      assetAmount?: null
    ): RedeemEventFilter;

    "Sender(address,address)"(
      sender?: null,
      grantedSender?: null
    ): SenderEventFilter;
    Sender(sender?: null, grantedSender?: null): SenderEventFilter;

    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TransferEventFilter;
    Transfer(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TransferEventFilter;

    "TreasuryAsset(address,address)"(
      sender?: null,
      asset?: null
    ): TreasuryAssetEventFilter;
    TreasuryAsset(sender?: null, asset?: null): TreasuryAssetEventFilter;
  };

  estimateGas: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    blockNumberForPhase(
      phaseBlocks_: BigNumberish[],
      phase_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    burnFrom(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    currentPhase(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    endDistribution(
      distributor_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    grantReceiver(
      newReceiver_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    grantSender(
      newSender_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      config_: RedeemableERC20ConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isReceiver(
      maybeReceiver_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isSender(
      maybeSender_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    minimumTier(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    newTreasuryAsset(
      newTreasuryAsset_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    phaseAtBlockNumber(
      phaseBlocks_: BigNumberish[],
      blockNumber_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    phaseBlocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    redeem(
      treasuryAssets_: string[],
      redeemAmount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    tier(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    blockNumberForPhase(
      phaseBlocks_: BigNumberish[],
      phase_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burn(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    burnFrom(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    currentPhase(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    endDistribution(
      distributor_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    grantReceiver(
      newReceiver_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    grantSender(
      newSender_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      config_: RedeemableERC20ConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isReceiver(
      maybeReceiver_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isSender(
      maybeSender_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minimumTier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    newTreasuryAsset(
      newTreasuryAsset_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    phaseAtBlockNumber(
      phaseBlocks_: BigNumberish[],
      blockNumber_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    phaseBlocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    redeem(
      treasuryAssets_: string[],
      redeemAmount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
