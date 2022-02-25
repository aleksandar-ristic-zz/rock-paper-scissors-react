import React from 'react'
import ReactDOM from 'react-dom'
import close from '../images/icon-close.svg'
import rules from '../images/image-rules.svg'

export const Modal = ({ setShow }) => {
	return ReactDOM.createPortal(
		<div className='Modal'>
			<div className='modal-box'>
				<div className='modal-box__header'>
					<h1>Rules</h1>
					<button onClick={() => setShow(false)}>
						<img src={close} alt='close button' />
					</button>
				</div>
				<img src={rules} alt='rules' />
			</div>
		</div>,
		document.getElementById('modal')
	)
}
