import React from 'react';
import { trainersData } from '../../components/trainer/trainerConstant';

import { A } from './styled';

export default function () {
  return (
    <ul style={{padding:0}}>
      {trainersData.map((elem) => (
          <A key={elem.id} to={`trainer/${elem.id}`}>Тренажер № {elem.id + 1}</A>
      ))}
    </ul>
  );
}
