import React, { Component } from 'react';
import './styles/styles.css';
import { cards } from './models/card.model';
import { shuffleCards } from './controllers/suffleCards.controller';
import { disableButton, enableButton } from './controllers/controlButton.controller';
import ReactSwitch from 'react-switch';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: cards,
			score: 0,
			buttons: true,
			auxCards: [],
			name: this.props.singleName,
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
					messages: 'Respuesta correcta!',
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
					messages: 'Ups la respuesta es incorrecta!',
				};
			});
		}

		this.nextQuestion();
		console.log('Auxcards:', this.state.auxCards);
	};

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
						<div className='game-title'>
							<h1>JavaScript Interview Trainer</h1>
						</div>
						<div className='dark-mode'></div>
						<div className='language-mode'>Language</div>
					</div>
					<div className='footer'>
						<div className='made-love'>
							<i className='bi bi-code'></i>
							<h5 className='copy'>
								Hecho con <i className='bi bi-heart-fill'></i> por Kamilo
							</h5>
							<i className='bi bi-code-slash'></i>
						</div>
					</div>
					<div className='game-area'>
						<div className='player-name'>{this.state.name}</div>
						<div className='player-points'>
							<p className='acumulatedPoints'>
								<span>{this.state.score}</span>
							</p>
						</div>
						<div className='score'>score</div>
						<div className='lives'>
							<div className='heart-1'>
								<i className='bi bi-suit-heart-fill'></i>
							</div>
							<div className='heart-2'>
								<i className='bi bi-suit-heart-fill'></i>
							</div>
							<div className='heart-3'>
								<i className='bi bi-suit-heart-fill'></i>
							</div>
						</div>
						<div className='card-play'>
							<p id='currentCard'>{firstQuestion}</p>
						</div>
						<div className='messages'>
							<p className='textMessage'>
								<span>{this.state.messages}</span>
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

export default Form;
