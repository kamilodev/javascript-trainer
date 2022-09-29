import { React, Component, useState, createContext } from 'react';
import '../styles/styles.css';
import Form, { Player } from '../Form';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null);

export function Switch(props) {
	const singleUser = props.sendName;
	const [theme, setTheme] = useState('light');
	const toggleTheme = () => {
		setTheme(curr => (curr === 'light' ? 'dark' : 'light'));
	};

	let image = '';
	if (theme === 'light') {
		image = 'images/javascript-logo.png';
	} else {
		image = 'images/javascript-logo-dark.png';
	}

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<div className='Second-App' id={theme}>
				<div className='mode-container'>
					<label id='label-mode'>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
					<ReactSwitch
						className='react-switch'
						onChange={toggleTheme}
						checked={theme === 'dark'}
						uncheckedIcon={false}
						height={20}
						width={40}
						handleDiameter={20}
					/>
				</div>
				<Form singleName={singleUser} logo={image} />
			</div>
		</ThemeContext.Provider>
	);
}

class StartView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			mode: 'view',
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit() {
		if (document.getElementById('nameUser').value.length > 3) {
			return this.setState({ name: document.getElementById('nameUser').value, mode: 'form' });
		} else {
			const newText = document.getElementById('welcomeMessage');
			newText.innerHTML = 'Invalid name, Please enter your name';
			newText.style.color = '#004E64';
		}
	}

	render() {
		if (this.state.mode === 'view') {
			return (
				<>
					<div className='userView'>
						<div className='insideUser'>
							<h1 id='welcomeMessage'>Welcome, please insert your name</h1>
							<div>
								<input type='text' id='nameUser' />
								<div className='formControls'>
									<button
										id='startButtonMain'
										onClick={() => {
											this.handleSubmit();
										}}>
										Start
									</button>
								</div>
							</div>
						</div>
					</div>
				</>
			);
		} else {
			return (
				<>
					<Switch sendName={this.state.name} />
				</>
			);
		}
	}
}

export default StartView;
