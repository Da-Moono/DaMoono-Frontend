import { useState } from 'react';
import BottomNav from '../../components/BottomNav';
import BridgeModal from '../Customer/BridgeModal.tsx';
import Layout from '../layout/Layout';
import * as S from './style/MinorGuide.css.ts';

export default function MinorGuide() {
  const [checkedList, setCheckedList] = useState([false, false, false]);
  const [targetUrl, setTargetUrl] = useState<string | null>(null);

  // 체크박스 토글 함수
  const handleCheck = (index: number) => {
    const newCheckedList = [...checkedList];
    newCheckedList[index] = !newCheckedList[index];
    setCheckedList(newCheckedList);
  };

  // 진행률 계산 로직
  const checkedCount = checkedList.filter(Boolean).length;
  const progressPercent = Math.round((checkedCount / 3) * 100);

  return (
    <Layout>
      {/* 1. 전체 스크롤 영역 */}
      <div className={S.scrollArea}>
        {/* 2. 상단 로고 (반응형 clamp 적용) */}
        <div className={S.topLogo} />

        {/* 3. 헤더 타이틀 프레임 */}
        <div className={S.headerFrame}>
          <span className={S.headerTitle}>미성년자 가입 구비 서류</span>
        </div>

        {/* 4. 타이틀 & 캐릭터 가로 배치 (반응형 핵심) */}
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
            {/* 게이지 바 애니메이션 적용 */}
            <div
              className={S.progressGauge}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className={S.percentText}>{progressPercent} %</div>
        </div>

        {/* 7. 문서 카드 리스트 (인라인 top을 제거하여 자동 간격 유지) */}
        <button
          type="button"
          className={S.documentCard}
          onClick={() => handleCheck(0)}
        >
          <div className={S.docText}>
            {checkedList[0] ? '☑ ' : '☐ '}법정 대리인 신분증 (원본)
            <br />
            <span className={S.docSubText}>
              부모님 또는 기본증명서상 기재된 보호자
            </span>
          </div>
        </button>

        <button
          type="button"
          className={S.documentCard}
          onClick={() => handleCheck(1)}
        >
          <div className={S.docText}>
            {checkedList[1] ? '☑ ' : '☐ '}가족관계증명서 또는 주민등록등본
            <br />
            <span className={S.docSubText}>
              관계 확인용 (발급일로부터 3개월 이내)
            </span>
          </div>
          <button
            type="button"
            className={S.linkButton}
            onClick={(e) => {
              e.stopPropagation(); // 카드 체크 방지
              setTargetUrl('https://www.gov.kr');
            }}
          >
            [ 정부 24 바로가기 ] →
          </button>
        </button>

        <button
          type="button"
          className={S.documentCard}
          onClick={() => handleCheck(2)}
        >
          <div className={S.docText}>
            {checkedList[2] ? '☑ ' : '☐ '}법정대리인 동의서 (인감/서명)
            <br />
            <span className={S.docSubText}>
              홈페이지 출력 또는 매장 비치용 양식
            </span>
          </div>
          <button
            type="button"
            className={S.linkButton}
            onClick={(e) => {
              e.stopPropagation();
              setTargetUrl(
                'https://www.uplusumobile.com/support/cs/docFormDownload',
              );
            }}
          >
            [ 동의서 양식 보기 ] →
          </button>
        </button>
      </div>

      {/* 8. 하단 주의사항 (CSS에서 fixed 처리) */}
      <div className={S.warningBox}>
        <span className={S.warningText}>
          ※ 모든 서류는 발급일로부터 3개월 이내여야 합니다.
        </span>
      </div>

      {targetUrl && (
        <BridgeModal url={targetUrl} onClose={() => setTargetUrl(null)} />
      )}

      <BottomNav />
    </Layout>
  );
}
