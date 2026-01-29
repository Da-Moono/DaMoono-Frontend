import { useState } from 'react';
import { useNavigate } from 'react-router';
import manual2 from '@/assets/images/manual2.png';
import manual3 from '@/assets/images/manual3.png';
import manual4 from '@/assets/images/manual4.png';
import moonerbot from '@/assets/images/moonerbot.png';
import BottomNav from '@/components/BottomNav';
import Header from '@/components/Header';
import Layout from '../layout/Layout';
import * as styles from './style/ChatManualPage.css';

export default function ChatManualPage() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      title: '다무너 상담서비스, 무너',
      subtitle: '무엇이든 물어보세요!\n챗봇 상담사 무너가 답변드려요',
      description:
        '텍스트와 음성을 통해 질문을 \n입력하고 답변을 빠르게 받아요.\n상담 내용을 요약하고 상담사 연결을 빠르게 진행해요!',
      image: moonerbot,
    },
    {
      title: '추천 질문',
      subtitle: '많이 하는 추천 질문과 답변을\n빠르게 확인할 수 있어요',
      description: '',
      image: manual2,
    },
    {
      title: '추가 메뉴',
      subtitle:
        '더보기 버튼을 클릭하여 상담사 연결과\n채팅 초기화 등 진행할 수 있어요',
      description: '',
      image: manual3,
    },
    {
      title: '요약하기',
      subtitle:
        '상담사 연결 후, 상단의 요약하기 버튼을 클릭해\n 상담 내역을 요약하고 저장할 수',
      description: '',
      image: manual4,
    },
  ];

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < pages.length - 1 ? prev + 1 : prev));
  };

  const handleStartChat = () => {
    navigate('/chat');
  };

  return (
    <Layout>
      <Header />
      <div className={styles.container}>
        {/* 화살표 버튼들 - 항상 렌더링하되 첫 페이지에서는 왼쪽 화살표 숨김 */}
        <button
          type="button"
          className={styles.navButtonLeft}
          onClick={handlePrevPage}
          style={{ visibility: currentPage > 0 ? 'visible' : 'hidden' }}
        >
          ←
        </button>
        <button
          type="button"
          className={styles.navButtonRight}
          onClick={handleNextPage}
          style={{
            visibility: currentPage < pages.length - 1 ? 'visible' : 'hidden',
          }}
        >
          →
        </button>

        {/* 메인 컨텐츠 */}
        <div className={styles.content}>
          {/* 타이틀 */}
          <h1 className={styles.title}>{pages[currentPage].title}</h1>

          {/* 서브타이틀 */}
          <p className={styles.subtitle}>{pages[currentPage].subtitle}</p>

          {/* 페이지 인디케이터 */}
          <div className={styles.indicators}>
            {pages.map((page, index) => (
              <button
                key={page.title}
                type="button"
                className={
                  index === currentPage
                    ? styles.indicatorActive
                    : styles.indicator
                }
                onClick={() => setCurrentPage(index)}
              />
            ))}
          </div>

          {/* 이미지 */}
          <div
            className={
              currentPage === 0
                ? styles.imageContainer
                : styles.manualImageContainer
            }
          >
            <img
              src={pages[currentPage].image}
              alt="무너봇"
              className={styles.image}
            />
          </div>

          {/* 설명 */}
          {pages[currentPage].description && (
            <p className={styles.description}>
              {pages[currentPage].description}
            </p>
          )}
        </div>

        {/* 상담 시작하기 버튼 */}
        <button
          type="button"
          className={styles.startButton}
          onClick={handleStartChat}
        >
          상담 시작하기
        </button>
      </div>

      <BottomNav />
    </Layout>
  );
}
