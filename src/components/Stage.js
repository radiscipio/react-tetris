import React from "react"
import { StyledStage } from './styles/StyledStage'

// Components
import Cell from "./Cell"

const Stage = ({ stage }) => (
  <div>
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </div>
)

export default Stage;