import Form from './Form';
import { React, Component, useState, createContext } from 'react';
import StartView, { checkName } from './views/start.view';

function App(props) {
	return (
		<div className='App'>
			<StartView />
		</div>
	);
}

export default App;
