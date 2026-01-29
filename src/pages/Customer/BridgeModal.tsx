import { useEffect, useState } from 'react';
import * as S from './style/BridgeModal.css';

interface BridgeModalProps {
  url: string;
  onClose: () => void;
}

export default function BridgeModal({ url, onClose }: BridgeModalProps) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // 100% 도달 시 새창 열기 및 모달 닫기
          window.open(url, '_blank');
          onClose();
          return 100;
        }
        return prev + 1;
      });
    }, 40); // 40ms * 100 = 약 4초 동안 진행

    return () => clearInterval(timer);
  }, [url, onClose]);

  return (
    <div className={S.overlay}>
      <div className={S.modalFrame}>
        {/* 캐릭터 이미지 (반응형 clamp 적용됨) */}
        <div className={S.characterImage} />

        <h2 className={S.title}>
          잠시 후 해당 페이지로
          <br />
          이동합니다
        </h2>

        {/* 프로그레스 바 영역 */}
        <div className={S.progressContainer}>
          {/* 동적 게이지 바: 배경색과 트랜지션은 CSS로 관리 권장하지만 width는 상태값 주입 */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              height: '100%',
              width: `${percent}%`,
              background: '#FBE88A',
              transition: 'width 0.1s linear',
            }}
          />
          <span className={S.percentText}>{percent}%</span>
        </div>

        <p className={S.waitingText}>잠시만 기다려 주세요.</p>

        {/* 하단 버튼 그룹 */}
        <div className={S.buttonGroup}>
          <button
            type="button"
            className={S.actionButton}
            onClick={() => {
              window.open(url, '_blank'); // 즉시 이동
              onClose();
            }}
          >
            [ 지금이동 ]
          </button>

          <button
            type="button"
            className={S.actionButton}
            style={{ color: '#666666' }} // 취소 버튼 색상 구분
            onClick={onClose}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
}
