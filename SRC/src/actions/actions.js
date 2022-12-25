import {actionTypes} from './ads.types';

export const setIncrement = data => ({
  type: 'INCREMNT',
  payload: data,
});

export const setDecrement = data => ({
  type: 'DECREMENT',
  payload: data,
});

export const setChangeName = data => ({
  type: 'NAME',
  payload: data,
});
