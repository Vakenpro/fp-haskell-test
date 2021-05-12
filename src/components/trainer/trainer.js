import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { trainersData } from './trainerConstant';

const Trens = () => {
  const { id } = useParams();
  const trainerdata = trainersData[id].data;

  const [answersCount, setAnswersCount] = useState(0);
  const [chosenAnswers, setChosenAnswers] = useState([]);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(answersCount !== trainerdata.left.length);
  }, [answersCount]);

  const handleChange = ({ target }) => {
    const result = chosenAnswers.find((elem) => elem.id === target.id);
    const item = { value: target.value, id: target.id, wasUsed: result ? true : false };
    if (chosenAnswers.length === 0 || !item.wasUsed) {
      setChosenAnswers([...chosenAnswers, item]);
      setAnswersCount(answersCount + 1);
    } else {
      setChosenAnswers(chosenAnswers.map((answer) => (answer.id === target.id ? item : answer)));
    }
  };
  const handleClick = () => {
    const result = trainerdata.left.filter(
      (statement) => statement.answerId + 1 === +chosenAnswers[statement.id].value
    );
    result.length === trainerdata.left.length
      ? alert('Все верно, вы гений')
      : alert(`Правильных ответов:${result.length} из ${trainerdata.left.length}`);
  };
  return (
    <>
      <h2>тренажеры</h2>
      <div style={{ display: 'flex' }}>
        <ul style={{ marginRigth: '200px' }}>
          {trainerdata.left.map((statement) => (
            <li key={statement.id}>
              {statement.text}
              <input id={statement.id} type="number" min="1" max={trainerdata.left.length} onChange={handleChange} />
            </li>
          ))}
        </ul>
        <ul>
          {trainerdata.right.map((statement) => (
            <li key={statement.id}>{statement.text}</li>
          ))}
        </ul>
      </div>
      <button type="button" onClick={handleClick} disabled={disabled}>
        проверить ответы
      </button>
    </>
  );
};

export default Trens;
