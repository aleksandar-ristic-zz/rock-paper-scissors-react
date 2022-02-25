import React from 'react'

export const Header = ({ score }) => {
	return (
		<div className='Header'>
			<div className='text'>
				<span>Rock</span>
				<span>Paper</span>
				<span>Scissors</span>
			</div>
			<div className='score-box'>
				<span>Score</span>
				<div className='score-box__score'>{score}</div>
			</div>
		</div>
	)
}
