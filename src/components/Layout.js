import { Header, Footer } from '.'
import { Outlet } from 'react-router-dom'

export const Layout = ({ score }) => {
	return (
		<div className='container'>
			<Header score={score} />
			<Outlet />
			<Footer />
		</div>
	)
}
