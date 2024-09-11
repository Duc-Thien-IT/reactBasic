import React, { useState } from 'react';
import Board from './Board';
import "./GameStyle.css";
import { calculateWinner } from '../../helper';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);   
    const handleClick = (index) => {
        const boardCopy = [...Board];
        if(winner || boardCopy[index]) return;
        boardCopy[index] = xIsNext ? "X" : "O";
        console.log(boardCopy[index]);
        setBoard(boardCopy);
        setXIsNext((xIsNext) => ! xIsNext);    
    };
    return (
        <div>
            <Board cells = {board} onClick={handleClick} ></Board>
            {winner ?  `Winner is ${xIsNext ? "X" : "O"}` :  ""};
        </div>
    );
};

export default Game;