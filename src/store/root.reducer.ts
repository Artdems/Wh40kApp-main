import {Action, combineReducers} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import roosterSlice, {RoosterState} from './Rooster/rooster.slice';

export interface IAppState extends RoosterState  {}

export type ReduxDispatch<TArgs = any> = ThunkDispatch<
  IAppState,
  TArgs,
  Action
>;

export function useReduxDispatch<T>(): ReduxDispatch<T> {
  return useDispatch<ReduxDispatch<T>>();
}

const rootReducer = combineReducers<IAppState>({
  rooster: roosterSlice,
});

export default rootReducer;
