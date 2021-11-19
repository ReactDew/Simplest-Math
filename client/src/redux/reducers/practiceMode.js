const initialState = {
  mode: 'Prebuilt Sheet'
};

const practiceMode = (state = initialState, action) => {
  if (action.type === 'SET_MODE') {
    return {
      ...state,
      mode: action.payload,
    };
  }
  return state;
};

export default practiceMode;