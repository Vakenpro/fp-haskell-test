import React from 'react';
import { crosswordData } from '../../components/crossword/crosswordConstant';
import { download } from './crosswordDownload';

import { A, Li } from './styled';

export default function () {
  return (
    <ul style={{ padding: 0 }}>
      {crosswordData.map((elem) => (
        <Li key={elem.id}>
          <A to={`crossword/${elem.id}`}>Кроссворд № {elem.id + 1}</A>
          <button type="button" style={{ position: 'relative', top: '-45px', left: '300px' }}>
            <a href={download[elem.id + 1]} download={`crossword№${elem.id + 1}`}>
              Скачать
            </a>
          </button>
        </Li>
      ))}
    </ul>
  );
}
