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
  id: 'cm7k0m3kz0000xv2abc123def',
  sessionId: 'session-1738050000000',
  audience: 'CONSULTANT',
  payload: {
    summary_admin: {
      report_card: {
        category: '품질',
        outcome: {
          value: '부분 해결',
          reason: '해외 차단은 해제했으나 재부팅 후에도 데이터 미접속이 지속됨',
        },
        re_contact: {
          value: '높음',
          reason: "고객이 '안 되면 다시 전화하겠다'고 명시적으로 언급함",
        },
      },
      mood_timeline: {
        start: { mood: '긴박', reason: '출국 직전이라 빠른 해결을 요구함' },
        middle: {
          mood: '확인 중',
          reason: '안내된 설정을 따라하며 상태를 점검함',
        },
        end: { mood: '실망', reason: '최종적으로 데이터 접속이 해결되지 않음' },
        improvement_score: 35,
      },
      customer_dna: [
        { tag: '시간 긴급', reason: '초반부터 출국 직전임을 강조함' },
        { tag: '디지털 익숙', reason: '설정 용어를 빠르게 이해하고 조작함' },
      ],
      risk_tagging: [
        { tag: '장기 미해결', reason: '즉시 해결되지 않고 추가 점검이 필요함' },
        {
          tag: '종량 과금 위험',
          reason: '정액제 언급 없이 차단 해제 상태가 유지됨',
        },
      ],
      next_interaction_guide:
        '임시 조치 후에도 미해결 상태. 후속 콜백 시 재부팅/망 재등록/요금제·로밍 가입 여부 확인부터 진행 권장.',
    },
  },
  ticketId: '',
  category: '품질',
  summary:
    '임시 조치 후에도 미해결 상태. 후속 콜백 시 재부팅/망 재등록/요금제·로밍 가입 여부 확인부터 진행 권장.',
  version: 1,
  promptKey: 'consultant_v3',
  _meta: {
    llmMs: 1840,
    messageCount: 12,
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

      <BottomNav />
    </Layout>
  );
};

export default SummaryPage;
