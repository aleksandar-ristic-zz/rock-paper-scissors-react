import React from 'react'

export const Header = ({ score }) => {
	return <div>Score: {score && <p>{score}</p>}</div>
}
