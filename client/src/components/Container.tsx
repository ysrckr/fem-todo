import type { FC } from 'react'
import type { IPropsWithChildrenTheme } from '../../types/propTypes'

const Container: FC<IPropsWithChildrenTheme> = ({ children, theme }) => {
	return <div className={'container ' + theme}>{children}</div>
}
export default Container
