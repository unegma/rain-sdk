import { Contract, ContractReceipt, Signer, ethers } from 'ethers';
import { Factory__factory } from './typechain';

/**
 * RainContract
 */
export abstract class RainContract {
  public readonly signer: Signer;
  public readonly address: string;

  /**
   * Constructor
   * @param address
   * @param signer
   */
  constructor(address: string, signer: Signer) {
    this.signer = signer;
    this.address = address;
  }

  /**
   * Get New Child From Receipt
   * @param receipt
   * @param parentContract
   */
  public static getNewChildFromReceipt = (
    receipt: ContractReceipt,
    parentContract: Contract
  ): string => {
    return ethers.utils.defaultAbiCoder.decode(
      ['address', 'address'],
      // todo check this is always defined (! used here. https://stackoverflow.com/questions/54884488/how-can-i-solve-the-error-ts2532-object-is-possibly-undefined)
      receipt.events!.filter(
        event =>
          event.event === 'NewChild' &&
          event.address.toUpperCase() === parentContract.address.toUpperCase()
      )[0].data
    )[1];
  };

  /**
   * Checks if address is registered as a child contract of this factory
   * @param signer - An ethers.js Signer
   * @param factory - The factory address where check registration
   * @param maybeChild - Address to check registration for.
   * @returns `true` if address was deployed by this contract factory, otherwise `false`
   */
  protected static _isChild = async (
    signer: Signer,
    factory: string,
    maybeChild: string
  ) => {
    return await Factory__factory.connect(factory, signer).isChild(maybeChild);
  };
}

