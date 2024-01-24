

const initialState = {
    randomNumber: Math.floor(Math.random() * 101),
  };
  
  const randomReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_RANDOM_NUMBER':
        const changeType = action.payload.changeType;
        const randomChange = Math.floor(Math.random() * 51);
        const newRandomNumber =
          changeType === 'INCREMENT'
            ? state.randomNumber + randomChange
            : state.randomNumber - randomChange;
  
        return {
          ...state,
          randomNumber: newRandomNumber,
        };
  
      default:
        return state;
    }
  };
  
  export default randomReducer;
  