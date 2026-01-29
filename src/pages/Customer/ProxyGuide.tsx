import { useState } from 'react';
import BottomNav from '../../components/BottomNav';
import BridgeModal from '../Customer/BridgeModal.tsx';
import Layout from '../layout/Layout';
import * as S from './style/ProxyGuide.css';

export default function ProxyGuide() {
  const [checkedList, setCheckedList] = useState([false, false, false]);
  const [targetUrl, setTargetUrl] = useState<string | null>(null);

  // 체크박스 상태 토글
  const handleCheck = (index: number) => {
    const newCheckedList = [...checkedList];
    newCheckedList[index] = !newCheckedList[index];
    setCheckedList(newCheckedList);
  };

  // 진행률 계산
  const checkedCount = checkedList.filter(Boolean).length;
  const progressPercent = Math.round((checkedCount / 3) * 100);

  return (
    <Layout>
      {/* 1. 전체 스크롤 영역: CSS에서 콘텐츠를 중앙으로 밀어주는 패딩 적용됨 */}
      <div className={S.scrollArea}>
        {/* 2. 상단 로고 */}
        <div className={S.topLogo} />

        {/* 3. 헤더 프레임 */}
        <div className={S.headerFrame}>
          <span className={S.headerTitle}>대리인 신청 시 구비 서류</span>
        </div>

        {/* 4. 타이틀 & 캐릭터 가로 배치 컨테이너 */}
        <div className={S.titleContainer}>
          <h2 className={S.subTitle}>
            다무너와 함께
            <br />
            서류를 챙겨보세요
          </h2>
          <div className={S.characterImage} />
        </div>

        {/* 5. 준비 현황 텍스트 */}
        <div className={S.statusText}>준비 현황 ({checkedCount} / 3)</div>

        {/* 6. 프로그레스 바 + 퍼센트 가로 배치 */}
        <div className={S.progressWrapper}>
          <div className={S.progressBarContainer}>
            <div
              className={S.progressGauge}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className={S.percentText}>{progressPercent} %</div>
        </div>

        {/* 7. 문서 카드 리스트 (인라인 스타일 top 제거) */}
        <button
          type="button"
          className={S.documentCard}
          onClick={() => handleCheck(0)}
        >
          <div className={S.docText}>
            {checkedList[0] ? '☑ ' : '☐ '}명의자 본인의 신분증 (원본)
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
            {checkedList[1] ? '☑ ' : '☐ '}방문 대리인의 신분증 (원본)
            <br />
            <span className={S.docSubText}>
              실제 매장을 방문하시는 분의 신분증
            </span>
          </div>
        </button>

        <button
          type="button"
          className={S.documentCard}
          onClick={() => handleCheck(2)}
        >
          <div className={S.docText}>
            {checkedList[2] ? '☑ ' : '☐ '}법인 대리인 가입 필수 서류
            <br />
            <span className={S.docSubText}>
              위임장, 법인 인감증명서, 사업자등록증 사본 등
            </span>
          </div>
          <button
            type="button"
            className={S.linkButton}
            onClick={(e) => {
              e.stopPropagation(); // 카드 체크 이벤트 전파 방지
              setTargetUrl('https://www.hometax.go.kr');
            }}
          >
            [ 홈택스 바로가기 ] →
          </button>
        </button>
      </div>

      {/* 8. 하단 고정 요소 */}
      <div className={S.warningBox}>
        <span className={S.warningText}>
          ※ 법인 인감도장을 지참하여 매장 방문 시 위임장/인감증명서는 생략
          가능합니다.
        </span>
      </div>

      {targetUrl && (
        <BridgeModal url={targetUrl} onClose={() => setTargetUrl(null)} />
      )}

      <BottomNav />
    </Layout>
  );
}
