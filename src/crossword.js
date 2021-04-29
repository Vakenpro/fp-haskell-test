import React, { useRef } from 'react';
import Crossword from '@jaredreisinger/react-crossword';

const data = {
        across: {
          1: {
            clue: 'are you gay',
            answer: 'NO',
            row: 0,
            col: 0,
          },
          3: {
            clue: 'gays are also',
            answer: 'PIDORASES',
            row: 2,
            col: 1,
          },
        },
        down: {
          2: {
            clue: 'part of programing where you use classes',
            answer: 'OOP',
            row: 0,
            col: 1,
          },
        },
};

const CrosswordComponent = () => {
    const crossword = useRef();
    const handleClear = () => {
        alert(crossword.current.isCrosswordCorrect());
        crossword.current.reset();
    };
    return (
    <>
        <h2>кроссворды</h2>
        <div style={{width: "400px", height: "400px"}}>
        <Crossword ref={crossword} data={data} onCorrect={()=>alert("йуху")} theme={{gridBackground:"rgba(255,255,255,0)"}} />
        </div>
        <button onClick={handleClear}>очистить</button>
    </>);
}

export default CrosswordComponent;