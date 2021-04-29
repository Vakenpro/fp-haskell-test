import React from 'react';
import { Link } from 'react-router-dom';
import { crosswordData } from '../../components/crossword/crosswordConstant';
export default function () {
  return (
    <ul>
      {crosswordData.map((elem) => (
        <li key={elem.id}>
          <Link to={`crossword/${elem.id}`}>Кроссворд № {elem.id + 1}</Link>
        </li>
      ))}
    </ul>
  );
}
