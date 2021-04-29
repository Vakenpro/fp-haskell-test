import React, { useRef } from 'react';
import Crossword from '@jaredreisinger/react-crossword';
import { useLocation } from 'react-router-dom';

import { crosswordData } from './crosswordConstant';

const CrosswordComponent = () => {
  const crosswordId = useLocation().pathname.split('/')[2];
  const data = crosswordData[crosswordId].data;
  const crossword = useRef();
  const handleClear = () => {
    alert(crossword.current.isCrosswordCorrect());
    crossword.current.reset();
  };
  return (
    <>
      <h2>кроссворды</h2>
      <div style={{ width: '400px', height: '400px' }}>
        <Crossword
          ref={crossword}
          data={data}
          onCorrect={() => alert('йуху')}
          theme={{ gridBackground: 'rgba(255,255,255,0)' }}
        />
      </div>
      <button onClick={handleClear}>очистить</button>
    </>
  );
};

export default CrosswordComponent;
