import { useState, useEffect } from 'react'
import { createStage } from '../gameHelpers'

export const useStage = (player, resetPlayer) => {
  const [stage, useStage] = useState(createStage());

  useEffect(() => {

    const updateStage = prevStage => {
      // Clear the Stage
      const newStage = prevStage.map(row => 
        row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)),
      );

      // Make Tetromino
        player.tetromino.forEach((row, y) => {
          row.forEach((value, x) => {
            
          })
        })

    };

    setStage(prev => updateStage(prev))
  }, [])

  return [stage, useStage]
}