import { FC } from 'react'
import type { header } from '../../types/propTypes'
import { useState } from 'react'
import Input from './Input'
const Header: FC<header> = ({ theme, todo, changeHandler }) => {
	const clickHandler = () => {}
	return (
		<header className={'flex-col ' + theme}>
			<div className="hero">
				<div className="flex">
					<h1>TODO</h1>
					<span onClick={clickHandler}>{theme}</span>
				</div>
				<div className="input-container">
					<Input todo={todo} changeHandler={changeHandler} />
				</div>
			</div>
		</header>
	)
}
export default Header
