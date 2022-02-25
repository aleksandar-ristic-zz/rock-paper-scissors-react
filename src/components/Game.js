import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useInterval } from '../hooks/use-interval'

export const Game = ({ setScore, playerChoice }) => {
	const [computerChoice, setComputerChoice] = useState('')
	const [result, setResult] = useState('')
	const [count, setCount] = useState(3)

	useEffect(() => {
		const randomComputerPick = () => {
			if (!playerChoice) return

			const choices = ['rock', 'paper', 'scissors']

			setComputerChoice(choices[Math.floor(Math.random() * 3)])
		}

		randomComputerPick()
	}, [playerChoice])

	useEffect(() => {
		const checkChoices = () => {
			if (!playerChoice) return
			if (playerChoice === computerChoice) {
				setResult('draw')
				return
			}

			if (
				(playerChoice === 'rock' && computerChoice === 'scissors') ||
				(playerChoice === 'paper' && computerChoice === 'rock') ||
				(playerChoice === 'scissors' && computerChoice === 'paper')
			) {
				setResult('you win')
				setScore(prevScore => prevScore + 1)
			}

			if (
				(computerChoice === 'rock' && playerChoice === 'scissors') ||
				(computerChoice === 'paper' && playerChoice === 'rock') ||
				(computerChoice === 'scissors' && playerChoice === 'paper')
			) {
				setResult('you lose')
				setScore(prevScore => prevScore - 1)
			}
		}

		if (count === 0) {
			checkChoices()
		}
	}, [playerChoice, computerChoice, setScore, count])

	useInterval(
		() => {
			setCount(prevCount => prevCount - 1)
		},
		count > 0 ? 1000 : 0
	)

	return (
		<div className='Game'>
			<div className='Game__player'>
				<span className='text'>You Picked</span>
				<div
					className={`icon icon--${playerChoice} ${
						result === 'you win' ? `icon icon--${playerChoice}--win` : ''
					}`}
				></div>
			</div>

			<div className='Game__result'>
				{count === 0 && result && (
					<>
						<span className='text'>{result}</span>
						<Link
							to='/'
							onClick={() => setComputerChoice('')}
							className='btn-play-again'
						>
							Play Again
						</Link>
					</>
				)}
			</div>

			<div className='Game__computer'>
				<span className='text'>The House Picked</span>
				{count === 0 ? (
					<div
						className={`icon icon--${computerChoice} ${
							result === 'you lose' ? `icon icon--${computerChoice}--win` : ''
						}`}
					></div>
				) : (
					<div className='counter'>{count}</div>
				)}
			</div>
		</div>
	)
}
