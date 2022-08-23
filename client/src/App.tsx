import { useState } from 'react'
import { theme } from '../types/propTypes'
import Header from './components/Header'


function App() {
	const [theme, setTheme] = useState<theme>('light')
	return (
		<>
			<Header theme={theme} />
		</>
	)
}

export default App
