import React from "react"
import { StyledDisplay } from './styles/StyledDisplay'
import { StyledStage } from "./styles/StyledStage"

const Display = ({ gameOver, text }) => (
<StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
)

export default Display