import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
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
  const navigate = useNavigate();

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

  const handleMoreClick = () => {
    if (type === 'plan') {
      navigate('/plan');
    } else if (type === 'subscription') {
      navigate('/subscribe');
    } else if (type === 'phone') {
      // 휴대폰 페이지 경로 (필요시 수정)
      navigate('/phone');
    } else if (type === 'event') {
      // 이벤트 페이지 경로 (필요시 수정)
      navigate('/event');
    }
  };

  const totalCards = type === 'event' ? cards.length : cards.length + 1;

  return (
    <div className={styles.container}>
      <div className={styles.cardWrapper} ref={scrollRef}>
        <div className={styles.cardTrack}>
          {cards.map((card) => {
            // '설명' 항목을 찾아서 분리
            const descriptionDetail = card.details.find(
              (detail) => detail.label === '설명',
            );

            // mainFeature가 있으면 '데이터' 항목 제거 (무제한이든 아니든)
            const otherDetails = card.details.filter(
              (detail) =>
                detail.label !== '설명' &&
                !(card.mainFeature && detail.label === '데이터'),
            );

            return (
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

                {/* 설명을 맨 위에 한 줄로 표시 */}
                {descriptionDetail && (
                  <div className={styles.descriptionRow}>
                    <span className={styles.descriptionText}>
                      {descriptionDetail.value}
                    </span>
                  </div>
                )}

                <div className={styles.cardDetails}>
                  {otherDetails.map((detail) => (
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
            );
          })}

          {/* 마지막 카드 - 이벤트 타입이 아닐 때만 표시 */}
          {type !== 'event' && (
            <div className={styles.card}>
              <h4 className={styles.cardTitle}>{getMoreText()}</h4>
              <img
                src={moonerCrew}
                alt="무너 크루"
                className={styles.crewImage}
              />
              <button
                type="button"
                className={styles.moreButton}
                onClick={handleMoreClick}
              >
                {getMoreButtonText()}
              </button>
            </div>
          )}
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
          {currentIndex + 1} / {totalCards}
        </span>
        <button
          type="button"
          className={styles.navButton}
          onClick={handleNext}
          disabled={currentIndex === totalCards - 1}
        >
          →
        </button>
      </div>
    </div>
  );
}
