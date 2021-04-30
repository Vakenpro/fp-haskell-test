import React, { useRef } from 'react';
import Crossword from '@jaredreisinger/react-crossword';
import { useLocation } from 'react-router-dom';
import './index.css';
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
      <h2>кроссворд</h2>
      <p>попробуй решить мой кроссворд</p>
      <div style={{ width: '400px', height: '400px' }} class="crossword">
        <Crossword
          ref={crossword}
          data={data}
          onCorrect={() => alert('йуху')}
          theme={{ gridBackground: 'rgb(0,0,0)' }}
        />
      </div>
      <button onClick={handleClear}>очистить</button>
    </>
  );
};

export default CrosswordComponent;
