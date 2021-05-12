import React from 'react';
import { testsData } from '../../components/test/testConstant';

import { A } from './styled';

export default function () {
  return (
    <ul style={{padding:0}}>
      {testsData.map((elem) => (
        
        <A key={elem.id} to={`test/${elem.id}`}>
          Тест № {elem.id + 1}
          </A>
        
      ))}
      
    </ul>
  );
}
