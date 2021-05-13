import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Button } from './styled';
import { Form } from './styled';
import { Li } from './styled';
import { Ul } from './styled';
import { H2 } from './styled';
import { H3 } from './styled';
import { Hr } from './styled';


import { testsData } from './testConstant';
const Test = () => {
  const testId = useLocation().pathname.split('/')[2];
  const testData = testsData[testId].data;
  const [disabled, setDisabled] = useState(true);
  const [chosenAnswers, setChosenAnswers] = useState([]);
  const [answersCount, setAnswersCount] = useState(0);
  const [trueAnswers, setTrueAnswers] = useState(0);

  useEffect(() => {
    setDisabled(answersCount !== testData.length);
  }, [answersCount]);

  const handleChoose = (id, value, answerId) => {
    const item = { value, answerId, id };
    const result = chosenAnswers.filter((elem) => elem.id !== id);
    if (chosenAnswers.length === 0 || chosenAnswers.length === result.length) {
      setChosenAnswers([...chosenAnswers, item]);
      setAnswersCount(answersCount + 1);
      setTrueAnswers(testData[id].trueAnswerId === answerId ? trueAnswers + 1 : trueAnswers);
    } else {
      setChosenAnswers(chosenAnswers.map((answer) => (answer.id === id ? item : answer)));
      setTrueAnswers(testData[id].trueAnswerId === answerId ? trueAnswers + 1 : trueAnswers - 1);
    }
  };

  const handleSubmit = () => {
    trueAnswers === testData.length
      ? alert('Все верно, вы гений')
      : alert(`Правильных ответов:${trueAnswers} из ${testData.length}`);
  };

  return (
    <>
      <Ul>
        <H2>Предварительный просмотр:</H2>
        <Hr></Hr>
        <H3>Тест по Haskell на тему:"*****".</H3>
        {testData.map((test) => (
          <Li key={test.id}>
            {test.question}
            <br />
            <Form>
              {test.answers.map((answer) => (
                <label key={answer.id}>
                  <input
                    type="radio"
                    name={test.id}
                    value={answer.text}
                    onClick={() => handleChoose(test.id - 1, answer.text, answer.id)}
                  />
                  {answer.text}
                </label>
              ))}
            </Form>
          </Li>
        ))}
      </Ul>
      <Button type="button" onClick={handleSubmit} disabled={disabled}>
        проверить ответы
      </Button>
    </>
  );
};

export default Test;
