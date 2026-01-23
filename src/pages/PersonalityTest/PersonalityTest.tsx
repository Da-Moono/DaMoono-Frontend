import mascot from '@/assets/images/search-moono.png';
import Header from '@/components/Header';
import Layout from '../layout/Layout';
import * as styles from './style/PersonalityTest.css';

export default function PersonalityTest() {
  const handleStartTest = () => {
    // TODO: 테스트 시작 로직
    console.log('테스트 시작');
  };

  return (
    <Layout>
      <Header />

      <div className={styles.container}>
        <img src={mascot} alt="무너" className={styles.mascot} />

        <h1 className={styles.title}>
          나에게 <span className={styles.highlight}>어울리는 상품</span>은
          무엇일까?
        </h1>

        <p className={styles.description}>
          무너의 질문에 답변하여
          <br />
          맞춤형 서비스를 추천받아보세요!
        </p>

        <button
          type="button"
          className={styles.startButton}
          onClick={handleStartTest}
        >
          성향 테스트 하러가기
        </button>
      </div>
    </Layout>
  );
}
