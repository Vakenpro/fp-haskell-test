import React, { useRef } from 'react';
import Crossword from '@jaredreisinger/react-crossword';
import { useLocation } from 'react-router-dom';
import './index.css';
import { crosswordData } from './crosswordConstant';

import { Button } from './styled';

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
      <div style={{ width: '400px', height: '400px' }} class="crossword">
        <Crossword
          ref={crossword}
          data={data}
          onCorrect={() => alert('йуху')}
          theme={{ gridBackground: 'rgb(0,0,0)' }}
        />
      </div>
      <Button onClick={handleClear}>очистить</Button>
    </>
  );
};

export default CrosswordComponent;
