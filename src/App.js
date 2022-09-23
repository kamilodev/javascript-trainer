import React from 'react';
import './styles/styles.css';

function App() {
	return (
		<>
			<div className='container'>
				<div className='header'>
					<div className='game-title'>Game title</div>
					<div className='dark-mode'>Dark Mode</div>
					<div className='language-mode'>Language</div>
				</div>
				<div className='footer'>
					<div className='made-love'>Made With Love</div>
				</div>
				<div className='game-area'>
					<div className='player-name'>Player Name</div>
					<div className='player-points'>Player Points</div>
					<div className='counter'>Counter</div>
					<div className='lives'>
						<div className='heart-1'>Heart 1</div>
						<div className='heart-2'>Heart 2</div>
						<div className='heart-3'>Heart 3</div>
					</div>
					<div className='card-play'>Card</div>
					<div className='messages'>Message</div>
					<div className='buttons'>
						<div className='option-A'>Option A</div>
						<div className='option-B'>Option B</div>
						<div className='option-C'>Option C</div>
					</div>
					<div className='start-control'>
						<div className='button-control'>Button Control</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
