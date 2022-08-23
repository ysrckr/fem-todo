import { FC } from 'react'
import Container from './Container'
import type { themeProp } from '../../types/propTypes'

const Header: FC<themeProp> = ({ theme }) => {
	return (
		<Container theme={theme}>
			<div className={'flex hero ' + theme}>
				<h1>TODO</h1>
				<span>{theme}</span>
			</div>
		</Container>
	)
}
export default Header
