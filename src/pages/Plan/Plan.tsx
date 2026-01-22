import BottomNav from '@/components/BottomNav';
import Header from '@/components/Header';
import { Loading3D } from '@/components/loading';
import Layout from '../layout/Layout';
import * as styles from './style/Plan.css';

export default function Plan() {
  return (
    <Layout>
      <Header />

      <div className={styles.container}>
        <h1 className={styles.title}>요금제 스트레스 많이받을꺼야</h1>

        <div style={{ width: '200px', height: '200px' }}>
          <Loading3D
            textureUrl="src/assets/images/search-moono.png"
            size="lg"
            floatSpeed={1.8}
            rotation={0.3}
          />
        </div>

        <div className={styles.planList}>
          {[1, 2, 3, 4, 5].map((plan) => (
            <div key={plan} className={styles.planItem}>
              <div className={styles.planInfo}>
                <p className={styles.planName}>
                  데이터 무한 + 로밍 + 유튜브 프리미엄 요금제 + 추가 혜택
                </p>
                <p className={styles.planPrice}>월 59,800원</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </Layout>
  );
}
