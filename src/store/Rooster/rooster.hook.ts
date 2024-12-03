import {useDispatch, useSelector} from 'react-redux';
import {
  fetchRoosterSucceeded, roosterSelectorngSelector} from './rooster.slice';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';

export const useFAQ = () => {
  const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
  const roster = useSelector(roosterSelectorngSelector);

  const setRooster = (rooster : string) => {
    dispatch(fetchRoosterSucceeded(rooster));    
  };

  return {
    setRooster
  };
};
