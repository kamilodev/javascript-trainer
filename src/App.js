import React from 'react';
import './styles/styles.css';

function App() {
	return (
		<>
			<div class='container'>
				<div class='header'>
					<div class='game-title'>Game title</div>
					<div class='dark-mode'>Dark Mode</div>
					<div class='language-mode'>Language</div>
				</div>
				<div class='footer'>
					<div class='made-love'>Made With Love</div>
				</div>
				<div class='game-area'>
					<div class='player-name'>Player Name</div>
					<div class='player-points'>Player Points</div>
					<div class='counter'>Counter</div>
					<div class='lives'>
						<div class='heart-1'>Heart 1</div>
						<div class='heart-2'>Heart 2</div>
						<div class='heart-3'>Heart 3</div>
					</div>
					<div class='card-play'>Card</div>
					<div class='messages'>Message</div>
					<div class='buttons'>
						<div class='option-A'>Option A</div>
						<div class='option-B'>Option B</div>
						<div class='option-C'>Option C</div>
					</div>
					<div class='start-control'>
						<div class='button-control'>Button Control</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
