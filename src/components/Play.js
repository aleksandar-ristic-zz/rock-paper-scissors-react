import { Link } from 'react-router-dom'
import triangle from '../images/bg-triangle.svg'

export const Play = ({ setPlayerChoice }) => {
	const choices = ['rock', 'paper', 'scissors']
	return (
		<div className='Play'>
			<img src={triangle} alt='triangle' className='triangle' />
			<div className='items'>
				{choices.map((choice, id) => (
					<Link key={id} to='/game'>
						<div
							data-id={choice}
							onClick={({ target }) => setPlayerChoice(target.dataset.id)}
							className={`icon icon--${choice}`}
						></div>
					</Link>
				))}
			</div>
		</div>
	)
}
