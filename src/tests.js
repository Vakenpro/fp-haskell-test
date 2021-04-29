import React, { useState, useEffect } from 'react';
import { testdata } from './testConstant';
const Tests = () => {
  const [disabled, setDisabled] = useState(true);
  /* const [chosenAnswers, setChosenAnswers] = useState([]); */
  const [answersCount, setAnswersCount] = useState(0);
  const [trueAnswers, setTrueAnswers] = useState(0);

  useEffect(() => {
    setDisabled(answersCount !== testdata.length);
  }, [answersCount]);

  const handleChoose = (id /*, value*/, answerId) => {
    /* const item = {value, answerId, id,};
        if(chosenAnswers.length===id){
            setChosenAnswers([...chosenAnswers, item]);
        }else{
            setChosenAnswers(chosenAnswers.map((answer)=>
            (answer.id===id ? item : answer)
            ));
        } */
    if (answersCount === id) {
      setAnswersCount(answersCount + 1);
    }
    if (trueAnswers === 0) {
      setTrueAnswers(testdata[id].trueAnswerId === answerId ? trueAnswers + 1 : trueAnswers);
    } else {
      setTrueAnswers(testdata[id].trueAnswerId === answerId ? trueAnswers + 1 : trueAnswers - 1);
    }
  };

  const handleSubmit = () => {
    trueAnswers === testdata.length
      ? alert('Все верно, вы гений')
      : alert(`Правильных ответов:${trueAnswers} из ${testdata.length}`);
  };

  return (
    <>
      <ul>
        {testdata.map((test) => (
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
                    onClick={() => handleChoose(test.id - 1 /*, answer.text */, answer.id)}
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

export default Tests;
