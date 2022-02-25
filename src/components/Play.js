import { Link } from 'react-router-dom'

export const Play = ({ setPlayerChoice }) => {
	const choices = ['rock', 'paper', 'scissors']
	return (
		<div className='Play'>
			{choices.map((choice, id) => (
				<Link key={id} to='/game'>
					<div
						data-id={choice}
						onClick={({ target }) => setPlayerChoice(target.dataset.id)}
						className={`icon icon--${choice}`}
					>
						{choice}
					</div>
				</Link>
			))}
		</div>
	)
}
