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
          // 브라우저 팝업 차단 방지를 위해 보통은 사용자 액션이 필요하지만,
          // 요구사항에 맞춰 100% 도달 시 새 탭 이동 처리
          window.open(url, '_blank');
          onClose();
          return 100;
        }
        return prev + 1;
      });
    }, 40); // 40ms * 100 = 약 4초

    return () => clearInterval(timer);
  }, [url, onClose]);

  return (
    <div className={S.overlay}>
      <div className={S.modalFrame}>
        {/* CSS clamp로 크기가 조절되는 캐릭터 이미지 */}
        <div className={S.characterImage} />

        <h2 className={S.title}>
          잠시 후 해당 페이지로
          <br />
          이동합니다
        </h2>

        {/* 프로그레스 바 영역 */}
        <div className={S.progressContainer}>
          {/* 노란색 게이지: 인라인 스타일은 width만 남기고 나머지는 CSS로 위임 */}
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
              window.open(url, '_blank');
              onClose();
            }}
          >
            [ 지금이동 ]
          </button>

          <button
            type="button"
            className={S.actionButton}
            style={{ color: '#666' }}
            onClick={onClose}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
}
