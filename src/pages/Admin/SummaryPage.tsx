import { motion } from 'framer-motion';
import { useLocation } from 'react-router';
import BottomNav from '@/components/BottomNav/BottomNav';
import BackButton from '@/components/Button/BackButton';
import Header from '@/components/Header/Header';
import Layout from '@/pages/layout/Layout';
import * as s from '@/pages/Summary/style/SummaryPage.css';
import CustomerDNA from './components/CustomerDNA';
import MoodTimeline from './components/MoodTimeline';
import NextInteractionGuide from './components/NextGuide';
import ReportCard from './components/ReportCard';

const MOCK_SUMMARY_DATA = {
  summary_admin: {
    report_card: {
      category: '품질',
      outcome: {
        value: '부분 해결',
        reason:
          'LTE 고정 등 임시 개선 조치는 안내 및 일부 적용되었으나, 근본 원인인 피크 타임 혼잡에 대해서는 네트워크 품질측정 티켓 접수 후 추가 확인이 필요한 상태임',
      },
      re_contact: {
        value: '보통',
        reason:
          '고객이 모든 안내에 수용적으로 응답하고 감사 인사를 했으나, 실제 품질 개선 여부는 추후 결과 안내를 기다려야 함',
      },
    },
    mood_timeline: {
      start: {
        mood: '짜증',
        reason:
          '데이터가 너무 느리고 특히 저녁에 속도가 나오지 않는다는 불만을 직접적으로 표현함',
      },
      middle: {
        mood: '확인 중',
        reason:
          '상담사의 질문과 임시 조치 안내에 차분히 응답하며 설정을 실제로 적용함',
      },
      end: {
        mood: '감사',
        reason:
          "티켓 접수 및 문자 안내 후 '고맙습니다'라고 명확히 감사 표현을 함",
      },
      improvement_score: 70,
    },
    customer_dna: [
      {
        tag: '기술적 이해도 보통',
        reason:
          'LTE 고정 설정 등 기본적인 네트워크 설정 안내를 추가 질문 없이 바로 수행함',
      },
      {
        tag: '품질 민감',
        reason:
          '속도 테스트 결과와 시간대별 체감을 구체적으로 언급하며 품질 저하를 인지하고 있음',
      },
    ],
    risk_tagging: [
      {
        tag: '장기 미해결',
        reason:
          '피크 타임 기지국 혼잡이 원인일 경우 단기간 내 근본 개선이 어려울 수 있음',
      },
    ],
    next_interaction_guide:
      '로밍 요금제 미가입 상태에서 데이터를 사용하여 과다 요금이 발생한 케이스임. CS-00987 심사 결과가 거절될 경우 다시 감정적 이의제기를 할 가능성이 높으므로, 심사 부서의 정확한 답변 근거를 미리 숙지하고 대응할 것을 권장.',
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // 자식 컴포넌트들이 0.2초 간격으로 등장
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SummaryPage = () => {
  const location = useLocation();
  // 넘겨받은 데이터가 없을 경우를 대비해 기본값 설정
  const summaryData =
    location.state?.summaryData?.summary_admin ||
    MOCK_SUMMARY_DATA.summary_admin;

  return (
    <Layout>
      <Header />

      <motion.div
        className={s.pageContainer}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.section className={s.characterSection} variants={itemVariants}>
          <p>
            OOO 상담사님 <br /> 요약 및 통계 리포트
          </p>
        </motion.section>

        <motion.section className={s.contentSection} variants={itemVariants}>
          <ReportCard data={summaryData?.report_card} />
        </motion.section>

        <motion.section className={s.contentSection} variants={itemVariants}>
          <MoodTimeline phases={summaryData?.mood_timeline} />
        </motion.section>

        <motion.section className={s.contentSection} variants={itemVariants}>
          <CustomerDNA
            dnaList={summaryData?.customer_dna}
            title="고객 성향 태그"
          />
        </motion.section>
        <motion.section className={s.contentSection} variants={itemVariants}>
          <CustomerDNA
            dnaList={summaryData?.risk_tagging}
            title="핵심 리스크 태그"
          />
        </motion.section>

        <motion.section className={s.contentSection} variants={itemVariants}>
          <NextInteractionGuide guide={summaryData?.next_interaction_guide} />
        </motion.section>

        <BackButton targetPath="/chat/admin" label="상담 목록으로 돌아가기" />
      </motion.div>

      <BottomNav />
    </Layout>
  );
};

export default SummaryPage;
