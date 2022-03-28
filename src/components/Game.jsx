import React, { useState, useEffect } from 'react';
import Square from './Square';

const Game = () => {
	const combos = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	const [winner, setWinner] = useState(null);
	const [steps, setSteps] = useState(0);
	const calcWinner = (playerMoves) => {
		for (let i = 0; i < combos.length; i++) {
			const [a, b, c] = combos[i];
			if (
				playerMoves[a] &&
				playerMoves[a] === playerMoves[b] &&
				playerMoves[a] === playerMoves[c]
			) {
				setWinner(playerMoves[a]);
			}
		}
	};

	useEffect(() => {
		if (steps <= 9 && !winner) {
			calcWinner(moves.x);
			calcWinner(moves.o);
			return;
		}
		if (steps === 9 && !winner) return setWinner('DRAW');
	});
	const [moves, setMoves] = useState({
		x: ['', '', '', '', '', '', '', '', ''],
		o: ['', '', '', '', '', '', '', '', ''],
	});
	const [player, setPlayer] = useState('X');
	const [reset, setReset] = useState(false);
	const resetHandler = () => {
		setReset(true);
		setPlayer('X');
		setMoves({
			x: ['', '', '', '', '', '', '', '', ''],
			o: ['', '', '', '', '', '', '', '', ''],
		});
		setWinner(null);
		setSteps(0);
	};

	return (
		<>
			<h1 className='winner'>{winner ? `${winner}` : `${player}'s turn!`}</h1>
			<h2 className='player-turn'>
				{winner === 'X' || winner === 'O' ? 'WINNER!' : ``}
			</h2>
			<div className='game-container'>
				<Square
					num='0'
					player={player}
					setPlayer={setPlayer}
					moves={moves}
					setMoves={setMoves}
					winner={winner}
					steps={steps}
					setSteps={setSteps}
					reset={reset}
					setReset={setReset}
				/>
				<Square
					num='1'
					player={player}
					setPlayer={setPlayer}
					moves={moves}
					setMoves={setMoves}
					winner={winner}
					steps={steps}
					setSteps={setSteps}
					reset={reset}
					setReset={setReset}
				/>
				<Square
					num='2'
					player={player}
					setPlayer={setPlayer}
					moves={moves}
					setMoves={setMoves}
					winner={winner}
					steps={steps}
					setSteps={setSteps}
					reset={reset}
					setReset={setReset}
				/>
				<Square
					num='3'
					player={player}
					setPlayer={setPlayer}
					moves={moves}
					setMoves={setMoves}
					winner={winner}
					steps={steps}
					setSteps={setSteps}
					reset={reset}
					setReset={setReset}
				/>
				<Square
					num='4'
					player={player}
					setPlayer={setPlayer}
					moves={moves}
					setMoves={setMoves}
					winner={winner}
					steps={steps}
					setSteps={setSteps}
					reset={reset}
					setReset={setReset}
				/>
				<Square
					num='5'
					player={player}
					setPlayer={setPlayer}
					moves={moves}
					setMoves={setMoves}
					winner={winner}
					steps={steps}
					setSteps={setSteps}
					reset={reset}
					setReset={setReset}
				/>
				<Square
					num='6'
					player={player}
					setPlayer={setPlayer}
					moves={moves}
					setMoves={setMoves}
					winner={winner}
					steps={steps}
					setSteps={setSteps}
					reset={reset}
					setReset={setReset}
				/>
				<Square
					num='7'
					player={player}
					setPlayer={setPlayer}
					moves={moves}
					setMoves={setMoves}
					winner={winner}
					steps={steps}
					setSteps={setSteps}
					reset={reset}
					setReset={setReset}
				/>
				<Square
					num='8'
					player={player}
					setPlayer={setPlayer}
					moves={moves}
					setMoves={setMoves}
					winner={winner}
					steps={steps}
					setSteps={setSteps}
					reset={reset}
					setReset={setReset}
				/>
			</div>
			<button onClick={() => resetHandler()}>Reset</button>
		</>
	);
};

export default Game;
