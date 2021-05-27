import React from 'react';
import { crosswordData } from '../../components/crossword/crosswordConstant';
import { download } from './crosswordDownload';

import {Section, A, Button} from './styled';

export default function () {
  return (
    <ul style={{ padding: 0 }}>
      {crosswordData.map((elem) => (
        <>
            <A key={elem.id} to={`crossword/${elem.id}`}>
              Кроссворд № {elem.id + 1}
              <Section>
                <Button type="button">
                  <a href={download[elem.id + 1]} download={`crossword№${elem.id + 1}`}>
                    Скачать кроссворд
                  </a>
                </Button>
              </Section>
            </A>
        </>
      ))}
    </ul>
  );
}
