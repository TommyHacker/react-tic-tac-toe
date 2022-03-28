import React, { useEffect, useState } from 'react';

const Square = ({
	num,
	player,
	setPlayer,
	moves,
	setMoves,
	winner,
	steps,
	setSteps,
	reset,
	setReset,
}) => {
	useEffect(() => {
		if (reset) {
			setClaimed('');
			setReset(false);
			return;
		} else {
			return;
		}
	}, [reset, setReset]);
	const [claimed, setClaimed] = useState('');
	const clickHandler = (num) => {
		if (winner) {
			return;
		} else {
			if (claimed === '') {
				let xMoves = [...moves.x];
				let oMoves = [...moves.o];
				if (player === 'X') {
					xMoves[num] = 'X';
					setMoves({ x: xMoves, o: oMoves });
					setClaimed(player);
				} else if (player === 'O') {
					oMoves[num] = 'O';
					setMoves({ x: xMoves, o: oMoves });
					setClaimed(player);
				}
				setClaimed(player);
				player === 'X' ? setPlayer('O') : setPlayer('X');
				setSteps(steps + 1);
			} else {
				return;
			}
		}
	};
	return (
		<div
			className={claimed === '' ? 'square' : `square ${claimed}`}
			onClick={() => clickHandler(num)}
		>
			<h1>{claimed}</h1>
		</div>
	);
};

export default Square;
