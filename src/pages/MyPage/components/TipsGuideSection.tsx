import { useState } from 'react';
import * as css from '../styles/tips.css';
import Indicator from './Indicator';
import TipsCard from './TipsCard';

interface Card {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface Props {
  cards: Card[];
}

export default function TipsGuideSection({ cards }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCard = cards[currentIndex];

  return (
    <section className={css.section}>
      <TipsCard {...currentCard} />

      <Indicator
        ids={cards.map((card) => card.id)}
        currentIndex={currentIndex}
        onChange={setCurrentIndex}
      />
    </section>
  );
}
