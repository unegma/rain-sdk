import { Signer, BigNumberish, BigNumber, BytesLike } from 'ethers';
import { TierFactoryContract } from '../../classes/tierContract';
import { TxOverrides, ReadTxOverrides } from '../../classes/rainContract';
import {
  ERC20BalanceTier__factory,
  ERC20BalanceTierFactory__factory,
} from '../../typechain';

/**
 * @public
 * A class for deploying and calling methods on a ERC20BalanceTier.
 *
 *   The `ERC20BalanceTier` simply checks the current balance of an erc20 against tier values.
 * As the current balance is always read from the erc20 contract directly there is no historical
 * block data.
 *
 * @remarks
 *   This class provides an easy way to deploy ERC20BalanceTiers using Rain's canonical factories,
 * and methods for interacting with an already deployed ERC20BalanceTier.
 *
 * @example
 * ```typescript
 * import { ERC20BalanceTier } from 'rain-sdk'
 *
 * // To deploy a new ERC20BalanceTier, pass an ethers.js Signer and the config for the ERC20BalanceTier.
 * const newTier = await ERC20BalanceTier.deploy(signer, ERC20BalanceTierArgs);
 *
 * // To connect to an existing ERC20BalanceTier just pass the address and an ethers.js Signer.
 * const existingTier = new ERC20BalanceTier(address, signer);
 *
 * // Once you have a ERC20BalanceTier, you can call the smart contract methods:
 * const tierValues = await existingTier.tierValues();
 * ```
 *
 */
export class ERC20BalanceTier extends TierFactoryContract {
  protected static readonly nameBookReference = 'erc20BalanceTierFactory';

  /**
   * Constructs a new ERC20BalanceTier from a known address.
   *
   * @param address - The address of the ERC20BalanceTier contract
   * @param signer - An ethers.js Signer
   * @returns A new ERC20BalanceTier instance
   *
   */
  constructor(address: string, signer: Signer) {
    super(address, signer);
    const _erc20balanceTier = ERC20BalanceTier__factory.connect(
      address,
      signer
    );
    this.tierValues = _erc20balanceTier.tierValues;
  }

  /**
   * Deploys a new ERC20BalanceTier.
   *
   * @param signer - An ethers.js Signer
   * @param args - Arguments for deploying a ERC20BalanceTier @see ERC20BalanceTierDeployArgs
   * @param overrides - @see TxOverrides
   * @returns A new ERC20BalanceTier instance
   */
  public static deploy = async (
    signer: Signer,
    args: ERC20BalanceTierDeployArgs,
    overrides: TxOverrides = {}
  ): Promise<ERC20BalanceTier> => {
    const erc20BalanceTierFactory = ERC20BalanceTierFactory__factory.connect(
      this.getBookAddress(await this.getChainId(signer)),
      signer
    );

    const tx = await erc20BalanceTierFactory.createChildTyped(args, overrides);
    const receipt = await tx.wait();
    const address = this.getNewChildFromReceipt(
      receipt,
      erc20BalanceTierFactory
    );
    return new ERC20BalanceTier(address, signer);
  };

  /**
   * Checks if address is registered as a child contract of this ERC20BalanceTierFactory on a specific network
   *
   * @param signer - An ethers.js Signer
   * @param maybeChild - Address to check registration for.
   * @returns `true` if address was deployed by this contract factory, otherwise `false`
   */
  public static isChild = async (
    signer: Signer,
    maybeChild: string
  ): Promise<boolean> => {
    return await this._isChild(signer, maybeChild);
  };

  /**
   * It is NOT implemented in BalanceTiers. Always will throw an error
   */
  public readonly setTier = async (
    account: string,
    endTier: BigNumberish,
    data: BytesLike,
    overrides?: TxOverrides
  ) => {
    throw new Error('SET TIER: NOT IMPLEMENTED');
  };

  /**
   * Complements the default solidity accessor for `tierValues`. Returns all the values in a
   * listrather than requiring an index be specified.
   *
   * @param overrides - @see ReadTxOverrides
   * @returns The immutable `tierValues[8]`.
   */
  public readonly tierValues: (
    overrides?: ReadTxOverrides
  ) => Promise<BigNumber[]>;
}

/**
 * @public
 * Constructor config for ERC20BalanceTier
 */
export interface ERC20BalanceTierDeployArgs {
  /**
   * The erc20 token contract to check the balance of at `report` time
   */
  erc20: string;
  /**
   * 8 values corresponding to minimum erc20 balances for tier 1 through tier 8
   */
  tierValues: BigNumberish[];
}
