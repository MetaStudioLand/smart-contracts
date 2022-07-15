/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {Contract, Signer, utils} from 'ethers';
import type {Provider} from '@ethersproject/providers';
import type {
  IERC1363SpenderUpgradeable,
  IERC1363SpenderUpgradeableInterface,
} from '../../../../@openzeppelin/contracts-upgradeable/interfaces/IERC1363SpenderUpgradeable';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'onApprovalReceived',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export class IERC1363SpenderUpgradeable__factory {
  static readonly abi = _abi;
  static createInterface(): IERC1363SpenderUpgradeableInterface {
    return new utils.Interface(_abi) as IERC1363SpenderUpgradeableInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IERC1363SpenderUpgradeable {
    return new Contract(address, _abi, signerOrProvider) as IERC1363SpenderUpgradeable;
  }
}
