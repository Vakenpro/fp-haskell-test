import React from 'react';
import { crosswordData } from '../../components/crossword/crosswordConstant';

import { A } from './styled';

export default function () {
  return (
    <ul style={{padding:0}}>
      {crosswordData.map((elem) => (
          <A key={elem.id} to={`crossword/${elem.id}`}>Кроссворд № {elem.id + 1}</A>
      ))}
    </ul>
  );
}
