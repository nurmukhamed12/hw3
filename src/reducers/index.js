
import { combineReducers } from 'redux';
import gameReducer from './gameReducer/gameReducer';
import randomReducer from './randomReducer/randomReducer';

const rootReducer = combineReducers({
  game: gameReducer,
  random: randomReducer,
});

export default rootReducer;
