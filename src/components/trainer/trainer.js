import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { trainersData } from './trainerConstant';

import { Wrapper, Button, Trainer, Trainerquest, Ul, Input, Ol, Li, H2, H3, Hr } from './styled';

const Trens = () => {
  const trainerId = useLocation().pathname.split('/')[2];
  const trainerdata = trainersData[trainerId].data;

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
      <Trainer>
        <H2>Предварительный просмотр:</H2>
        <Hr></Hr>
        <H3>Тренажёр №**.</H3>
        <Trainerquest>
          <Ul>
            {trainerdata.left.map((statement) => (
              <Li key={statement.id}>
                {statement.text}
                <Input id={statement.id} type="number" min="1" max={trainerdata.left.length} onChange={handleChange} />
              </Li>
            ))}
          </Ul>
          <Ol>
            {trainerdata.right.map((statement) => (
              <li key={statement.id}>{statement.text}</li>
            ))}
          </Ol>
        </Trainerquest>
      </Trainer>
      <Button type="button" onClick={handleClick} disabled={disabled}>
        проверить ответы
      </Button>
    </>
  );
};

export default Trens;
