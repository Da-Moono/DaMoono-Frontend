import logo from '@/assets/images/logo.png';
import BottomNav from '@/components/BottomNav';
import { Loading3D } from '@/components/loading';
import Layout from '../layout/Layout';
import * as styles from './style/Home.css';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        {/* 로고 */}
        <img src={logo} alt="다무너" className={styles.logo} />

        <div style={{ width: '200px', height: '200px' }}>
          <Loading3D
            textureUrl="src/assets/images/search-moono.png"
            floatSpeed={1.8}
            rotation={0.5}
          />
        </div>

        {/* AI 챗봇 버튼 */}
        <button type="button" className={styles.chatButton}>
          <span className={styles.chatText}>무너에게 다 무너봐~</span>
          <span className={styles.chatBadge}>채팅하기</span>
        </button>

        {/* 최근 상담 요약 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>최근 상담 요약 &gt;</h2>
          <div className={styles.emptyState}>최근 상담 내역이 없습니다</div>
        </section>

        {/* 이벤트 슬라이더 */}
        <section className={styles.section}>
          <div className={styles.slider}>
            <div className={styles.sliderCard}>
              <div className={styles.sliderContent}>성향 테스트 하러가기</div>
            </div>
          </div>
        </section>

        {/* BEST 상품 한번에 보기 */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>BEST 상품 한번에 보기</h2>
            <button type="button" className={styles.moreButton}>
              더보기 &gt;
            </button>
          </div>

          <div className={styles.tabs}>
            <button type="button" className={styles.tabActive}>
              요금제
            </button>
            <button type="button" className={styles.tab}>
              구독
            </button>
          </div>

          <div className={styles.productList}>
            {[1, 2, 3, 4, 5].map((rank) => (
              <div key={rank} className={styles.productItem}>
                <div className={styles.productRank}>{rank}</div>
                <div className={styles.productIcon} />
                <div className={styles.productInfo}>
                  <p className={styles.productName}>
                    데이터 무한 + 로밍 + 유튜브 프리미엄 요금제 + 추가 혜택 &gt;
                  </p>
                  <p className={styles.productPrice}>월 59,800원</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <BottomNav />
    </Layout>
  );
}
