/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PhasedScheduleTest,
  PhasedScheduleTestInterface,
} from "../PhasedScheduleTest";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newPhase",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "scheduledBlock",
        type: "uint256",
      },
    ],
    name: "PhaseScheduled",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint32[8]",
        name: "phaseBlocks_",
        type: "uint32[8]",
      },
      {
        internalType: "uint256",
        name: "phase_",
        type: "uint256",
      },
    ],
    name: "blockNumberForPhase",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "currentPhase",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32[8]",
        name: "phaseBlocks_",
        type: "uint32[8]",
      },
      {
        internalType: "uint256",
        name: "blockNumber_",
        type: "uint256",
      },
    ],
    name: "phaseAtBlockNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "phaseBlocks",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "testScheduleNextPhase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001961001e565b610194565b600054600163ffffffff909116106100385761003861017e565b604080516101008101825263ffffffff80825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915261008960008260086100cd565b50604080513381526000602082018190528183015290517fba85f6676f17ca992195e3cb204ae48c68666b109edc14a794e5d894387d25d39181900360600190a150565b6001830191839082156101595791602002820160005b8382111561012757835183826101000a81548163ffffffff021916908363ffffffff16021790555092602001926004016020816003010492830192600103026100e3565b80156101575782816101000a81549063ffffffff0219169055600401602081600301049283019260010302610127565b505b50610165929150610169565b5090565b5b80821115610165576000815560010161016a565b634e487b7160e01b600052600160045260246000fd5b610757806101a36000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80639923c94b116100505780639923c94b1461009a578063b8ffd02c146100c2578063e2c45a40146100d557600080fd5b8063055ad42e1461006c578063634991af14610087575b600080fd5b6100746100df565b6040519081526020015b60405180910390f35b6100746100953660046105b8565b610149565b6100ad6100a8366004610642565b61019f565b60405163ffffffff909116815260200161007e565b6100746100d03660046105b8565b6101cf565b6100dd61020e565b005b60408051610100810191829052600091610144919083906008908280855b82829054906101000a900463ffffffff1663ffffffff16815260200190600401906020826003010492830192600103820291508084116100fd579050505050505043610149565b905090565b6000805b6008811015610193578381600881106101685761016861065b565b602002015163ffffffff16831015610181579050610199565b8061018b816106b9565b91505061014d565b50600890505b92915050565b600081600881106101af57600080fd5b60089182820401919006600402915054906101000a900463ffffffff1681565b60008082116101df576000610201565b826101eb6001846106f2565b600881106101fb576101fb61065b565b60200201515b63ffffffff169392505050565b60006102186100df565b90506102238161024d565b610237610231826001610709565b436102c7565b61024a610245826001610709565b61024d565b50565b80806102576100df565b146102c3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f4241445f5048415345000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b5050565b80431115610331576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e4558545f424c4f434b5f50415354000000000000000000000000000000000060448201526064016102ba565b63ffffffff811061039e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4e4558545f424c4f434b5f554e494e495449414c495a4544000000000000000060448201526064016102ba565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8201806103ca6100df565b14610431576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f4e4558545f50484153450000000000000000000000000000000000000000000060448201526064016102ba565b600081600881106104445761044461065b565b60088104919091015460079091166004026101000a900463ffffffff908116146104ca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4558545f424c4f434b5f53455400000000000000000000000000000000000060448201526064016102ba565b81600082600881106104de576104de61065b565b600891828204019190066004026101000a81548163ffffffff021916908363ffffffff1602179055507fba85f6676f17ca992195e3cb204ae48c68666b109edc14a794e5d894387d25d33384846040516105639392919073ffffffffffffffffffffffffffffffffffffffff9390931683526020830191909152604082015260600190565b60405180910390a1505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b803563ffffffff811681146105b357600080fd5b919050565b60008061012083850312156105cc57600080fd5b83601f8401126105db57600080fd5b60405161010080820182811067ffffffffffffffff8211171561060057610600610570565b6040528401818682111561061357600080fd5b855b82811015610634576106268161059f565b825260209182019101610615565b509196903595509350505050565b60006020828403121561065457600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156106eb576106eb61068a565b5060010190565b6000828210156107045761070461068a565b500390565b6000821982111561071c5761071c61068a565b50019056fea264697066735822122070d3daeac36cc3b375563d9bfe0d3989c80a16b73546ee561a98a67c5dcdda1864736f6c634300080a0033";

type PhasedScheduleTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PhasedScheduleTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PhasedScheduleTest__factory extends ContractFactory {
  constructor(...args: PhasedScheduleTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PhasedScheduleTest> {
    return super.deploy(overrides || {}) as Promise<PhasedScheduleTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PhasedScheduleTest {
    return super.attach(address) as PhasedScheduleTest;
  }
  connect(signer: Signer): PhasedScheduleTest__factory {
    return super.connect(signer) as PhasedScheduleTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PhasedScheduleTestInterface {
    return new utils.Interface(_abi) as PhasedScheduleTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PhasedScheduleTest {
    return new Contract(address, _abi, signerOrProvider) as PhasedScheduleTest;
  }
}
