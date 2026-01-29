import { useState } from 'react';
import BottomNav from '../../components/BottomNav';
import BridgeModal from '../Customer/BridgeModal.tsx';
import Layout from '../layout/Layout';
import * as S from './style/ArmyGuide.css';

export default function ArmyGuide() {
  const [checkedList, setCheckedList] = useState([false, false, false]);
  const [targetUrl, setTargetUrl] = useState<string | null>(null);

  const handleCheck = (index: number) => {
    const newCheckedList = [...checkedList];
    newCheckedList[index] = !newCheckedList[index];
    setCheckedList(newCheckedList);
  };

  const checkedCount = checkedList.filter(Boolean).length;
  const progressPercent = Math.round((checkedCount / 3) * 100);

  return (
    <Layout>
      {/* 전체 스크롤 영역 */}
      <div className={S.scrollArea}>
        {/* 1. 상단 로고 (반응형 적용됨) */}
        <div className={S.topLogo} />

        {/* 2. 헤더 타이틀 프레임 */}
        <div className={S.headerFrame}>
          <span className={S.headerTitle}>군인 요금제 및 군인 혜택 가입</span>
        </div>

        {/* 3. 서브 타이틀 & 캐릭터 가로 배치 컨테이너 */}
        <div className={S.titleContainer}>
          <h2 className={S.subTitle}>
            다무너와 함께
            <br />
            서류를 챙겨보세요
          </h2>
          {/* 캐릭터 이미지 (clamp 적용으로 자동 크기 조절) */}
          <div className={S.characterImage} />
        </div>

        {/* 4. 준비 현황 텍스트 */}
        <div className={S.statusText}>준비 현황 ({checkedCount} / 3)</div>

        {/* 5. 프로그레스 바 + 퍼센트 가로 배치 컨테이너 */}
        <div className={S.progressWrapper}>
          <div className={S.progressBarContainer}>
            {/* 게이지 바: width만 상태값으로 조절 */}
            <div
              className={S.progressGauge}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className={S.percentText}>{progressPercent} %</div>
        </div>

        {/* 6. 문서 카드 리스트 (Flex 흐름으로 자동 배치 및 스크롤 생성) */}
        <button
          type="button"
          className={S.documentCard}
          onClick={() => handleCheck(0)}
        >
          <div className={S.docText}>
            {checkedList[0] ? '☑ ' : '☐ '}신분증 원본 (본인)
            <br />
            <span className={S.docSubText}>
              주민등록증, 운전면허증, 여권 등
            </span>
          </div>
        </button>

        <button
          type="button"
          className={S.documentCard}
          onClick={() => handleCheck(1)}
        >
          <div className={S.docText}>
            {checkedList[1] ? '☑ ' : '☐ '}입영 사실 확인서
            <br />
            <span className={S.docSubText}>입영 통지서, 선발통지서 등</span>
          </div>
          <button
            type="button"
            className={S.linkButton}
            onClick={(e) => {
              e.stopPropagation();
              setTargetUrl('https://www.mma.go.kr');
            }}
          >
            [ 병무청 바로가기 ] →
          </button>
        </button>

        <button
          type="button"
          className={S.documentCard}
          onClick={() => handleCheck(2)}
        >
          <div className={S.docText}>
            {checkedList[2] ? '☑ ' : '☐ '}병적 증명서 ( 해당 시 )<br />
            <span className={S.docSubText}>군 경력 확인이 필요한 경우</span>
          </div>
          <button
            type="button"
            className={S.linkButton}
            onClick={(e) => {
              e.stopPropagation();
              setTargetUrl('https://www.gov.kr');
            }}
          >
            [ 정부 24 바로가기 ] →
          </button>
        </button>
      </div>

      {/* 7. 하단 주의사항 (화면 하단 고정) */}
      <div className={S.warningBox}>
        <span className={S.warningText}>
          ※ 주의 사항 : 모든 서류는 발급일로부터 3개월 이내여야 합니다.
        </span>
      </div>

      {/* 외부 링크 연결 모달 */}
      {targetUrl && (
        <BridgeModal url={targetUrl} onClose={() => setTargetUrl(null)} />
      )}

      {/* 하단 네비게이션 */}
      <BottomNav />
    </Layout>
  );
}
