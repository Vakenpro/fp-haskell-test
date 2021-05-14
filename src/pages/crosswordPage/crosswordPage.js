import React from 'react';
import { crosswordData } from '../../components/crossword/crosswordConstant';
import { download } from './crosswordDownload';

import { A } from './styled';

export default function () {
  return (
    <ul style={{ padding: 0 }}>
      {crosswordData.map((elem) => (
        <>
          <A key={elem.id} to={`crossword/${elem.id}`}>
            Кроссворд № {elem.id + 1}
          </A>
          <button style={{ position: 'relative', top: '-85px', left: '900px' }} type="button">
            <a href={download[elem.id + 1]} download={`crossword№${elem.id + 1}`}>
              Скачать
            </a>
          </button>
        </>
      ))}
    </ul>
  );
}
