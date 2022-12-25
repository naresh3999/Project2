export const initialState = {
  number: 0,
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

    default:
      return state;
  }
};
