import { useState, useCallback } from 'react'
import { TETROMINOS, randomTetrominos } from '../tetrominos'
import { STAGE_WIDTH } from '../gameHelpers'

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    colided: false,
  });

  const rotate = (matrix, dir) => {
    // Make rows become collumns (transpose)

    const rotatedTetro = matrix.map((_, index) => 
      matrix.map(col => col[index]),
    );

    // Reverse each row to get a rotated Matrix 
    if (dir > 0) return rotatedTetro.map(row => row.reeverse());
    return rotatedTetro.reverse()
  };

const playerRotate = (stage, dir) => {
  const clonedPlayer = JSON.parse(JSON.stringify(player));

  clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);
  setPlayer(clonedPlayer);
};

const updatePlayerPos = ({ x, y, collided }) => {
  setPlayer(prev => ({
    ...prev,
    pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
    collided,
  }))
};

const resetPlayer = useCallback(() => {
  setPlayer({
    pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
    tetromino: randomTetrominos().shape,
    collided: false,
  });
}, [],);

return [player, updatePlayerPos, resetPlayer, playerRotate];
};