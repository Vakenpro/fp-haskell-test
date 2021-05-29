import React from 'react';
import { testsData } from '../../components/test/testConstant';
import { download } from './testDownload';

import { A, Li } from './styled';

export default function () {
  return (
    <ul style={{ padding: 0 }}>
      {testsData.map((elem) => (
        <Li key={elem.id}>
          <A to={`test/${elem.id}`}>Тест № {elem.id + 1}</A>
          <button type="button" style={{ position: 'relative', top: '-45px', left: '300px' }}>
            <a href={download[elem.id + 1]} download={`test№${elem.id + 1}`}>
              Скачать
            </a>
          </button>
        </Li>
      ))}
    </ul>
  );
}
