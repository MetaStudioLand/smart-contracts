/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type {FunctionFragment, Result, EventFragment} from '@ethersproject/abi';
import type {Listener, Provider} from '@ethersproject/providers';
import type {TypedEventFilter, TypedEvent, TypedListener, OnEvent} from '../../../common';

export interface ERC1363ReceiverMockInterface extends utils.Interface {
  functions: {
    'onTransferReceived(address,address,uint256,bytes)': FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: 'onTransferReceived'): FunctionFragment;

  encodeFunctionData(functionFragment: 'onTransferReceived', values: [string, string, BigNumberish, BytesLike]): string;

  decodeFunctionResult(functionFragment: 'onTransferReceived', data: BytesLike): Result;

  events: {
    'Received(address,address,uint256,bytes,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Received'): EventFragment;
}

export interface ReceivedEventObject {
  operator: string;
  sender: string;
  amount: BigNumber;
  data: string;
  gas: BigNumber;
}
export type ReceivedEvent = TypedEvent<[string, string, BigNumber, string, BigNumber], ReceivedEventObject>;

export type ReceivedEventFilter = TypedEventFilter<ReceivedEvent>;

export interface ERC1363ReceiverMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC1363ReceiverMockInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    onTransferReceived(
      spender: string,
      sender: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;
  };

  onTransferReceived(
    spender: string,
    sender: string,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  callStatic: {
    onTransferReceived(
      spender: string,
      sender: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    'Received(address,address,uint256,bytes,uint256)'(
      operator?: null,
      sender?: null,
      amount?: null,
      data?: null,
      gas?: null
    ): ReceivedEventFilter;
    Received(operator?: null, sender?: null, amount?: null, data?: null, gas?: null): ReceivedEventFilter;
  };

  estimateGas: {
    onTransferReceived(
      spender: string,
      sender: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    onTransferReceived(
      spender: string,
      sender: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;
  };
}
