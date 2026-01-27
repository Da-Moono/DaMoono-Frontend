import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/BottomNav';
import { PAGE_PATHS } from '../../shared/config/paths';
import BridgeModal from '../Customer/BridgeModal.tsx';
import Layout from '../layout/Layout';
import * as S from './style/ProxyGuide.css';

export default function ProxyGuide() {
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
          <span className={S.headerTitle}>대리인 신청 시 구비 서류</span>
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

        {/* 1. 명의자 본인 신분증 */}
        <button
          type="button"
          className={S.documentCard}
          style={{ top: '310px' }}
          onClick={() => handleCheck(0)}
        >
          <p className={S.docText}>
            {checkedList[0] ? '☑ ' : '☐ '}명의자 본인의 신분증 (원본)
            <br />
            <span className={S.docSubText}>
              주민등록증, 운전면허증, 여권 등
            </span>
          </p>
        </button>

        {/* 2. 방문 대리인 신분증 */}
        <button
          type="button"
          className={S.documentCard}
          style={{ top: '480px' }}
          onClick={() => handleCheck(1)}
        >
          <p className={S.docText}>
            {checkedList[1] ? '☑ ' : '☐ '}방문 대리인의 신분증 (원본)
            <br />
            <span className={S.docSubText}>
              실제 매장을 방문하시는 분의 신분증
            </span>
          </p>
        </button>

        {/* 3. 법인/기타 구비 서류 */}
        <button
          type="button"
          className={S.documentCard}
          style={{ top: '650px' }}
          onClick={() => handleCheck(2)}
        >
          <p className={S.docText}>
            {checkedList[2] ? '☑ ' : '☐ '}법인 대리인 가입 필수 서류
            <br />
            <span className={S.docSubText}>
              위임장, 법인 인감증명서, 사업자등록증 사본 등
            </span>
          </p>
          <button
            type="button"
            className={S.linkButton}
            onClick={(e) => {
              e.stopPropagation();
              setTargetUrl('https://www.hometax.go.kr');
            }}
          >
            [ 홈택스 바로가기 ] →
          </button>
        </button>
      </div>

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
