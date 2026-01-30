import { motion } from 'framer-motion';
import { useLocation } from 'react-router';
import BottomNav from '@/components/BottomNav/BottomNav';
import BackButton from '@/components/Button/BackButton';
import Header from '@/components/Header/Header';
import Layout from '@/pages/layout/Layout';
import * as s from '@/pages/Summary/style/SummaryPage.css';
import CharacterScene from './CharacterScene';
import CompactTipBox from './components/CompactTipBox';
import GuideChecklist from './components/GuideChecklist';
import NextActionCard from './components/NextActionCard';
import ProposalHighlight from './components/ProposalHighlight';
import StatusCard from './components/StatusCard';
import SummaryResultCard from './components/SummaryResultCard';
import WarningCard from './components/WarningCard';

const MOCK_SUMMARY_DATA = {
  id: '',
  category: '',
  summary: '',
  coreActions: [],
  currentStatus: [],
  notices: [],
  nextActions: [],
  guides: null,
  proposals: null,
  tips: null,
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
  const summaryData = location.state?.summaryData || MOCK_SUMMARY_DATA;
  const from = location.state?.from || 'mypage';
  const backButtonConfig =
    from === 'chat'
      ? { targetPath: '/chat', label: '채팅 화면으로 돌아가기' }
      : { targetPath: '/mypage', label: '마이페이지로 돌아가기' };

  if (
    summaryData.id === '' ||
    (summaryData.summary.trim() === '' &&
      summaryData.coreActions.length === 0 &&
      summaryData.currentStatus.length === 0 &&
      summaryData.notices.length === 0 &&
      summaryData.nextActions.length === 0)
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

          <BackButton targetPath="/chat" label="채팅 화면으로 돌아가기" />
        </motion.div>
        <BottomNav />
      </Layout>
    );
  }

  return (
    // 1. 전체 레이아웃 틀로 감싸기
    <Layout>
      {/* 2. 헤더 */}
      <Header />

      {/* 3. 실제 콘텐츠 영역 */}
      <motion.div
        className={s.pageContainer}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.section className={s.characterSection} variants={itemVariants}>
          <p>
            상담 결과 <br /> 요약 및 후속 조치
          </p>
          <CharacterScene />
        </motion.section>

        {summaryData?.summary && (
          <motion.section className={s.contentSection} variants={itemVariants}>
            <SummaryResultCard
              category={summaryData.category}
              summary={summaryData.summary}
              coreActions={summaryData.coreActions}
            />
          </motion.section>
        )}

        {summaryData?.currentStatus?.length > 0 && (
          <motion.section className={s.contentSection} variants={itemVariants}>
            <StatusCard currentStatus={summaryData.currentStatus} />
          </motion.section>
        )}

        {summaryData?.notices?.length > 0 && (
          <motion.section className={s.contentSection} variants={itemVariants}>
            <WarningCard notices={summaryData.notices} />
          </motion.section>
        )}

        {summaryData?.nextActions?.length > 0 && (
          <motion.section className={s.contentSection} variants={itemVariants}>
            <NextActionCard nextActions={summaryData.nextActions} />
          </motion.section>
        )}

        <motion.section className={s.contentSection} variants={itemVariants}>
          {/* <Accordion type="guide" data={MOCK_SUMMARY_DATA.guides} />
          <Accordion type="tip" data={MOCK_SUMMARY_DATA.tips} />
          <Accordion type="proposal" data={MOCK_SUMMARY_DATA.proposals} /> */}

          {summaryData?.guides && <GuideChecklist data={summaryData.guides} />}
          {summaryData?.tips && <CompactTipBox data={summaryData.tips} />}
          {summaryData?.proposals && (
            <ProposalHighlight data={summaryData.proposals} />
          )}
        </motion.section>

        <BackButton
          targetPath={backButtonConfig.targetPath}
          label={backButtonConfig.label}
        />
      </motion.div>

      {/* 4. 네비게이션 */}
      <BottomNav />
    </Layout>
  );
};

export default SummaryPage;
