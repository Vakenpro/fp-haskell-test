import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Button, Form, Li, Ul, H2, H3, Hr } from './styled';

import { testsData } from './testConstant';
const Test = () => {
  const { id } = useParams();
  const testData = testsData[id].data;
  const [disabled, setDisabled] = useState(true);
  const [chosenAnswers, setChosenAnswers] = useState([]);
  const [answersCount, setAnswersCount] = useState(0);
  const [trueAnswers, setTrueAnswers] = useState(0);
  const [answersLength, setAnswersLength] = useState(0);

  useEffect(() => {
    let value = 0;
    testData.forEach((test) => {
      value += test.trueAnswerId.length;
    });
    setAnswersLength(value);
  }, []);

  useEffect(() => {
    setDisabled(testData.length > answersCount);
  }, [answersCount]);

  const handleChoose = (id, value, answerId) => {
    const item = { value, answerId, id };
    const result = chosenAnswers.filter((elem) => elem.id !== id);
    if (chosenAnswers.length === 0 || chosenAnswers.length === result.length) {
      setChosenAnswers([...chosenAnswers, item]);
      setAnswersCount(answersCount + 1);
      setTrueAnswers(testData[id].trueAnswerId.includes(answerId) ? trueAnswers + 1 : trueAnswers);
    } else {
      setChosenAnswers(chosenAnswers.map((answer) => (answer.id === id ? item : answer)));
      setTrueAnswers(testData[id].trueAnswerId.includes(answerId) ? trueAnswers + 1 : trueAnswers - 1);
    }
  };

  const handleSubmit = () => {
    trueAnswers >= answersLength
      ? alert('Все верно, вы гений')
      : alert(`Набранно баллов:${trueAnswers} из ${answersLength}`);
  };

  return (
    <>
      <Ul>
        <H2>Тест по Haskell №{+id + 1}</H2>
        <Hr></Hr>
        {testData.map((test) => (
          <Li key={test.id}>
            {test.question.split('\n').map((text) => (
              <p style={{ margin: '0' }}>{text}</p>
            ))}
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
