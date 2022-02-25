import { useState } from 'react'
import { Modal } from './Modal'

export const Footer = () => {
	const [show, setShow] = useState(false)

	return (
		<footer>
			<div className='attribution'>
				<p>
					Challenge by{' '}
					<a
						href='https://www.frontendmentor.io?ref=challenge'
						rel='noreferrer'
						target='_blank'
					>
						Frontend Mentor
					</a>
				</p>
				Coded by{' '}
				<a
					href='https://github.com/aleksandar-ristic'
					rel='noreferrer'
					target='_blank'
				>
					ri10@
				</a>
			</div>
			<button
				className='rules'
				onClick={() => setShow(prevValue => !prevValue)}
			>
				Rules
			</button>
			{show && <Modal setShow={setShow} />}
		</footer>
	)
}
