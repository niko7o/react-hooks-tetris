import React from 'react';

import Cell from './Cell';

const Stage = ({ stage }) => {
    console.log(stage)
    return (
        <div>
          {stage.map(row => row.map((cell, i) => (
            <Cell
              key={i}
              type={cell[0]}
            />
          )))}
        </div>
      );
}

export default Stage;
