import { useEffect, useState } from 'react';
import BottomNav from '../../components/BottomNav';
import BridgeModal from '../Customer/BridgeModal.tsx';
import Layout from '../layout/Layout';
import * as S from './style/MinorGuide.css.ts';

export default function MinorGuide() {
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
          <span className={S.headerTitle}>미성년자 가입 구비 서류</span>
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

        {/* 구비 서류 카드 리스트 */}
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
              e.stopPropagation(); // 카드 체크 이벤트 전파 방지
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
