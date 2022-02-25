import { useState } from 'react'
import { Game, Play, Layout } from './components'
import { Routes, Route } from 'react-router-dom'

const App = () => {
	const [playerChoice, setPlayerChoice] = useState('')
	const [score, setScore] = useState(0)

	return (
		<>
			<Routes>
				<Route path='/' element={<Layout score={score} />}>
					<Route index element={<Play setPlayerChoice={setPlayerChoice} />} />
					<Route
						path='game'
						element={<Game playerChoice={playerChoice} setScore={setScore} />}
					/>
				</Route>
			</Routes>
		</>
	)
}

export default App
