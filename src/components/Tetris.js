import React from 'react';

import Stage from './Stage';
import Display from './Display';
import Button from './Button';

const Tetris = () => {
    return (
        <div>
            <Stage />
            <aside>
                <div>
                    <Display text="Score" />
                    <Display text="Rows" />
                    <Display text="Level" />
                </div>
                <Button text="Start" />
            </aside>
        </div>
    )
}
export default Tetris;