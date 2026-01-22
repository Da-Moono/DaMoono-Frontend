import BottomNav from '@/components/BottomNav';
import Header from '@/components/Header';
import { Loading3D } from '@/components/loading';
import Layout from '../layout/Layout';
import * as styles from './style/Subscribe.css';

export default function Subscribe() {
  return (
    <Layout>
      <Header />

      <div className={styles.container}>
        <h1 className={styles.title}>Subscribe</h1>

        <div style={{ width: '200px', height: '200px' }}>
          <Loading3D
            textureUrl="src/assets/images/search-moono.png"
            size="lg"
            floatSpeed={1.8}
            rotation={0.3}
          />
        </div>

        <div className={styles.subscribeList}>
          {[1, 2, 3, 4, 5].map((subscribe) => (
            <div key={subscribe} className={styles.subscribeItem}>
              <div className={styles.subscribeInfo}>
                <p className={styles.subscribeName}>
                  데이터 무한 + 로밍 + 유튜브 프리미엄 요금제 + 추가 혜택
                </p>
                <p className={styles.subscribePrice}>월 59,800원</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </Layout>
  );
}
