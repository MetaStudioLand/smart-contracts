/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {Signer, utils, Contract, ContractFactory, Overrides} from 'ethers';
import type {Provider, TransactionRequest} from '@ethersproject/providers';
import type {
  ERC2771ForwarderMock,
  ERC2771ForwarderMockInterface,
} from '../../../../src/contracts/mocks/ERC2771ForwarderMock';

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'Forwarded',
    type: 'event',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'gas',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'nonce',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
        ],
        internalType: 'struct ERC2771ForwarderMock.ForwardRequest',
        name: 'req',
        type: 'tuple',
      },
    ],
    name: 'execute',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
    ],
    name: 'getNonce',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b50610ee2806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80632d0335ab1461003b578063e76d509b1461006b575b600080fd5b61005560048036038101906100509190610956565b61009c565b6040516100629190610ba5565b60405180910390f35b610085600480360381019061008091906109cc565b610168565b604051610093929190610b53565b60405180910390f35b60006100ca7fa3f9557bc9aeee064131d670dea160e2b016cfcccd8eccb984f5b38393a393bc60001b6106b8565b6100f67fb9376f5746ac1980a2febf783ee3511da47cf5ab9fd4f3249dc4cb27d3f2cbe760001b6106b8565b6101227f8c43fcf9150dc94545293da084154c2be0551c821cf8f313a9eb65f86cf61cc160001b6106b8565b6000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600060606101987f0f67cf464b324c912dedcdf2e1fdb0caf52697909160a3603c3f17eb29320fa960001b6106b8565b6101c47f132985fa6f26fef8ae7bf651bfe7eb090eea8d25b30ddb2261d77776f7a228f160001b6106b8565b6101f07fd7b125ed392efa65ee1814184e396831727d748d1836faa53b500eb99218e45d60001b6106b8565b600183608001356102019190610cbc565b6000808560000160208101906102179190610956565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506102817fbf9ebfed72c6f805ad9c9799432afca5efb78a5e12ee323ca1f934ea0ade9de660001b6106b8565b6102ad7f76b117c8bf34dcf9372552306a78d9eeddd8ead19cb21943dc507b4582ba5e4e60001b6106b8565b6000808460200160208101906102c39190610956565b73ffffffffffffffffffffffffffffffffffffffff1685606001358660400135878060a001906102f39190610bc0565b8960000160208101906103069190610956565b60405160200161031893929190610b12565b6040516020818303038152906040526040516103349190610b3c565b600060405180830381858888f193505050503d8060008114610372576040519150601f19603f3d011682016040523d82523d6000602084013e610377565b606091505b50915091506103a87f02daac1487ddb520a8410de11476ef8f49b43dbfc3b00b1e9655793fee7ef1ef60001b6106b8565b6103d47fd4ccdb5501895c89ceb6067fb6eb0b3fc25993b16bc3cf1ccbc945bf8f7e190c60001b6106b8565b81156104fc576104067fbeb6a0121ac64bdbc6b75abff6fb5258f31a67c34b45808bd3ff37a8ec2f626360001b6106b8565b6104327f9ceea8ca9f5c644d29207891aef12eac085fef12da0340e34e1f1c99715444ee60001b6106b8565b61045e7fd58afdd7ecaa7614a3eb6920c60279f01391a5e77ed734429c6553a410f3490b60001b6106b8565b7f52662d1fbd4ce002b97a760cfc24cfd52f8d5bbd91e5199ed648909e1cf8966f828260405161048f929190610b53565b60405180910390a16104c37f12c19af97ea81572d70bc373601ebbc7a261fb7486c9c6eeb1bd2e0b7d8153d160001b6106b8565b6104ef7f23f7f178aa2dd3f261bf3cfd13d16befcceb176fe59db5ac6a2b53a758b7946460001b6106b8565b81819350935050506106b3565b6105287f3af9fab700fe97b66ae34a407a6e588a194ea989278794f2ce05e3dfc4e3d23d60001b6106b8565b6105547f8addd682adb51f6abfbcdc5d517788171483fa642feea2059597dcc416c0a8cd60001b6106b8565b6105807f4f100d3bb5ef9128f483ebb4b91a352caf22e097a03e641682b766202915468a60001b6106b8565b7f52662d1fbd4ce002b97a760cfc24cfd52f8d5bbd91e5199ed648909e1cf8966f82826040516105b1929190610b53565b60405180910390a16105e57f4731c727030137faf0093b3bb5a5692758db397167df154b2d723e656d48aa8e60001b6106b8565b6106117fb4c9a1dba931bac2186365764902e1a6180d92e4a30d1aaaef7acd56387e348960001b6106b8565b600061061c826106bb565b905061064a7f83b5bdb1489c11799124844f87912ec77bb09b3166a77a56dbbb95765d1a897a60001b6106b8565b6106767f5f3567a80cd6ef9c2c42af2ab4e7b0985294bc334632ccafef988790b8113b2a60001b6106b8565b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106aa9190610b83565b60405180910390fd5b915091565b50565b60606106e97f60ecbb1a27f1279538aa19d7a2d47ba4eedfffe8a4e15f44401ab6671847ad2760001b6106b8565b6107157f3e7b9c335788450e77a3248620b09ee888efff329374cc3d71a9504e66131c1f60001b6106b8565b6107417f52b99355a46ff107ea28d2627ca9cc4888350e373142c3671b47ba3cc879211b60001b6106b8565b6044825110156107e0576107777f685c355c8eef74a029261aef188542639d31ebf2038629bf41794ef0b45ea47960001b6106b8565b6107a37faa75fdb4e8a2b672c102835d73fc4c21964f1d35968f03a6d030103c08936c7360001b6106b8565b6040518060400160405280601d81526020017f5472616e73616374696f6e2072657665727465642073696c656e746c7900000081525090506108ad565b61080c7fe37f1e367fd9ad2d2c3ede896807039c17e8d7fe25d4ae7bc5b2192d5817ec3060001b6106b8565b6108387f3d1e402698916aaada073b2dc06f92d333d925a1a6f3a5084d457e68c7f9433e60001b6106b8565b60048201915061086a7faa3bc8bf0ac98fa770c1ad408d7d32dbf0f757fa79bd36be109e55a77f85f87a60001b6106b8565b6108967f75cafe5a2db564872f5c66b8d17c28ecba190941c47a871037b429fd098113ad60001b6106b8565b818060200190518101906108aa9190610983565b90505b919050565b60006108c56108c084610c48565b610c23565b9050828152602081018484840111156108e1576108e0610e68565b5b6108ec848285610d69565b509392505050565b60008135905061090381610e95565b92915050565b600082601f83011261091e5761091d610e4f565b5b815161092e8482602086016108b2565b91505092915050565b600060c0828403121561094d5761094c610e59565b5b81905092915050565b60006020828403121561096c5761096b610e72565b5b600061097a848285016108f4565b91505092915050565b60006020828403121561099957610998610e72565b5b600082015167ffffffffffffffff8111156109b7576109b6610e6d565b5b6109c384828501610909565b91505092915050565b6000602082840312156109e2576109e1610e72565b5b600082013567ffffffffffffffff811115610a00576109ff610e6d565b5b610a0c84828501610937565b91505092915050565b610a26610a2182610d12565b610dcd565b82525050565b610a3581610d24565b82525050565b6000610a478385610ca0565b9350610a54838584610d5a565b82840190509392505050565b6000610a6b82610c79565b610a758185610c8f565b9350610a85818560208601610d69565b610a8e81610e77565b840191505092915050565b6000610aa482610c79565b610aae8185610ca0565b9350610abe818560208601610d69565b80840191505092915050565b6000610ad582610c84565b610adf8185610cab565b9350610aef818560208601610d69565b610af881610e77565b840191505092915050565b610b0c81610d50565b82525050565b6000610b1f828587610a3b565b9150610b2b8284610a15565b601482019150819050949350505050565b6000610b488284610a99565b915081905092915050565b6000604082019050610b686000830185610a2c565b8181036020830152610b7a8184610a60565b90509392505050565b60006020820190508181036000830152610b9d8184610aca565b905092915050565b6000602082019050610bba6000830184610b03565b92915050565b60008083356001602003843603038112610bdd57610bdc610e5e565b5b80840192508235915067ffffffffffffffff821115610bff57610bfe610e54565b5b602083019250600182023603831315610c1b57610c1a610e63565b5b509250929050565b6000610c2d610c3e565b9050610c398282610d9c565b919050565b6000604051905090565b600067ffffffffffffffff821115610c6357610c62610e20565b5b610c6c82610e77565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b6000610cc782610d50565b9150610cd283610d50565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610d0757610d06610df1565b5b828201905092915050565b6000610d1d82610d30565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610d87578082015181840152602081019050610d6c565b83811115610d96576000848401525b50505050565b610da582610e77565b810181811067ffffffffffffffff82111715610dc457610dc3610e20565b5b80604052505050565b6000610dd882610ddf565b9050919050565b6000610dea82610e88565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b60008160601b9050919050565b610e9e81610d12565b8114610ea957600080fd5b5056fea2646970667358221220d0dcaacf21d6144ab4793f354970d436f2029616457f6e6b33eaf1481099bc4764736f6c63430008070033';

type ERC2771ForwarderMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: ERC2771ForwarderMockConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class ERC2771ForwarderMock__factory extends ContractFactory {
  constructor(...args: ERC2771ForwarderMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & {from?: string | Promise<string>}): Promise<ERC2771ForwarderMock> {
    return super.deploy(overrides || {}) as Promise<ERC2771ForwarderMock>;
  }
  override getDeployTransaction(overrides?: Overrides & {from?: string | Promise<string>}): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC2771ForwarderMock {
    return super.attach(address) as ERC2771ForwarderMock;
  }
  override connect(signer: Signer): ERC2771ForwarderMock__factory {
    return super.connect(signer) as ERC2771ForwarderMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC2771ForwarderMockInterface {
    return new utils.Interface(_abi) as ERC2771ForwarderMockInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC2771ForwarderMock {
    return new Contract(address, _abi, signerOrProvider) as ERC2771ForwarderMock;
  }
}
