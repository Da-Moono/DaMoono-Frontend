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
          window.open(url, '_blank');
          onClose();
          return 100;
        }
        return prev + 1;
      });
    }, 40); // 약 4초간 진행

    return () => clearInterval(timer);
  }, [url, onClose]);

  return (
    <div className={S.overlay}>
      <div className={S.modalFrame}>
        <div className={S.characterImage} />

        <h2 className={S.title}>
          잠시 후 해당 페이지로
          <br />
          이동합니다
        </h2>

        <div className={S.progressContainer}>
          {/* 게이지 바: width만 상태값으로 주입 */}
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

        <div className={S.buttonGroup}>
          <button
            type="button"
            className={S.actionButton}
            onClick={() => {
              window.open(url, '_blank');
              onClose();
            }}
          >
            [ 지금이동 ]
          </button>

          <button
            type="button"
            className={S.actionButton}
            style={{ color: '#666666' }}
            onClick={onClose}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
}
