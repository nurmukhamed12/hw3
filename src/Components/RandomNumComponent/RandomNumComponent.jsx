

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateRandomNumber } from '../../actions';

const RandomNumComponent = () => {
  const dispatch = useDispatch();
  const randomNumber = useSelector((state) => state.random.randomNumber);

  const handleUpdateRandomNumber = (changeType) => {
    dispatch(updateRandomNumber(changeType));
  };

  return (
    <div>
      <h1>Изменить случайное число:</h1>
      <p>Текущее число: {randomNumber}</p>
      <button onClick={() => handleUpdateRandomNumber('INCREMENT')}>+RND</button>
      <button onClick={() => handleUpdateRandomNumber('DECREMENT')}>-RND</button>
    </div>
  );
};

export default RandomNumComponent;

