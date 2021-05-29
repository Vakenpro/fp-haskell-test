import React from 'react';
import { trainersData } from '../../components/trainer/trainerConstant';
import { download } from './trainerDownload.js';
import { A, Li } from './styled';

export default function () {
  return (
    <ul style={{ padding: 0 }}>
      {trainersData.map((elem) => (
        <Li key={elem.id}>
          <A to={`trainer/${elem.id}`}>Тренажер № {elem.id + 1}</A>
          <button type="button" style={{ position: 'relative', top: '-45px', left: '300px' }}>
            <a href={download[elem.id + 1]} download={`trainer№${elem.id + 1}`}>
              Скачать
            </a>
          </button>
        </Li>
      ))}
    </ul>
  );
}
