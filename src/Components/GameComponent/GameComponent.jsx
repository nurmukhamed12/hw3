

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { guessNumber, resetGame } from '../../actions';

const GameComponent = () => {
  const dispatch = useDispatch();
  const { guessedNumber, message } = useSelector((state) => state.game);
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleGuess = () => {
    dispatch(guessNumber(parseInt(userInput, 10)));
  };

  const handleReset = () => {
    setUserInput('');
    dispatch(resetGame());
  };

  return (
    <div>
      <h1>Отгадайте число от 0 до 100:</h1>
      <input
        type="number"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Введите число"
      />
      <button onClick={handleGuess}>Проверить</button>
      <p>{message}</p>
      {guessedNumber !== null && (
        <div>
          <button onClick={handleReset}>Заново</button>
        </div>
      )}
    </div>
  );
};

export default GameComponent;

