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
  id: 'NET-77531',
  category: '품질',
  summary: '네트워크 품질측정 티켓 접수 및 단말기 임시 조치 가이드 안내 완료',

  // 2. 처리된 핵심 조치
  coreActions: [
    {
      id: 1,
      icon: '🛡️',
      title: '네트워크 품질측정 티켓 등록',
      description: 'NET-77531 (현장팀 분석 착수)',
    },
    {
      id: 2,
      icon: '📱',
      title: '단말기 임시 개선 설정 안내',
      description: 'LTE 고정 등 4단계 설정법 가이드',
    },
    {
      id: 3,
      icon: '⏰',
      title: '결과 안내 예약',
      description: '영업일 {N}일 내 문자 또는 콜백(해피콜) 예정',
    },
  ],

  // 3. 현재 적용 상태
  currentStatus: [
    {
      icon: '✨',
      label: '처리 상태',
      detail: '현장 점검 단계',
      value: '품질 분석 중',
    },
    {
      icon: '🛡️',
      label: '티켓 번호',
      detail: '', // 없는 경우 빈 문자열
      value: 'NET-77531',
    },
    {
      icon: '📱',
      label: '기기 정보',
      detail: '단말 모델',
      value: 'ios 최신',
    },
    {
      icon: '📶',
      label: '임시 설정 LTE 고정',
      detail: '4G 우선',
      value: '적용 완료',
    },
  ],

  // 4. 필수 확인 및 주의사항
  notices: [
    {
      id: 1,
      title: '피크 타임: ',
      text: '저녁 {19:00~22:00} 혼잡 시간대에는 속도 저하가 발생할 수 있습니다.',
    },
    {
      id: 2,
      title: '재측정: ',
      text: '설정 변경 후 {5~10}분 뒤 개선 여부를 다시 확인해 주세요.',
    },
    {
      id: 3,
      title: '추가 제보:',
      text: ' 통화 끊김(콜드랍) 발생 시 더 정밀한 분석이 가능합니다.',
    },
  ],

  // 5. 다음 단계 안내
  nextActions: [
    '📩 문자로 전송된 상세 조치 가이드 및 티켓 정보 확인',
    '📞 현장팀 분석 완료 후 담당 상담사의 안내 전화(콜백) 대기',
  ],

  // 6. 이용 가이드 / 제시안 / 꿀팁
  guides: {
    title: '📍 단말기 임시 개선 조치 순서',
    steps: [
      '설정에서 LTE 고정(4G 우선)으로 전환',
      'VoLTE 및 Wi-Fi 통화 기능 ON(활성화)',
      '백그라운드 데이터 제한 및 데이터 절약 모드 적용',
      '단말기 전원 재부팅 후 재측정',
    ],
  },

  proposals: {
    title: '제시안',
    items: ['그냥 샘플 데이터입니다.'],
  },

  tips: {
    title: '꿀팁',
    steps: [
      'Wi-Fi 우선 사용 권장: 데이터 속도가 불안정한 실내 장소에서는 가급적 Wi-Fi를 우선 연결하여 사용하시는 것을 추천드립니다.',
      '신뢰할 수 있는 AP 활용: 보안이 확인된 신뢰할 수 있는 AP를 연결하면 훨씬 안정적인 통신 환경을 이용하실 수 있습니다.',
    ],
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
  const summaryData = location.state?.summaryData || MOCK_SUMMARY_DATA;

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

        <motion.section className={s.contentSection} variants={itemVariants}>
          <SummaryResultCard
            category={summaryData.category}
            summary={summaryData.summary}
            coreActions={summaryData.coreActions}
          />
        </motion.section>

        <motion.section className={s.contentSection} variants={itemVariants}>
          <StatusCard currentStatus={summaryData.currentStatus} />
        </motion.section>

        <motion.section className={s.contentSection} variants={itemVariants}>
          <WarningCard notices={summaryData.notices} />
        </motion.section>

        <motion.section className={s.contentSection} variants={itemVariants}>
          <NextActionCard nextActions={summaryData.nextActions} />
        </motion.section>

        <motion.section className={s.contentSection} variants={itemVariants}>
          {/* <Accordion type="guide" data={MOCK_SUMMARY_DATA.guides} />
          <Accordion type="tip" data={MOCK_SUMMARY_DATA.tips} />
          <Accordion type="proposal" data={MOCK_SUMMARY_DATA.proposals} /> */}

          {summaryData?.guides && <GuideChecklist data={summaryData.guides} />}
          {summaryData?.tips && <CompactTipBox data={summaryData.tips} />}
          {summaryData?.guides && (
            <ProposalHighlight data={summaryData.proposals} />
          )}
        </motion.section>

        <BackButton targetPath="/chat" label="채팅 화면으로 돌아가기" />
      </motion.div>

      {/* 4. 네비게이션 */}
      <BottomNav />
    </Layout>
  );
};

export default SummaryPage;
