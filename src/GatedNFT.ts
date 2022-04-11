import {
  GatedNFT__factory,
  GatedNFT as GatedNFTContract,
  GatedNFTFactory__factory,
} from './typechain/rain-statusfi';
import { BigNumberish, CallOverrides, Signer } from 'ethers';
import { ConfigStruct } from './typechain/rain-statusfi/GatedNFTFactory';
import { RainContract } from './RainContract';
import AddressBook from './AddressBook';

export enum Transferrable {
  NonTransferrable,
  Transferrable,
  TierGatedTransferrable,
}

type GatedNFTArgs = {
  config_: ConfigStruct;
  tier_: string;
  minimumStatus_: BigNumberish;
  maxPerAddress_: BigNumberish;
  transferrable_: Transferrable;
  maxMintable_: BigNumberish;
  royaltyRecipient_: string;
  royaltyBPS: BigNumberish;
  overrides?: CallOverrides;
};

/**
 * GatedNFT
 */
export default class GatedNFT extends RainContract {
  public readonly signer: Signer;
  public readonly gatedNFT: GatedNFTContract;

  /**
   * Constructor
   * @param address
   * @param signer
   */
  constructor(address: string, signer: Signer) {
    super();
    this.signer = signer;
    this.gatedNFT = GatedNFT__factory.connect(address, signer);
  }

  /**
   * Deploy
   * @param signer
   * @param chainId
   * @param config_
   * @param tier_
   * @param minimumStatus_
   * @param maxPerAddress_
   * @param transferrable_
   * @param maxMintable_
   * @param royaltyRecipient_
   * @param royaltyBPS
   */
  public static deploy = async (
    signer: Signer,
    chainId: number,
    {
      config_,
      tier_,
      minimumStatus_,
      maxPerAddress_,
      transferrable_,
      maxMintable_,
      royaltyRecipient_,
      royaltyBPS,
    }: GatedNFTArgs
  ) => {
    const gatedNFTFactory = GatedNFTFactory__factory.connect(
      AddressBook.getAddressesForChainId(chainId).gatedNFT,
      signer
    );

    const tx = await gatedNFTFactory.createChildTyped(
      config_,
      tier_,
      minimumStatus_,
      maxPerAddress_,
      transferrable_,
      maxMintable_,
      royaltyRecipient_,
      royaltyBPS
    );

    const receipt = await tx.wait();

    // todo check this works with this. (changed from super. because of typescript error)
    const address = this.getNewChildFromReceipt(receipt, gatedNFTFactory);

    return new GatedNFT(address, signer);
  };
}
