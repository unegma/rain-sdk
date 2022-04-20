import { Signer, utils, BigNumberish, Overrides, CallOverrides } from 'ethers';
import { Provider } from '@ethersproject/abstract-provider';
import AddressBook from '../AddressBook';

// TODO: script to get events

/**
 * @public
 */
export abstract class RainContract {
  public readonly signer: Signer;
  public readonly address: string;
  /**
   * Reference to find the address in the book address.
   * Should be implemented and assign it to each subclass
   */
  protected static readonly nameBookReference: string;

  constructor(address: string, signer: Signer) {
    if (!utils.isAddress(address.toLowerCase())) {
      throw new Error('NOT A VALID FORMAT ADDRESS');
    }
    this.signer = signer;
    this.address = address;
  }

  /**
   * Connect the current instance to a new signer
   *
   * @param signer - The new signer which will be connected
   * @returns The instance with a new signer
   */
  public readonly connect = (signer: Signer): this => {
    return new (this.constructor as RainConstructable<this>)(
      this.address,
      signer
    );
  };

  /**
   * Get the address stored in the book to this chain
   *
   * @param chainId - The chain ID where is deployed the contract
   * @returns The address for this contract
   */
  public static getBookAddress(chainId: number): string {
    // @ts-ignore
    return AddressBook.getAddressesForChainId(chainId)[this.nameBookReference];
  }

  /**
   * Get the chain ID from a valid ethers provider.
   *
   * Request to the provider stored in the signer which is the chain ID.
   *
   * @param signerOrProvider - An ethers signer or ethers provider
   * @returns The chain ID
   */
  public static getChainId = async (
    signerOrProvider: Signer | Provider
  ): Promise<number> => {
    if (signerOrProvider instanceof Signer) {
      // @ts-ignore
      return (await signerOrProvider.provider.getNetwork()).chainId;
    } else {
      return (await signerOrProvider.getNetwork()).chainId;
    }
  };
}

// TODO: Add doc to `ReadTxOverrides` so users can see all the fields that have CallOverrides from ethers
/**
 * @public
 * More read about `ReadTxOverrides` that comes from CallOverrides of ethers
 */
export interface ReadTxOverrides extends CallOverrides {}

// TODO: Add doc to `TxOverrides` so users can see all the fields that have Overrides from ethers
/**
 * @public
 * More read about `TxOverrides` that comes from Overrides of ethers
 */
export interface TxOverrides extends Overrides {
  from?: string | Promise<string>;
}

/**
 * @public
 * Constructor config for standard Open Zeppelin ERC20.
 */
export interface ERC20Config {
  /**
   * Name as defined by Open Zeppelin ERC20.
   */
  name: string;
  /**
   * Symbol as defined by Open Zeppelin ERC20.
   */
  symbol: string;
  /**
   * Distributor address of the initial supply. MAY be zero.
   */
  distributor: string;
  /**
   * Initial supply to mint.
   */
  initialSupply: BigNumberish;
}

/**
 * Interface that represent a Rain contract that is constructable
 */
interface RainConstructable<T> {
  new (address: string, signer: Signer): T;
}
