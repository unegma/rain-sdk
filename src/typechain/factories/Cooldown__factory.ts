/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Cooldown, CooldownInterface } from "../Cooldown";

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
        internalType: "uint256",
        name: "cooldownDuration",
        type: "uint256",
      },
    ],
    name: "CooldownInitialize",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cooldown",
        type: "uint256",
      },
    ],
    name: "CooldownTriggered",
    type: "event",
  },
];

const _bytecode =
  "0x608060405260008055348015601357600080fd5b50603f8060216000396000f3fe6080604052600080fdfea26469706673582212205a19957c0c8a6c5e03ae962bc0fd32acf23600f514d7340d389f7d45a7c4eac964736f6c634300080a0033";

type CooldownConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CooldownConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Cooldown__factory extends ContractFactory {
  constructor(...args: CooldownConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Cooldown> {
    return super.deploy(overrides || {}) as Promise<Cooldown>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Cooldown {
    return super.attach(address) as Cooldown;
  }
  connect(signer: Signer): Cooldown__factory {
    return super.connect(signer) as Cooldown__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CooldownInterface {
    return new utils.Interface(_abi) as CooldownInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Cooldown {
    return new Contract(address, _abi, signerOrProvider) as Cooldown;
  }
}
