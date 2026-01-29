import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import BottomNav from '@/components/BottomNav';
import Header from '@/components/Header';
import { getAuthStatus } from '@/services/authApi';
import { PAGE_PATHS } from '@/shared/config/paths';
import Layout from '../layout/Layout';
import { CATEGORY_LABELS, MOCK_SUBSCRIBES } from './constants';
import * as styles from './style/SubscribeDetail.css';

export default function SubscribeDetail() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const subscribeId = id ? parseInt(id, 10) : null;
  const subscribe = subscribeId
    ? MOCK_SUBSCRIBES.find((s) => s.id === subscribeId)
    : null;
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showLoginRequiredModal, setShowLoginRequiredModal] = useState(false);

  if (!subscribe) {
    return (
      <Layout>
        <Header />
        <div className={styles.container}>
          <div className={styles.errorMessage}>
            구독 서비스를 찾을 수 없습니다.
          </div>
          <button
            type="button"
            className={styles.backButton}
            onClick={() => navigate(PAGE_PATHS.SUBSCRIBE)}
          >
            목록으로 돌아가기
          </button>
        </div>
        <BottomNav />
      </Layout>
    );
  }

  const { name, price, monthlyPrice, category, benefits, description, badges } =
    subscribe;

  return (
    <Layout>
      <Header />

      <div className={styles.container}>
        <div className={styles.header}>
          <button
            type="button"
            className={styles.backButton}
            onClick={() => navigate(PAGE_PATHS.SUBSCRIBE)}
          >
            ← 목록가기
          </button>
          <h1 className={styles.title}>구독 서비스 상세</h1>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.category}>{CATEGORY_LABELS[category]}</span>
            <span className={styles.price}>
              월 {monthlyPrice.toLocaleString()}원
            </span>
          </div>

          <h2 className={styles.subscribeName}>{name}</h2>

          {/* 배지 */}
          {badges.length > 0 && (
            <div className={styles.badgeContainer}>
              {badges.map((badge) => (
                <span key={badge} className={styles.badge}>
                  {badge}
                </span>
              ))}
            </div>
          )}

          {/* 설명 */}
          <div className={styles.section}>
            <div className={styles.sectionTitle}>서비스 소개</div>
            <div className={styles.description}>{description}</div>
          </div>

          {/* 가격 정보 */}
          <div className={styles.section}>
            <div className={styles.sectionTitle}>가격 정보</div>
            <div className={styles.value}>
              월 {monthlyPrice.toLocaleString()}원
            </div>
            <div className={styles.subValue}>
              연간 {price.toLocaleString()}원
            </div>
          </div>

          {/* 카테고리 */}
          <div className={styles.section}>
            <div className={styles.sectionTitle}>카테고리</div>
            <div className={styles.badge}>{CATEGORY_LABELS[category]}</div>
          </div>

          {/* 혜택 */}
          {benefits.length > 0 && (
            <div className={styles.section}>
              <div className={styles.sectionTitle}>주요 혜택</div>
              <div className={styles.benefitsList}>
                {benefits.map((benefit) => (
                  <div key={benefit} className={styles.benefitItem}>
                    • {benefit}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 신청 버튼 */}
          <button
            type="button"
            className={styles.applyButton}
            onClick={() => setShowConfirmModal(true)}
          >
            이 구독 서비스 신청하기
          </button>
        </div>

        {/* 확인 모달 */}
        {showConfirmModal && (
          <button
            type="button"
            className={styles.modalOverlay}
            onClick={() => setShowConfirmModal(false)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                setShowConfirmModal(false);
              }
            }}
            aria-label="모달 닫기"
          >
            <div
              className={styles.modalContent}
              role="dialog"
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
            >
              <h3 className={styles.modalTitle}>
                이 구독 서비스로 신청하시겠습니까?
              </h3>
              <div className={styles.modalButtons}>
                <button
                  type="button"
                  className={styles.modalConfirmButton}
                  onClick={async () => {
                    // 로그인 상태 확인
                    try {
                      await getAuthStatus();
                      // 로그인 상태: localStorage에 현재 사용중인 구독 저장
                      localStorage.setItem(
                        'currentSubscribeId',
                        subscribe.id.toString(),
                      );
                      // Subscribe 페이지로 이동 (성공 모달 표시 신호 전달)
                      navigate(PAGE_PATHS.SUBSCRIBE, {
                        state: { showSuccessModal: true },
                      });
                    } catch {
                      // 비로그인 상태: 로그인 필요 모달 표시
                      setShowConfirmModal(false);
                      setShowLoginRequiredModal(true);
                    }
                  }}
                >
                  확인
                </button>
                <button
                  type="button"
                  className={styles.modalCancelButton}
                  onClick={() => setShowConfirmModal(false)}
                >
                  취소
                </button>
              </div>
            </div>
          </button>
        )}

        {/* 로그인 필요 모달 */}
        {showLoginRequiredModal && (
          <button
            type="button"
            className={styles.modalOverlay}
            onClick={() => setShowLoginRequiredModal(false)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                setShowLoginRequiredModal(false);
              }
            }}
            aria-label="모달 닫기"
          >
            <div
              className={styles.modalContent}
              role="dialog"
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
            >
              <h3 className={styles.modalTitle}>로그인이 필요합니다.</h3>
              <div className={styles.modalButtons}>
                <button
                  type="button"
                  className={styles.modalConfirmButton}
                  onClick={() => {
                    navigate(PAGE_PATHS.LOGIN_FORM);
                  }}
                >
                  확인
                </button>
                <button
                  type="button"
                  className={styles.modalCancelButton}
                  onClick={() => setShowLoginRequiredModal(false)}
                >
                  취소
                </button>
              </div>
            </div>
          </button>
        )}
      </div>

      {!showConfirmModal && !showLoginRequiredModal && <BottomNav />}
    </Layout>
  );
}
