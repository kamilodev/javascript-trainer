import { cards } from '../models/card.model';

export function shuffleCards(cards) {
	return cards.sort(() => Math.random() - 0.5);
}
