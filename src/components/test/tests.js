import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
      <ul>
        {testData.map((test) => (
          <li key={test.id}>
            {test.question}
            <br />
            <form>
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
            </form>
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleSubmit} disabled={disabled}>
        проверить ответы
      </button>
    </>
  );
};

export default Test;
