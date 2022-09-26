import React, { Component } from 'react';
import './styles/styles.css';
import { cards } from './models/card.model';
import { shuffleCards } from './controllers/suffleCards.controller';
import { disableButton, enableButton } from './controllers/controlButton.controller';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: cards,
			score: 0,
			buttons: true,
			auxCards: [],
		};
	}

	componentDidMount() {
		this.setState({
			cards: shuffleCards(this.state.cards),
		});
	}

	checkAnswer = (answer, correctAnswer) => {
		this.state.auxCards.push({
			question: this.state.cards[0].question,
			answers: {
				answerA: this.state.cards[0].answers.answerA,
				answerB: this.state.cards[0].answers.answerB,
				answerC: this.state.cards[0].answers.answerC,
			},
			correctAnswer: this.state.cards[0].correctAnswer,
			response: 'false',
		});

		this.state.cards[0].response = 'true';

		if (answer === correctAnswer) {
			this.setState(() => {
				return {
					score: this.state.score + 10,
					messages: 'Correct Answer',
				};
			});
		} else if (this.state.score === 0) {
			this.setState(() => {
				return {
					score: 0,
				};
			});
		} else {
			this.setState(() => {
				return {
					score: this.state.score - 10,
					messages: 'Wrong Answer',
				};
			});
		}
		this.nextQuestion();
		console.log('Auxcards:', this.state.auxCards);
	};

	/* nextWithFor = () => {
		const remanent = this.state.cards.filter(card => card.response === 'false');
		console.log('Remanent: ', remanent);
	}; */

	nextQuestion = () => {
		if (this.state.cards.length > 1) {
			const remanent = this.state.cards.filter(card => card.response === 'false');
			this.setState(() => {
				return {
					cards: remanent,
				};
			});
			console.log('Remanent: ', remanent);
		} else {
			this.setState(() => {
				return {
					messages: `Game Over, you have finished the game`,
					buttons: false,
				};
			});
			disableButton();
			console.log('Despues del disable: ', this.state.cards);
		}
	};

	resetGame = () => {
		console.log('antes de tarjetilla', this.state.cards);
		this.setState(() => {
			return {
				cards: shuffleCards(this.state.auxCards),
				score: 0,
				buttons: true,
				auxCards: [],
			};
		});
		enableButton();
		console.log('Despues del reset: ', this.state.cards);
	};

	/* async function resetGame () {
		const megareset = await (() => {
			cards.forEach(card => {
				card.response = 'false';
			})
      })

		this.setState({
			cards: shuffleCards,
			score: 0,
			messages: '',
			buttons: true,
		});
		enableButton();
		console.log('Despues del reset: ', this.state.cards);

		} */

	render() {
		let firstQuestion = this.state.cards[0].question;
		let firstAnswer = this.state.cards[0].answers.answerA;
		let secondAnswer = this.state.cards[0].answers.answerB;
		let thirdAnswer = this.state.cards[0].answers.answerC;
		let correctAnswer = this.state.cards[0].correctAnswer;

		return (
			<>
				{console.log('Estado Actual ', this.state.cards)}
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
						<div className='player-points'>
							<p>
								Points: <span>{this.state.score}</span>
							</p>
						</div>
						<div className='score'>score</div>
						<div className='lives'>
							<div className='heart-1'>Heart 1</div>
							<div className='heart-2'>Heart 2</div>
							<div className='heart-3'>Heart 3</div>
						</div>
						<div className='card-play'>
							<p>{firstQuestion}</p>
						</div>
						<div className='messages'>
							<p>
								Messages: <span>{this.state.messages}</span>
							</p>
						</div>
						<div className='buttons'>
							<div className='option-A'>
								<button
									className='firstButton'
									id='firstButton'
									onClick={() => {
										this.checkAnswer(firstAnswer, correctAnswer);
									}}>
									<p>{firstAnswer}</p>
								</button>
							</div>
							<div className='option-B'>
								<button
									className='secondButton'
									id='secondButton'
									onClick={() => {
										this.checkAnswer(secondAnswer, correctAnswer);
									}}>
									<p>{secondAnswer}</p>
								</button>
							</div>
							<div className='option-C'>
								<button
									className='thirdButton'
									id='thirdButton'
									onClick={() => {
										this.checkAnswer(thirdAnswer, correctAnswer);
									}}>
									<p>{thirdAnswer}</p>
								</button>
							</div>
						</div>
						<div className='start-control'>
							<div className='button-control' id='startButton'>
								<button
									className='startButton hideMe'
									onClick={() => {
										this.resetGame();
									}}>
									Jugar Otra Vez!
								</button>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default App;
