const initialState = {
  button: 'Addition'
};

const worksheetButtons = (state = initialState, action) => {
  if (action.type === 'SET_BUTTON') {
    return {
      ...state,
      button: action.payload,
    };
  }
  return state;
};

export default worksheetButtons;