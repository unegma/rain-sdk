/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RedeemableERC20ClaimEscrowWrapper,
  RedeemableERC20ClaimEscrowWrapperInterface,
} from "../RedeemableERC20ClaimEscrowWrapper";

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
        name: "depositor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sale",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "redeemable",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "supply",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
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
        internalType: "address",
        name: "sale",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "redeemable",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PendingDeposit",
    type: "event",
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
        internalType: "address",
        name: "depositor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sale",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "redeemable",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Sweep",
    type: "event",
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
        internalType: "address",
        name: "sale",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "redeemable",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "supply",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Undeposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "withdrawer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sale",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "redeemable",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "supply",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sale_",
        type: "address",
      },
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sale_",
        type: "address",
      },
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "depositPending",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trust_",
        type: "address",
      },
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "address",
        name: "depositor_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "supply_",
        type: "uint256",
      },
    ],
    name: "getDeposits",
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
        name: "trust_",
        type: "address",
      },
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "address",
        name: "depositor_",
        type: "address",
      },
    ],
    name: "getPendingDeposits",
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
        name: "trust_",
        type: "address",
      },
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "supply_",
        type: "uint256",
      },
    ],
    name: "getTotalDeposits",
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
        name: "trust_",
        type: "address",
      },
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "supply_",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "withdrawer_",
        type: "address",
      },
    ],
    name: "getWithdrawals",
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
        name: "sale_",
        type: "address",
      },
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "address",
        name: "depositor_",
        type: "address",
      },
    ],
    name: "sweepPending",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sale_",
        type: "address",
      },
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "supply_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "undeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sale_",
        type: "address",
      },
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "supply_",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061192a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c80637e56cda8116100765780639bfeb1191161005b5780639bfeb11914610175578063d9caed12146101c5578063fa5839ab146101d857600080fd5b80637e56cda81461014f5780638340f5491461016257600080fd5b8063248a8572146100a85780634facc0b4146100bd5780635fc85b7d146100e257806370a9eeee146100f5575b600080fd5b6100bb6100b6366004611567565b610231565b005b6100d06100cb3660046115ad565b6104c0565b60405190815260200160405180910390f35b6100bb6100f03660046115ee565b610503565b6100d0610103366004611639565b73ffffffffffffffffffffffffffffffffffffffff9384166000908152600560209081526040808320958716835294815284822093909516815291845282822090825290925290205490565b6100bb61015d3660046115ad565b6105cd565b6100bb6101703660046115ad565b6107a2565b6100d06101833660046115ee565b73ffffffffffffffffffffffffffffffffffffffff92831660009081526004602090815260408083209486168352938152838220929094168152925290205490565b6100bb6101d33660046115ad565b6107d5565b6100d06101e636600461168a565b73ffffffffffffffffffffffffffffffffffffffff93841660009081526003602090815260408083209587168352948152848220938252928352838120919094168452905290205490565b600161023c85610afc565b600281111561024d5761024d6116dd565b146102b9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4e4f545f4641494c00000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b60008111610323576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f5a45524f5f414d4f554e5400000000000000000000000000000000000000000060448201526064016102b0565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152600560209081526040808320938716835292815282822033835281528282208583529052908120805483929061037790849061173b565b909155505073ffffffffffffffffffffffffffffffffffffffff80851660009081526006602090815260408083209387168352928152828220858352905290812080548392906103c890849061173b565b909155505073ffffffffffffffffffffffffffffffffffffffff808516600090815260076020908152604080832093871683529281528282208583529052908120805483929061041990849061173b565b909155507f6b7ec092a62c7445c02d988d0c1c01a2da7d8778d62a625accdf18de5efca3b69050338561044b81610ca0565b6040805173ffffffffffffffffffffffffffffffffffffffff948516815292841660208401529083169082015290851660608201526080810184905260a0810183905260c00160405180910390a16104ba73ffffffffffffffffffffffffffffffffffffffff84163383610e1b565b50505050565b73ffffffffffffffffffffffffffffffffffffffff80841660009081526006602090815260408083209386168352928152828220848352905220545b9392505050565b73ffffffffffffffffffffffffffffffffffffffff838116600090815260046020908152604080832086851684528252808320938516835292905290812080549190557ff1c3618947be77b086aba11baa9d1e07d2df15de2c0e620f295ffd4ddd550e1f33838661057381610ca0565b6040805173ffffffffffffffffffffffffffffffffffffffff958616815293851660208501529184168383015283166060830152918616608082015260a0810184905290519081900360c00190a16104ba84848484610eef565b60008111610637576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f5a45524f5f4445504f534954000000000000000000000000000000000000000060448201526064016102b0565b600061064284610afc565b6002811115610653576106536116dd565b146106ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4e4f545f50454e44494e4700000000000000000000000000000000000000000060448201526064016102b0565b73ffffffffffffffffffffffffffffffffffffffff8084166000908152600460209081526040808320938616835292815282822033835290529081208054839290610706908490611752565b909155506000905061071784610ca0565b6040805133815273ffffffffffffffffffffffffffffffffffffffff878116602083015283811682840152861660608201526080810185905290519192507feabec77378d088e5df884cdb5fb2b55858355c2f6284148d4a30177eb54b52e6919081900360a00190a16104ba73ffffffffffffffffffffffffffffffffffffffff84163330856111d8565b6107ae83833384610eef565b6107d073ffffffffffffffffffffffffffffffffffffffff83163330846111d8565b505050565b60026107e084610afc565b60028111156107f1576107f16116dd565b14610858576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4e4f545f5355434345535300000000000000000000000000000000000000000060448201526064016102b0565b73ffffffffffffffffffffffffffffffffffffffff808416600081815260066020908152604080832094871680845294825280832086845282528083205493835260038252808320948352938152838220858352815283822033835290529182205490916108c586610ca0565b73ffffffffffffffffffffffffffffffffffffffff87811660009081526003602090815260408083208a8516845282528083208984528252808320338085529252808320889055517f70a0823100000000000000000000000000000000000000000000000000000000815260048101919091529293509186918416906370a0823190602401602060405180830381865afa158015610967573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061098b919061176a565b610995858761173b565b61099f9190611783565b6109a991906117c0565b73ffffffffffffffffffffffffffffffffffffffff8089166000908152600760209081526040808320938b1683529281528282208983529052908120805492935083929091906109fa90849061173b565b909155505080610a66576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f5a45524f5f57495448445241570000000000000000000000000000000000000060448201526064016102b0565b6040805133815273ffffffffffffffffffffffffffffffffffffffff898116602083015284811682840152881660608201526080810187905260a0810183905290517f16976c9767f5174e5289de7594402a1e174ebd2a9622aa3ebafd14e5af4e2ab99181900360c00190a1610af373ffffffffffffffffffffffffffffffffffffffff87163383610e1b565b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff811660009081526002602052604081205460ff1681816002811115610b3857610b386116dd565b1115610b445792915050565b60008373ffffffffffffffffffffffffffffffffffffffff1663f9020e336040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b91573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb591906117fb565b90506002816003811115610bcb57610bcb6116dd565b1415610c265750505073ffffffffffffffffffffffffffffffffffffffff16600090815260026020819052604090912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168217905590565b6003816003811115610c3a57610c3a6116dd565b1415610c965750505073ffffffffffffffffffffffffffffffffffffffff16600090815260026020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600190811790915590565b5060009392505050565b73ffffffffffffffffffffffffffffffffffffffff80821660009081526001602052604081205490911680610e155760008373ffffffffffffffffffffffffffffffffffffffff1663fc0c546a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d1c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d40919061181c565b905073ffffffffffffffffffffffffffffffffffffffff8116610dbf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f305f544f4b454e0000000000000000000000000000000000000000000000000060448201526064016102b0565b73ffffffffffffffffffffffffffffffffffffffff848116600090815260016020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001691831691909117905590505b92915050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107d09084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611236565b6000610efa85610afc565b6002811115610f0b57610f0b6116dd565b11610f72576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f50454e44494e470000000000000000000000000000000000000000000000000060448201526064016102b0565b60008111610fdc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f5a45524f5f4445504f534954000000000000000000000000000000000000000060448201526064016102b0565b6000610fe785610ca0565b905060008173ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611036573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061105a919061176a565b73ffffffffffffffffffffffffffffffffffffffff80881660009081526005602090815260408083208a85168452825280832093891683529281528282208483529052908120805492935085929091906110b5908490611752565b909155505073ffffffffffffffffffffffffffffffffffffffff8087166000908152600660209081526040808320938916835292815282822084835290529081208054859290611106908490611752565b909155505073ffffffffffffffffffffffffffffffffffffffff8087166000908152600760209081526040808320938916835292815282822084835290529081208054859290611157908490611752565b90915550506040805133815273ffffffffffffffffffffffffffffffffffffffff86811660208301528881168284015284811660608301528716608082015260a0810183905260c0810185905290517f53591a88ac47bfe3130a7de575c6a6a8c22f7604cbba61b8390fbff773ed40499181900360e00190a1505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526104ba9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610e6d565b6000611298826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166113429092919063ffffffff16565b8051909150156107d057808060200190518101906112b69190611839565b6107d0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016102b0565b60606113518484600085611359565b949350505050565b6060824710156113eb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016102b0565b73ffffffffffffffffffffffffffffffffffffffff85163b611469576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016102b0565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516114929190611887565b60006040518083038185875af1925050503d80600081146114cf576040519150601f19603f3d011682016040523d82523d6000602084013e6114d4565b606091505b50915091506114e48282866114ef565b979650505050505050565b606083156114fe5750816104fc565b82511561150e5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102b091906118a3565b73ffffffffffffffffffffffffffffffffffffffff8116811461156457600080fd5b50565b6000806000806080858703121561157d57600080fd5b843561158881611542565b9350602085013561159881611542565b93969395505050506040820135916060013590565b6000806000606084860312156115c257600080fd5b83356115cd81611542565b925060208401356115dd81611542565b929592945050506040919091013590565b60008060006060848603121561160357600080fd5b833561160e81611542565b9250602084013561161e81611542565b9150604084013561162e81611542565b809150509250925092565b6000806000806080858703121561164f57600080fd5b843561165a81611542565b9350602085013561166a81611542565b9250604085013561167a81611542565b9396929550929360600135925050565b600080600080608085870312156116a057600080fd5b84356116ab81611542565b935060208501356116bb81611542565b92506040850135915060608501356116d281611542565b939692955090935050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008282101561174d5761174d61170c565b500390565b600082198211156117655761176561170c565b500190565b60006020828403121561177c57600080fd5b5051919050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156117bb576117bb61170c565b500290565b6000826117f6577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b60006020828403121561180d57600080fd5b8151600481106104fc57600080fd5b60006020828403121561182e57600080fd5b81516104fc81611542565b60006020828403121561184b57600080fd5b815180151581146104fc57600080fd5b60005b8381101561187657818101518382015260200161185e565b838111156104ba5750506000910152565b6000825161189981846020870161185b565b9190910192915050565b60208152600082518060208401526118c281604085016020870161185b565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea264697066735822122009d5c543460cc6405a716957f952bc1c9f6e4d728f9f322ae1c3dc9d0e012fb964736f6c634300080a0033";

type RedeemableERC20ClaimEscrowWrapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RedeemableERC20ClaimEscrowWrapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RedeemableERC20ClaimEscrowWrapper__factory extends ContractFactory {
  constructor(...args: RedeemableERC20ClaimEscrowWrapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RedeemableERC20ClaimEscrowWrapper> {
    return super.deploy(
      overrides || {}
    ) as Promise<RedeemableERC20ClaimEscrowWrapper>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RedeemableERC20ClaimEscrowWrapper {
    return super.attach(address) as RedeemableERC20ClaimEscrowWrapper;
  }
  connect(signer: Signer): RedeemableERC20ClaimEscrowWrapper__factory {
    return super.connect(signer) as RedeemableERC20ClaimEscrowWrapper__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RedeemableERC20ClaimEscrowWrapperInterface {
    return new utils.Interface(
      _abi
    ) as RedeemableERC20ClaimEscrowWrapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RedeemableERC20ClaimEscrowWrapper {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RedeemableERC20ClaimEscrowWrapper;
  }
}