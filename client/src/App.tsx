import { useState } from 'react'
import { theme } from '../types/propTypes'
import Header from './components/Header'



function App() {
	const [theme, setTheme] = useState<theme>('light')
	const [todos, setTodos] = useState<string[]>([])
	const [todo, setTodo] = useState<string>('')

	const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTodo(e.target.value)
	}
	return (
		<>
			<Header theme={theme} todo={todo} changeHandler={inputChangeHandler}/>
			
		</>
	)
}

export default App
