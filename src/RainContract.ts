import { Contract, ContractReceipt, ethers } from 'ethers';

/**
 * Rain Contract
 * // todo add description
 */
export abstract class RainContract {

  /**
   * Get New Child From Receipt
   *
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
}
