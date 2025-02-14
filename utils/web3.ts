/**
 * @author Hugo Masclet <git@hugom.xyz>
 */
import ERC725Account from '@lukso/lsp-smart-contracts/artifacts/LSP0ERC725Account.json';

import Web3 from 'web3';
import { INTERFACE_IDS } from '@lukso/lsp-smart-contracts';
import { AbiItem } from 'web3-utils';

export const getDataBatch = async (
  address: string,
  keys: string[],
  web3: Web3,
) => {
  const Contract = new web3.eth.Contract(
    ERC725Account.abi as AbiItem[],
    address,
  );

  let data: string[] = [];
  try {
    data = await Contract.methods.getDataBatch(keys).call();
  } catch (err: any) {
    console.log(err.message);
  }

  return data;
};

export const getData = async (
  address: string,
  key: string,
  web3: Web3,
): Promise<string | null> => {
  const Contract = new web3.eth.Contract(
    ERC725Account.abi as AbiItem[],
    address,
  );

  let data: string | null = null;
  try {
    data = await Contract.methods.getData(key).call();
  } catch (err: any) {
    console.log(err.message);
  }

  return data;
};

export const checkInterface = async (address: string, web3: Web3) => {
  const Contract = new web3.eth.Contract(
    [
      {
        type: 'function',
        stateMutability: 'view',
        outputs: [
          {
            type: 'bool',
            name: '',
            internalType: 'bool',
          },
        ],
        name: 'supportsInterface',
        inputs: [
          {
            type: 'bytes4',
            name: 'interfaceId',
            internalType: 'bytes4',
          },
        ],
      },
    ],
    address,
  );

  let isErc725X = false;
  try {
    isErc725X = await Contract.methods
      .supportsInterface(INTERFACE_IDS.ERC725X)
      .call();
  } catch (err: any) {
    console.log(err.message);
  }

  let isErc725Y = false;
  try {
    isErc725Y = await Contract.methods
      .supportsInterface(INTERFACE_IDS.ERC725Y)
      .call();
  } catch (err: any) {
    console.warn(err.message);
  }

  let isErc1271 = false;
  try {
    isErc1271 = await Contract.methods
      .supportsInterface(INTERFACE_IDS.ERC1271)
      .call();
  } catch (err: any) {
    console.warn(err.message);
  }

  let isLsp0Erc725Account = false;
  try {
    isLsp0Erc725Account = await Contract.methods
      .supportsInterface(INTERFACE_IDS.LSP0ERC725Account)
      .call();
  } catch (err: any) {
    console.warn(err.message);
  }

  let isLsp1UniversalReceiver = false;
  try {
    isLsp1UniversalReceiver = await Contract.methods
      .supportsInterface(INTERFACE_IDS.LSP1UniversalReceiver)
      .call();
  } catch (err: any) {
    console.warn(err.message);
  }

  let isLsp6KeyManager = false;
  try {
    isLsp6KeyManager = await Contract.methods
      .supportsInterface(INTERFACE_IDS.LSP6KeyManager)
      .call();
  } catch (err: any) {
    console.warn(err.message);
  }

  let isLsp7DigitalAsset = false;
  try {
    isLsp7DigitalAsset = await Contract.methods
      .supportsInterface(INTERFACE_IDS.LSP7DigitalAsset)
      .call();
  } catch (err: any) {
    console.warn(err.message);
  }

  let isLsp8IdentifiableDigitalAsset = false;
  try {
    isLsp8IdentifiableDigitalAsset = await Contract.methods
      .supportsInterface(INTERFACE_IDS.LSP8IdentifiableDigitalAsset)
      .call();
  } catch (err: any) {
    console.warn(err.message);
  }

  let isLsp9Vault = false;
  try {
    isLsp9Vault = await Contract.methods
      .supportsInterface(INTERFACE_IDS.LSP9Vault)
      .call();
  } catch (err: any) {
    console.warn(err.message);
  }

  return {
    isErc725X,
    isErc725Y,
    isErc1271,
    isLsp0Erc725Account,
    isLsp1UniversalReceiver,
    isLsp6KeyManager,
    isLsp7DigitalAsset,
    isLsp8IdentifiableDigitalAsset,
    isLsp9Vault,
  };
};
