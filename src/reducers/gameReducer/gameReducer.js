// reducers/gameReducer.js

const initialState = {
    secretNumber: Math.floor(Math.random() * 101),
    guessedNumber: null,
    message: '',
  };
  
  const gameReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GUESS_NUMBER':
        const guessedNumber = action.payload;
        let message = '';
  
        if (guessedNumber === state.secretNumber) {
          message = 'Поздравляем, вы отгадали число!';
        } else if (guessedNumber < state.secretNumber) {
          message = 'Не правильно, берите выше.';
        } else {
          message = 'Не правильно, берите ниже.';
        }
  
        return {
          ...state,
          guessedNumber,
          message,
        };
  
      case 'RESET_GAME':
        return {
          ...initialState,
          secretNumber: Math.floor(Math.random() * 101),
        };
  
      default:
        return state;
    }
  };
  
  export default gameReducer;
  