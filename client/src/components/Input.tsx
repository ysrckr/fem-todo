import { FC } from 'react'

type InputProps = {
    todo: string
    changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = ({ todo, changeHandler }) => {
	return (
		<>
			<input placeholder="Create a new todo.." value={todo} onChange={changeHandler}/>
		</>
	)
}
export default Input
