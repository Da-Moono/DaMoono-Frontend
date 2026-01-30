import { motion } from 'framer-motion';
import { useLocation } from 'react-router';
import BackButton from '@/components/Button/BackButton';
import Header from '@/components/Header/Header';
import Layout from '@/pages/layout/Layout';
import * as s from '@/pages/Summary/style/SummaryPage.css';
import CustomerDNA from './components/CustomerDNA';
import MoodTimeline from './components/MoodTimeline';
import NextInteractionGuide from './components/NextGuide';
import ReportCard from './components/ReportCard';

const MOCK_SUMMARY_DATA = {
  id: '',
  sessionId: 'session-1738050000000',
  audience: 'CONSULTANT',
  payload: {
    summary_admin: {
      report_card: {
        category: '기타',
        outcome: {
          value: '',
          reason: '',
        },
        re_contact: {
          value: '',
          reason: '',
        },
      },
      mood_timeline: {
        start: { mood: '', reason: '' },
        middle: { mood: '', reason: '' },
        end: { mood: '', reason: '' },
        improvement_score: 0,
      },
      customer_dna: [],
      risk_tagging: [],
      next_interaction_guide: '',
    },
  },
  ticketId: '',
  category: '',
  summary: '',
  version: 1,
  promptKey: 'consultant_v3',
  _meta: {
    llmMs: 0,
    messageCount: 0,
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
    location.state?.summaryData?.payload?.summary_admin ||
    MOCK_SUMMARY_DATA.payload.summary_admin;

  if (
    !summaryData || // 데이터 자체가 없거나
    (summaryData.mood_timeline.start.mood === '' && // 무드 타임라인이 비어있고
      summaryData.customer_dna.length === 0 && // 성향 태그가 없고
      summaryData.risk_tagging.length === 0 && // 리스크 태그가 없고
      summaryData.report_card.outcome.value === '') // 처리 결과도 없을 때
  ) {
    return (
      <Layout>
        <Header />
        <motion.div
          className={s.pageContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '100px',
          }}
        >
          <motion.section className={s.characterSection}>
            {/* 기존 스타일 유지를 위해 캐릭터 씬 등을 활용해도 좋습니다 */}
            <p style={{ textAlign: 'left', fontSize: '1.2rem', color: '#666' }}>
              상담 데이터가 충분하지 않아 <br />
              <strong>리포트를 생성할 수 없습니다.</strong>
            </p>
          </motion.section>

          <BackButton targetPath="/chat/admin" label="상담 목록으로 돌아가기" />
        </motion.div>
      </Layout>
    );
  }
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
            상담사님 <br /> 요약 및 통계 리포트
          </p>
        </motion.section>

        <motion.section className={s.contentSection} variants={itemVariants}>
          <ReportCard
            data={summaryData?.report_card}
            user={location.state?.userName || '고객'}
          />
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
    </Layout>
  );
};

export default SummaryPage;
