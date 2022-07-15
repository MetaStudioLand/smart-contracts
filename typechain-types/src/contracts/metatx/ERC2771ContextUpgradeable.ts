/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils} from 'ethers';
import type {FunctionFragment, Result, EventFragment} from '@ethersproject/abi';
import type {Listener, Provider} from '@ethersproject/providers';
import type {TypedEventFilter, TypedEvent, TypedListener, OnEvent} from '../../../common';

export interface ERC2771ContextUpgradeableInterface extends utils.Interface {
  functions: {
    'isTrustedForwarder(address)': FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: 'isTrustedForwarder'): FunctionFragment;

  encodeFunctionData(functionFragment: 'isTrustedForwarder', values: [string]): string;

  decodeFunctionResult(functionFragment: 'isTrustedForwarder', data: BytesLike): Result;

  events: {
    'Initialized(uint8)': EventFragment;
    'TrustedForwarderChanged(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Initialized'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TrustedForwarderChanged'): EventFragment;
}

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface TrustedForwarderChangedEventObject {
  oldTF: string;
  newTF: string;
}
export type TrustedForwarderChangedEvent = TypedEvent<[string, string], TrustedForwarderChangedEventObject>;

export type TrustedForwarderChangedEventFilter = TypedEventFilter<TrustedForwarderChangedEvent>;

export interface ERC2771ContextUpgradeable extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC2771ContextUpgradeableInterface;

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
    isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<[boolean]>;
  };

  isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    'Initialized(uint8)'(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    'TrustedForwarderChanged(address,address)'(oldTF?: null, newTF?: null): TrustedForwarderChangedEventFilter;
    TrustedForwarderChanged(oldTF?: null, newTF?: null): TrustedForwarderChangedEventFilter;
  };

  estimateGas: {
    isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
