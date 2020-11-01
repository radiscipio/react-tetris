import React, { useState } from "react"
import { createStage } from '../gameHelpers'

//Stlyed Components
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris"

// Hooks
import { usePlayer } from '../hooks/usePlayer'
import { useStage } from '../hooks/useStage'

// Components 
import Stage from "./Stage"
import Display from "./Display"
import StartButton from "./StartButton"

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player] = usePlayer();
  const [stage, setStage] = useStage(player)

  console.log('re-render')

  const movePlayer = (dir) = >{

  }

  const startGame = () => {

  }

  const drop = () => {

  }

  const dropPlayer = () => {

  }

  const move = ({ keycode }) => {
    if (!gameOver) {
      if(keycode === 37) {
        movePlayer(-1);
      }
      else if(keycode === 39) {
        movePlayer(1);
      }
      else if (keycode === 40) {
        dropPlayer();
      }
    }
  }

  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="GAME OVER" />
          ) : (
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
          )}
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
};

export default Tetris;