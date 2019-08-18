export const ALL_TETROMINOS = {
  0: { 
    shape: [[0]], 
    color: '0, 0, 0',
  },
  I: {
    shape: [[0, 'I', 0, 0], [0, 'I', 0, 0], [0, 'I', 0, 0], [0, 'I', 0, 0]],
    color: '80, 220, 230'
  },
  J: { 
    shape: [[0, 'J', 0], [0, 'J', 0], ['J', 'J', 0]], 
    color: '40, 90, 220'
  },
  L: {
    shape: [[0, 'L', 0], [0, 'L', 0], [0, 'L', 'L']],
    color: '220, 180, 40'
  },
  O: { 
    shape: [['O', 'O'], ['O', 'O']], 
    color: '220, 220, 40'
  },
  S: { 
    shape: [[0, 'S', 'S'], ['S', 'S', 0], [0, 0, 0]], 
    color: '50, 200, 50'
  },
  T: {
    shape: [[0, 0, 0], ['T', 'T', 'T'], [0, 'T', 0]],
    color: '130, 60, 200'
  },
  Z: { 
    shape: [['Z', 'Z', 0], [0, 'Z', 'Z'], [0, 0, 0]], 
    color: '230, 80, 80'
  },
};

export const randomTetromino = () => {
  const possibleTetrominos = 'IJLOSTZ';
  const randomTetromino = possibleTetrominos[Math.floor(Math.random() * possibleTetrominos.length)];
  
  return ALL_TETROMINOS[randomTetromino];
};
