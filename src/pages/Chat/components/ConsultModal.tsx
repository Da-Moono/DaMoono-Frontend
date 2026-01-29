import connectMoono from '@/assets/images/search-moono.png';
import talkMoono from '@/assets/images/talk-moono.png';
import * as styles from '../style/ConsultModal.css';

type ModalType = 'connecting' | 'endConsult' | 'summary' | 'summarizing';

interface ConsultModalProps {
  type: ModalType;
  isOpen: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
}

export default function ConsultModal({
  type,
  isOpen,
  onClose,
  onConfirm,
}: ConsultModalProps) {
  if (!isOpen) return null;

  const renderContent = () => {
    switch (type) {
      case 'connecting':
        return (
          <>
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className={styles.closeButton}
                aria-label="닫기"
              >
                ✕
              </button>
            )}
            <div className={styles.modalContent}>
              <img
                src={connectMoono}
                alt="연결 중"
                className={styles.modalImage}
              />
              <h2 className={styles.modalTitle}>
                실시간 상담사 연결 중 입니다
                <br />
                잠시만 기다려주세요
              </h2>
              <p className={styles.modalSubtext}>평균 소요시간 5분 내외</p>
            </div>
          </>
        );

      case 'endConsult':
        return (
          <div className={styles.modalContent}>
            <img
              src={talkMoono}
              alt="상담 종료"
              className={styles.modalImage}
            />
            <h2 className={styles.modalTitle}>상담을 종료하시나요?</h2>
            <p className={styles.modalDescription}>
              마이페이지에서 상담내역 확인과
              <br />
              상담 재요약을 진행할 수 있습니다
            </p>
            <div className={styles.buttonGroup}>
              <button
                type="button"
                onClick={onConfirm}
                className={styles.confirmButton}
              >
                종료
              </button>
              <button
                type="button"
                onClick={onClose}
                className={styles.backButton}
              >
                돌아가기
              </button>
            </div>
          </div>
        );

      case 'summary':
        return (
          <div className={styles.modalContent}>
            <img src={talkMoono} alt="요약하기" className={styles.modalImage} />
            <h2 className={styles.modalTitle}>요약을 원하시나요?</h2>
            <p className={styles.modalDescription}>
              요약 진행 시, 상담이 종료되며
              <br />
              상담 기록은 마이페이지에서 확인 가능합니다
            </p>
            <div className={styles.buttonGroup}>
              <button
                type="button"
                onClick={onConfirm}
                className={styles.confirmButton}
              >
                요약
              </button>
              <button
                type="button"
                onClick={onClose}
                className={styles.backButton}
              >
                돌아가기
              </button>
            </div>
          </div>
        );

      case 'summarizing':
        return (
          <div className={styles.modalContent}>
            <div className={styles.spinner} />
            <h2 className={styles.modalTitle}>
              상담 내용 요약 중입니다
              <br />
              잠시만 기다려주세요
            </h2>
            <p className={styles.modalSubtext}>평균 소요시간 3분 내외</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: 모달 오버레이는 키보드 이벤트 포함
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === 'Escape' && onClose) {
          onClose();
        }
      }}
      role="presentation"
    >
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        role="dialog"
        tabIndex={-1}
      >
        {renderContent()}
      </div>
    </div>
  );
}
