import { useEffect, useRef, useState } from 'react';
import moonerCrew from '@/assets/images/mooner-crew.png';
import * as styles from '../style/MessageCard.css';

interface Card {
  title: string;
  price?: string;
  originalPrice?: string;
  discountPrice?: string;
  mainFeature?: string;
  details: Array<{ label: string; value: string }>;
}

interface MessageCardProps {
  cards: Card[];
  type: string;
}

export default function MessageCard({ cards, type }: MessageCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const cardWidth = scrollRef.current.offsetWidth;
        const newIndex = Math.round(scrollLeft / cardWidth);
        setCurrentIndex(newIndex);
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleNext = () => {
    if (scrollRef.current && currentIndex < cards.length) {
      const cardWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: (currentIndex + 1) * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  const handlePrev = () => {
    if (scrollRef.current && currentIndex > 0) {
      const cardWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: (currentIndex - 1) * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  const getMoreText = () => {
    if (type === 'plan') return '다양한 요금제를 살펴보세요';
    if (type === 'subscription') return '다양한 구독을 살펴보세요';
    if (type === 'phone') return '다양한 휴대폰을 살펴보세요';
    if (type === 'event') return '다양한 이벤트를 살펴보세요';
    return '더 많은 정보 보러가기';
  };

  const getMoreButtonText = () => {
    if (type === 'plan') return '더 많은 요금제 보러가기';
    if (type === 'subscription') return '더 많은 구독 보러가기';
    if (type === 'phone') return '더 많은 휴대폰 보러가기';
    if (type === 'event') return '더 많은 이벤트 보러가기';
    return '더 많은 정보 보러가기';
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardWrapper} ref={scrollRef}>
        <div className={styles.cardTrack}>
          {cards.map((card) => (
            <div key={card.title} className={styles.card}>
              <h4 className={styles.cardTitle}>{card.title}</h4>

              {card.originalPrice && (
                <>
                  <p className={styles.cardOriginalPrice}>
                    {card.originalPrice}
                  </p>
                  {card.discountPrice && (
                    <p className={styles.cardDiscountPrice}>
                      {card.discountPrice}
                    </p>
                  )}
                </>
              )}

              {card.price && !card.originalPrice && (
                <p className={styles.cardPrice}>{card.price}</p>
              )}

              {card.mainFeature && (
                <>
                  <div className={styles.divider} />
                  <p className={styles.mainFeature}>{card.mainFeature}</p>
                </>
              )}

              <div className={styles.cardDetails}>
                {card.details.map((detail) => (
                  <div
                    key={`${detail.label}-${detail.value}`}
                    className={styles.detailRow}
                  >
                    <span className={styles.detailLabel}>{detail.label}</span>
                    <span className={styles.detailValue}>{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* 마지막 카드 */}
          <div className={styles.card}>
            <h4 className={styles.cardTitle}>{getMoreText()}</h4>
            <img
              src={moonerCrew}
              alt="무너 크루"
              className={styles.crewImage}
            />
            <button type="button" className={styles.moreButton}>
              {getMoreButtonText()}
            </button>
          </div>
        </div>
      </div>

      {/* 네비게이션 버튼 */}
      <div className={styles.navigation}>
        <button
          type="button"
          className={styles.navButton}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          ←
        </button>
        <span className={styles.pageIndicator}>
          {currentIndex + 1} / {cards.length + 1}
        </span>
        <button
          type="button"
          className={styles.navButton}
          onClick={handleNext}
          disabled={currentIndex === cards.length}
        >
          →
        </button>
      </div>
    </div>
  );
}
