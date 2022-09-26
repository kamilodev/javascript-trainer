import { card } from '../models/card.model';

export const cardController = () => {
	const random = card[Math.floor(Math.random() * card.length)];
	return card[random];
};
