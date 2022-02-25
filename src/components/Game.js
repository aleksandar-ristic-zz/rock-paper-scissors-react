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
				setResult('Draw!')
				return
			}

			if (
				(playerChoice === 'rock' && computerChoice === 'scissors') ||
				(playerChoice === 'paper' && computerChoice === 'rock') ||
				(playerChoice === 'scissors' && computerChoice === 'paper')
			) {
				setResult('You Win!')
				setScore(prevScore => prevScore + 1)
			}

			if (
				(computerChoice === 'rock' && playerChoice === 'scissors') ||
				(computerChoice === 'paper' && playerChoice === 'rock') ||
				(computerChoice === 'scissors' && playerChoice === 'paper')
			) {
				setResult('Computer Wins!')
				setScore(prevScore => prevScore - 1)
			}
		}
		checkChoices()
	}, [playerChoice, computerChoice, setScore])

	return (
		<div>
			<p>player choice:{playerChoice}</p>
			<p>computer choice: {computerChoice}</p>
			result: <h2>{result}</h2>
			<Link to='/' onClick={() => setComputerChoice('')}>
				Play Again
			</Link>
		</div>
	)
}
