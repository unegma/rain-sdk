/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ReadWriteTier, ReadWriteTierInterface } from "../ReadWriteTier";

const _abi = [
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
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startTier",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endTier",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "TierChange",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account_",
        type: "address",
      },
    ],
    name: "report",
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
        internalType: "address",
        name: "account_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "endTier_",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data_",
        type: "bytes",
      },
    ],
    name: "setTier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610536806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80638a200fff1461003b578063e053ea3114610050575b600080fd5b61004e6100493660046103d1565b610075565b005b61006361005e366004610458565b61017e565b60405190815260200160405180910390f35b600083116100e4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f5345545f5a45524f5f544945520000000000000000000000000000000000000060448201526064015b60405180910390fd5b60006100ef8561017e565b905060006100fd82436101fb565b905061010b82828743610235565b73ffffffffffffffffffffffffffffffffffffffff87166000908152602081905260409081902091909155517f38a6eea2baad9b582cfacaee65ba01dcf8fa591a082e5188dbf89cd8560228c89061016e903390899085908a908a908a9061047a565b60405180910390a1505050505050565b73ffffffffffffffffffffffffffffffffffffffff81166000908152602081905260408120546101ce577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101f5565b73ffffffffffffffffffffffffffffffffffffffff82166000908152602081905260409020545b92915050565b6000805b600881101561022b57828160200285901c63ffffffff1611156102235790506101f5565b6001016101ff565b5060089392505050565b600083831061024f5761024a85858585610262565b610259565b6102598584610308565b95945050505050565b60008260088111156102d0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4d41585f5449455200000000000000000000000000000000000000000000000060448201526064016100db565b6000855b858110156102fc5763ffffffff6020820290811b199890981685891b179791506001016102d4565b50959695505050505050565b6000816008811115610376576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4d41585f5449455200000000000000000000000000000000000000000000000060448201526064016100db565b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60209190910290811c901b1790565b803573ffffffffffffffffffffffffffffffffffffffff811681146103cc57600080fd5b919050565b600080600080606085870312156103e757600080fd5b6103f0856103a8565b935060208501359250604085013567ffffffffffffffff8082111561041457600080fd5b818701915087601f83011261042857600080fd5b81358181111561043757600080fd5b88602082850101111561044957600080fd5b95989497505060200194505050565b60006020828403121561046a57600080fd5b610473826103a8565b9392505050565b600073ffffffffffffffffffffffffffffffffffffffff808916835280881660208401525085604083015284606083015260a060808301528260a0830152828460c0840137600060c0848401015260c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f850116830101905097965050505050505056fea26469706673582212208b1351c9ebc626d3182f0c0b7060139e1a1db13bc792254318e3a4a60947a87b64736f6c634300080a0033";

type ReadWriteTierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReadWriteTierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReadWriteTier__factory extends ContractFactory {
  constructor(...args: ReadWriteTierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ReadWriteTier> {
    return super.deploy(overrides || {}) as Promise<ReadWriteTier>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ReadWriteTier {
    return super.attach(address) as ReadWriteTier;
  }
  connect(signer: Signer): ReadWriteTier__factory {
    return super.connect(signer) as ReadWriteTier__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReadWriteTierInterface {
    return new utils.Interface(_abi) as ReadWriteTierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReadWriteTier {
    return new Contract(address, _abi, signerOrProvider) as ReadWriteTier;
  }
}
