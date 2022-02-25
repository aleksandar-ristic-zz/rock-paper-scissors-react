import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Game = ({ setScore, playerChoice }) => {
	const [computerChoice, setComputerChoice] = useState('')
	const [result, setResult] = useState('')

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
		checkChoices()
	}, [playerChoice, computerChoice, setScore])

	return (
		<div className='Game'>
			<div className='Game__player'>
				<span className='text'>You Picked</span>
				<div
					className={`icon icon--${playerChoice} ${
						result === 'you Win' ? `icon icon--${playerChoice}--win` : ''
					}`}
				></div>
			</div>
			{result && (
				<div className='Game__result'>
					<span className='text'>{result}</span>
					<Link
						to='/'
						onClick={() => setComputerChoice('')}
						className='btn-play-again'
					>
						Play Again
					</Link>
				</div>
			)}
			<div className='Game__computer'>
				<span className='text'>The House Picked</span>
				<div
					className={`icon icon--${computerChoice} ${
						result === 'you Lose' ? `icon icon--${computerChoice}--win` : ''
					}`}
				></div>
			</div>
		</div>
	)
}
