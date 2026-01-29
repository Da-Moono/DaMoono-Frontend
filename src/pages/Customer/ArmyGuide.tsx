import { useEffect, useState } from 'react';
import BottomNav from '../../components/BottomNav';
import BridgeModal from '../Customer/BridgeModal.tsx';
import Layout from '../layout/Layout';
import * as S from './style/ArmyGuide.css';

export default function ArmyGuide() {
  const [checkedList, setCheckedList] = useState([false, false, false]);
  const [targetUrl, setTargetUrl] = useState<string | null>(null);

  // 페이지 진입 시 스크롤 위치 초기화 (모바일 스크롤 복원 방지)
  useEffect(() => {
    window.scrollTo(0, 0);
    const scrollContainer = document.querySelector(`.${S.scrollArea}`);
    if (scrollContainer) {
      scrollContainer.scrollTop = 0;
    }
  }, []);

  const handleCheck = (index: number) => {
    const newCheckedList = [...checkedList];
    newCheckedList[index] = !newCheckedList[index];
    setCheckedList(newCheckedList);
  };

  const checkedCount = checkedList.filter(Boolean).length;
  const progressPercent = Math.round((checkedCount / 3) * 100);

  return (
    <Layout>
      <div className={S.scrollArea}>
        <div className={S.topLogo} />

        <div className={S.headerFrame}>
          <span className={S.headerTitle}>군인 요금제 및 군인 혜택 가입</span>
        </div>

        <div className={S.titleContainer}>
          <h2 className={S.subTitle}>
            다무너와 함께
            <br />
            서류를 챙겨보세요
          </h2>
          <div className={S.characterImage} />
        </div>

        <div className={S.statusText}>준비 현황 ({checkedCount} / 3)</div>

        <div className={S.progressWrapper}>
          <div className={S.progressBarContainer}>
            <div
              className={S.progressGauge}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className={S.percentText}>{progressPercent} %</div>
        </div>

        {/* 서류 카드 리스트 */}
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
              e.stopPropagation(); // 카드 체크 이벤트 전파 방지
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

      <div className={S.warningBox}>
        <span className={S.warningText}>
          ※ 주의 사항 : 모든 서류는 발급일로부터 3개월 이내여야 합니다.
        </span>
      </div>

      {targetUrl && (
        <BridgeModal url={targetUrl} onClose={() => setTargetUrl(null)} />
      )}

      <BottomNav />
    </Layout>
  );
}
