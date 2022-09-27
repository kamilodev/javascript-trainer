import { React, Component } from 'react';
import '../styles/styles.css';
import Form from '../Form';

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
			document.getElementById('welcomeMessage').innerHTML = 'Invalid name, Please enter your name';
		}
	}

	render() {
		if (this.state.mode === 'view') {
			return (
				<>
					<div className='userView'>
						<h1 id='welcomeMessage'>Welcome, please insert your name</h1>
						<div>
							<input type='text' id='nameUser' />
							<button
								id='startButton'
								onClick={() => {
									this.handleSubmit();
								}}>
								Start
							</button>
						</div>
					</div>
				</>
			);
		} else {
			return (
				<>
					<Form sendName={this.state.name} />
				</>
			);
		}
	}
}

export default StartView;
