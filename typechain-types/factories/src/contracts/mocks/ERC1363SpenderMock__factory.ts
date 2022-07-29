/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC1363SpenderMock,
  ERC1363SpenderMockInterface,
} from "../../../../src/contracts/mocks/ERC1363SpenderMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "retval",
        type: "bytes4",
      },
      {
        internalType: "bool",
        name: "reverts",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gas",
        type: "uint256",
      },
    ],
    name: "Approved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onApprovalReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161093e38038061093e83398181016040528101906100329190610197565b6100647fa4f69d7e907ddc7633ed64a9a499e5ba230ec9c8f26f248b7ed65e724630662b60001b61016a60201b60201c565b6100967f13d6e0495ead64d0bcdf9749fe1ddd7a924df4e469b6ae618614cd8e818ec96860001b61016a60201b60201c565b6100c87fc04bb5268d2f9e4a8993560fdfdf29a306e49f649f0b0cef608b30dca9b6728d60001b61016a60201b60201c565b816000806101000a81548163ffffffff021916908360e01c02179055506101177fd97d46f18286df7c7b78170753be6a0a23d63dfe57fe261fdf638ab07533451f60001b61016a60201b60201c565b6101497fcadc8873f825df3a44500c29bd120bd44a66eb0a0ae14734a7f1f604b1d429ba60001b61016a60201b60201c565b80600060046101000a81548160ff0219169083151502179055505050610242565b50565b60008151905061017c81610214565b92915050565b6000815190506101918161022b565b92915050565b600080604083850312156101ae576101ad61020f565b5b60006101bc85828601610182565b92505060206101cd8582860161016d565b9150509250929050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600080fd5b61021d816101d7565b811461022857600080fd5b50565b610234816101e3565b811461023f57600080fd5b50565b6106ed806102516000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80637b04a2d014610030575b600080fd5b61004a6004803603810190610045919061032f565b610060565b6040516100579190610473565b60405180910390f35b600061008e7fd074cd222ab9f2d0d8f6884fabe338b0526559ebe222ff2a20ee483793c3083960001b610292565b6100ba7f8f84225ff1499ae3b74bf77ba5eeb2d647b8d83d09b6714eb97a3ffb933eddbd60001b610292565b6100e67f9c3bc8c593e9caef2809fad3ac973c93610dfb9c2d227ef64f937efcdd2712f260001b610292565b6101127fb623978c0891df62cde6bfb056383f5e2e1ec2d0519175675b0a2d2960f2b8aa60001b610292565b600060049054906101000a900460ff1615610162576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101599061048e565b60405180910390fd5b61018e7fbd6526b35fa96cb35a87963c0914d885d634a614939eb65046d6c8ce0e9f1ff760001b610292565b6101ba7fa4fccb8d8e252a449c5b2dafe6b7ddf39cb27b82a16f4e71204564ae2a0f795b60001b610292565b6101e67f3c4fa55835084712e55b05b821d2c467fa031d30ebdebe6d21dbb08417bbc31460001b610292565b7fe7c2bad6c6b2105a7cfcf604a9b58fc7f698a6bd195c88ea6242427303eaa51b8484845a60405161021b9493929190610427565b60405180910390a161024f7fbd1e3c2b82bf2696192117d65047aea30d227516b8e90f41362b4d732c20825a60001b610292565b61027b7f46d14f204f60f421ba1c85244428d13e900c96488ba0910d4af722550ee1ab8460001b610292565b60008054906101000a900460e01b90509392505050565b50565b60006102a86102a3846104d3565b6104ae565b9050828152602081018484840111156102c4576102c3610640565b5b6102cf848285610599565b509392505050565b6000813590506102e681610689565b92915050565b600082601f8301126103015761030061063b565b5b8135610311848260208601610295565b91505092915050565b600081359050610329816106a0565b92915050565b6000806000606084860312156103485761034761064a565b5b6000610356868287016102d7565b93505060206103678682870161031a565b925050604084013567ffffffffffffffff81111561038857610387610645565b5b610394868287016102ec565b9150509250925092565b6103a781610531565b82525050565b6103b681610543565b82525050565b60006103c782610504565b6103d1818561050f565b93506103e18185602086016105a8565b6103ea8161064f565b840191505092915050565b6000610402601c83610520565b915061040d82610660565b602082019050919050565b6104218161058f565b82525050565b600060808201905061043c600083018761039e565b6104496020830186610418565b818103604083015261045b81856103bc565b905061046a6060830184610418565b95945050505050565b600060208201905061048860008301846103ad565b92915050565b600060208201905081810360008301526104a7816103f5565b9050919050565b60006104b86104c9565b90506104c482826105db565b919050565b6000604051905090565b600067ffffffffffffffff8211156104ee576104ed61060c565b5b6104f78261064f565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600061053c8261056f565b9050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156105c65780820151818401526020810190506105ab565b838111156105d5576000848401525b50505050565b6105e48261064f565b810181811067ffffffffffffffff821117156106035761060261060c565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f455243313336335370656e6465724d6f636b3a207468726f77696e6700000000600082015250565b61069281610531565b811461069d57600080fd5b50565b6106a98161058f565b81146106b457600080fd5b5056fea2646970667358221220e39b7b0568b1fa79cd1bc43ed6ce6d83a2257881df9a3ae2fc8065e9c73dc02364736f6c63430008070033";

type ERC1363SpenderMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1363SpenderMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1363SpenderMock__factory extends ContractFactory {
  constructor(...args: ERC1363SpenderMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    retval: BytesLike,
    reverts: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1363SpenderMock> {
    return super.deploy(
      retval,
      reverts,
      overrides || {}
    ) as Promise<ERC1363SpenderMock>;
  }
  override getDeployTransaction(
    retval: BytesLike,
    reverts: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(retval, reverts, overrides || {});
  }
  override attach(address: string): ERC1363SpenderMock {
    return super.attach(address) as ERC1363SpenderMock;
  }
  override connect(signer: Signer): ERC1363SpenderMock__factory {
    return super.connect(signer) as ERC1363SpenderMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1363SpenderMockInterface {
    return new utils.Interface(_abi) as ERC1363SpenderMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1363SpenderMock {
    return new Contract(address, _abi, signerOrProvider) as ERC1363SpenderMock;
  }
}
