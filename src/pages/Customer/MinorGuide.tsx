import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/BottomNav';
import { PAGE_PATHS } from '../../shared/config/paths';
import BridgeModal from '../Customer/BridgeModal.tsx';
import Layout from '../layout/Layout';
import * as S from './style/MinorGuide.css.ts';

export default function MinorGuide() {
  const navigate = useNavigate();
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
      <div className={S.scrollArea}>
        <button
          type="button"
          className={S.topLogo}
          onClick={() => navigate(PAGE_PATHS.HOME)}
          aria-label="홈으로 이동"
          style={{
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            padding: 0,
            display: 'block',
            width: '100%',
          }}
        />

        <div className={S.headerFrame}>
          <span className={S.headerTitle}>미성년자 가입 구비 서류</span>
        </div>
        <h2 className={S.subTitle}>
          다무너와 함께
          <br />
          서류를 챙겨보세요
        </h2>

        <button
          type="button"
          className={S.characterImage}
          onClick={() => navigate(PAGE_PATHS.CUSTOMER_SERVICE)}
          aria-label="고객센터 메인으로 이동"
          style={{
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            padding: 0,
            display: 'block',
            margin: '0 auto',
          }}
        />

        <div className={S.statusText}>준비 현황 ({checkedCount} / 3)</div>
        <div className={S.progressBarContainer}>
          <div
            style={{
              width: `${progressPercent}%`,
              height: '100%',
              backgroundColor: '#FBE88A',
              transition: 'width 0.3s ease-in-out',
            }}
          />
        </div>
        <div className={S.percentText}>{progressPercent} %</div>

        {/* 카드 1 */}
        <button
          type="button"
          className={S.documentCard}
          style={{ top: '310px' }}
          onClick={() => handleCheck(0)}
        >
          <p className={S.docText}>
            {checkedList[0] ? '☑ ' : '☐ '}법정 대리인 신분증 ( 원본 )
            <br />
            <span className={S.docSubText}>
              부모님 또는 기본증명서상 기재된 보호자
            </span>
          </p>
        </button>

        {/* 카드 2 */}
        <button
          type="button"
          className={S.documentCard}
          style={{ top: '480px' }}
          onClick={() => handleCheck(1)}
        >
          <p className={S.docText}>
            {checkedList[1] ? '☑ ' : '☐ '}가족관계증명서 또는 주민등록등본
            <br />
            <span className={S.docSubText}>
              미성년자와 보호자의 관계 확인용 ( 3개월 이내 )
            </span>
          </p>
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

        {/* 카드 3 */}
        <button
          type="button"
          className={S.documentCard}
          style={{ top: '650px', height: '140px' }}
          onClick={() => handleCheck(2)}
        >
          <p className={S.docText}>
            {checkedList[2] ? '☑ ' : '☐ '}법정대리인 동의서 ( 인감 또는 서명 )
            <br />
            <span className={S.docSubText}>
              매장 비치용 양식 또는 홈페이지 출력 가능
            </span>
          </p>
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
