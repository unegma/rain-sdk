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

export interface PhasedTestInterface extends utils.Interface {
  functions: {
    "blockNumberForPhase(uint32[8],uint256)": FunctionFragment;
    "condition()": FunctionFragment;
    "currentPhase()": FunctionFragment;
    "phaseAtBlockNumber(uint32[8],uint256)": FunctionFragment;
    "phaseBlocks(uint256)": FunctionFragment;
    "runsOnlyAtLeastPhase(uint256)": FunctionFragment;
    "runsOnlyPhase(uint256)": FunctionFragment;
    "testScheduleNextPhase(uint256)": FunctionFragment;
    "toggleCondition()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "blockNumberForPhase",
    values: [BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "condition", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "currentPhase",
    values?: undefined
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
    functionFragment: "runsOnlyAtLeastPhase",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "runsOnlyPhase",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "testScheduleNextPhase",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "toggleCondition",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "blockNumberForPhase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "condition", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentPhase",
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
  decodeFunctionResult(
    functionFragment: "runsOnlyAtLeastPhase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "runsOnlyPhase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testScheduleNextPhase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "toggleCondition",
    data: BytesLike
  ): Result;

  events: {
    "PhaseScheduled(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PhaseScheduled"): EventFragment;
}

export type PhaseScheduledEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { sender: string; newPhase: BigNumber; scheduledBlock: BigNumber }
>;

export type PhaseScheduledEventFilter = TypedEventFilter<PhaseScheduledEvent>;

export interface PhasedTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PhasedTestInterface;

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
    blockNumberForPhase(
      phaseBlocks_: BigNumberish[],
      phase_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    condition(overrides?: CallOverrides): Promise<[boolean]>;

    currentPhase(overrides?: CallOverrides): Promise<[BigNumber]>;

    phaseAtBlockNumber(
      phaseBlocks_: BigNumberish[],
      blockNumber_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    phaseBlocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    runsOnlyAtLeastPhase(
      phase_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    runsOnlyPhase(
      phase_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    testScheduleNextPhase(
      phaseBlock_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    toggleCondition(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  blockNumberForPhase(
    phaseBlocks_: BigNumberish[],
    phase_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  condition(overrides?: CallOverrides): Promise<boolean>;

  currentPhase(overrides?: CallOverrides): Promise<BigNumber>;

  phaseAtBlockNumber(
    phaseBlocks_: BigNumberish[],
    blockNumber_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  phaseBlocks(arg0: BigNumberish, overrides?: CallOverrides): Promise<number>;

  runsOnlyAtLeastPhase(
    phase_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  runsOnlyPhase(
    phase_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  testScheduleNextPhase(
    phaseBlock_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  toggleCondition(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    blockNumberForPhase(
      phaseBlocks_: BigNumberish[],
      phase_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    condition(overrides?: CallOverrides): Promise<boolean>;

    currentPhase(overrides?: CallOverrides): Promise<BigNumber>;

    phaseAtBlockNumber(
      phaseBlocks_: BigNumberish[],
      blockNumber_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    phaseBlocks(arg0: BigNumberish, overrides?: CallOverrides): Promise<number>;

    runsOnlyAtLeastPhase(
      phase_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    runsOnlyPhase(
      phase_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    testScheduleNextPhase(
      phaseBlock_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    toggleCondition(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
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
  };

  estimateGas: {
    blockNumberForPhase(
      phaseBlocks_: BigNumberish[],
      phase_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    condition(overrides?: CallOverrides): Promise<BigNumber>;

    currentPhase(overrides?: CallOverrides): Promise<BigNumber>;

    phaseAtBlockNumber(
      phaseBlocks_: BigNumberish[],
      blockNumber_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    phaseBlocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    runsOnlyAtLeastPhase(
      phase_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    runsOnlyPhase(
      phase_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testScheduleNextPhase(
      phaseBlock_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    toggleCondition(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    blockNumberForPhase(
      phaseBlocks_: BigNumberish[],
      phase_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    condition(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    currentPhase(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    phaseAtBlockNumber(
      phaseBlocks_: BigNumberish[],
      blockNumber_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    phaseBlocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    runsOnlyAtLeastPhase(
      phase_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    runsOnlyPhase(
      phase_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    testScheduleNextPhase(
      phaseBlock_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    toggleCondition(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
