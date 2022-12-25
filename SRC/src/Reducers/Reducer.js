import {AnyAction} from 'redux';
import {adsInitialState, actionTypes} from './ads.types';

export const initialState = {
  number: 0,
  name: 'Naresh',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMNT':
      return {
        ...state,
        number: action.payload,
      };
    case 'DECREMENT':
      return {
        ...state,
        number: action.payload,
      };

    case 'NAME':
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
};
