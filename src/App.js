import Form from './Form';
import { React, Component, useState, createContext } from 'react';
import StartView, { checkName } from './views/start.view';
export const ThemeContext = createContext(null);

function App(props) {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		setTheme(curr => (curr === 'light' ? 'dark' : 'light'));
	};

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<div className='App' id={theme}>
				<StartView />
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
