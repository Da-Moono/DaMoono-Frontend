import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { useEffect, useMemo, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useNavigate, useParams } from 'react-router';
import BottomNav from '@/components/BottomNav';
import Header from '@/components/Header';
import { getAuthStatus } from '@/services/authApi';
import { getPlans } from '@/services/planApi';
import { PAGE_PATHS } from '@/shared/config/paths';
import Layout from '../layout/Layout';
import { MOCK_PLANS, OTT_IMAGES, OTT_LABELS } from './constants';
import * as styles from './style/PlanDetail.css';
import type { Plan } from './types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export default function PlanDetail() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const planId = id ? parseInt(id, 10) : null;
  const [plans, setPlans] = useState<Plan[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const plan = planId ? plans.find((p) => p.id === planId) : null;
  const [isFlipped, setIsFlipped] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showLoginRequiredModal, setShowLoginRequiredModal] = useState(false);

  // API에서 요금제 목록 가져오기
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setIsLoading(true);
        const fetchedPlans = await getPlans();
        setPlans(fetchedPlans);
      } catch (err) {
        console.error('요금제 목록을 가져오는 중 오류 발생:', err);
        // 에러 발생 시 목데이터 사용
        setPlans(MOCK_PLANS);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlans();
  }, []);

  // 차트 데이터 계산 (0-100 점수로 정규화)
  const chartData = useMemo(() => {
    if (!plan || plans.length === 0) {
      return {
        labels: ['가격', '데이터', '음성통화', '문자', '속도'],
        datasets: [
          {
            label: '점수',
            data: [0, 0, 0, 0, 0],
            backgroundColor: '#FBE88A',
          },
        ],
      };
    }

    const { price, dataAmountMb, voiceMinutes, smsIncluded, overageSpeedMbps } =
      plan;

    // 최대값 계산
    const maxPrice = Math.max(...plans.map((p) => p.price));
    const maxData = Math.max(
      ...plans.map((p) => (p.dataAmountMb === 0 ? 200000 : p.dataAmountMb)),
    );
    const maxVoice = Math.max(
      ...plans.map((p) => (p.voiceMinutes === -1 ? 2000 : p.voiceMinutes)),
    );
    const maxSms = Math.max(...plans.map((p) => p.smsIncluded));
    const maxSpeed = Math.max(...plans.map((p) => p.overageSpeedMbps ?? 0));

    // 점수 계산 (0-100)
    const priceScore =
      price > 0 ? Math.round(((maxPrice - price) / maxPrice) * 100) : 0; // 낮을수록 좋음
    const dataScore =
      dataAmountMb === 0 ? 100 : Math.round((dataAmountMb / maxData) * 100);
    const voiceScore =
      voiceMinutes === -1 ? 100 : Math.round((voiceMinutes / maxVoice) * 100);
    const smsScore = Math.round((smsIncluded / maxSms) * 100);
    const speedScore = overageSpeedMbps
      ? Math.round((overageSpeedMbps / maxSpeed) * 100)
      : 0;

    return {
      labels: ['가격', '데이터', '음성통화', '문자', '속도'],
      datasets: [
        {
          label: '점수',
          data: [priceScore, dataScore, voiceScore, smsScore, speedScore],
          backgroundColor: '#FBE88A',
        },
      ],
    };
  }, [plan, plans]);

  const chartOptions = {
    indexAxis: 'y' as const,
    scales: {
      x: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  if (isLoading) {
    return (
      <Layout>
        <Header />
        <div className={styles.container}>
          <div className={styles.loadingMessage}>
            요금제 정보를 불러오는 중...
          </div>
        </div>
        <BottomNav />
      </Layout>
    );
  }

  if (!plan) {
    return (
      <Layout>
        <Header />
        <div className={styles.container}>
          <div className={styles.errorMessage}>요금제를 찾을 수 없습니다.</div>
          <button
            type="button"
            className={styles.backButton}
            onClick={() => navigate(PAGE_PATHS.PLAN)}
          >
            목록으로 돌아가기
          </button>
        </div>
        <BottomNav />
      </Layout>
    );
  }

  const {
    name,
    price,
    dataAmountMb,
    voiceMinutes,
    smsIncluded,
    overageSpeedMbps,
    networkType,
    subscriptionServices,
  } = plan;

  return (
    <Layout>
      <Header />

      <div className={styles.container}>
        <div className={styles.header}>
          <button
            type="button"
            className={styles.backButton}
            onClick={() => navigate(PAGE_PATHS.PLAN)}
          >
            ← 목록가기
          </button>
          <h1 className={styles.title}>요금제 상세</h1>
        </div>

        <button
          type="button"
          className={styles.cardContainer}
          onClick={() => setIsFlipped(!isFlipped)}
          aria-label="카드 뒤집기"
        >
          {/* 앞면 */}
          <div
            className={styles.card}
            style={{
              transform: isFlipped ? 'rotateY(-180deg)' : 'rotateY(0deg)',
            }}
          >
            <div className={styles.cardHeader}>
              <span className={styles.provider}>LG U+</span>
              <span className={styles.price}>
                월 {price.toLocaleString()}원
              </span>
            </div>

            <h2 className={styles.planName}>{name}</h2>

            {/* 네트워크 타입 */}
            <div className={styles.section}>
              <div className={styles.sectionTitle}>네트워크</div>
              <div className={styles.badge}>{networkType}</div>
            </div>

            {/* 데이터 */}
            <div className={styles.section}>
              <div className={styles.sectionTitle}>데이터</div>
              <div className={styles.value}>
                {dataAmountMb === 0
                  ? '무제한'
                  : `${(dataAmountMb / 1024).toFixed(1)}GB`}
              </div>
              {dataAmountMb !== 0 && overageSpeedMbps && (
                <div className={styles.subValue}>
                  초과 시 속도: {overageSpeedMbps}Mbps
                </div>
              )}
            </div>

            {/* 음성통화 */}
            <div className={styles.section}>
              <div className={styles.sectionTitle}>음성통화</div>
              <div className={styles.value}>
                {voiceMinutes === -1 ? '무제한' : `${voiceMinutes}분`}
              </div>
            </div>

            {/* 문자 */}
            <div className={styles.section}>
              <div className={styles.sectionTitle}>문자</div>
              <div className={styles.value}>{smsIncluded}건</div>
            </div>

            {/* OTT 서비스 부분*/}
            {subscriptionServices && subscriptionServices.length > 0 && (
              <div className={styles.section}>
                <div className={styles.sectionTitle}>OTT 혜택</div>
                <div
                  className={styles.ottList}
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                    marginTop: '8px',
                  }}
                >
                  {subscriptionServices.map((service) => (
                    <div
                      key={service}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                      title={OTT_LABELS[service]}
                    >
                      <img
                        src={OTT_IMAGES[service]}
                        alt={OTT_LABELS[service]}
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          border: '1px solid #f0f0f0',
                        }}
                      />
                      <span style={{ fontSize: '14px', fontWeight: 500 }}>
                        {OTT_LABELS[service]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 그래프 보기 힌트 */}
            <div className={styles.flipHint}>그래프 보기 click!!</div>
          </div>

          {/* 뒷면 (차트) */}
          <div
            className={styles.cardBack}
            style={{
              transform: isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)',
            }}
          >
            <h2 className={styles.planName}>{name} 비교</h2>
            <div className={styles.chartContainer}>
              <Bar data={chartData} options={chartOptions} />
            </div>
            <div className={styles.flipHint}>카드를 클릭하여 뒤집기</div>
          </div>
        </button>

        {/* 신청 버튼 */}
        <button
          type="button"
          className={styles.applyButton}
          onClick={() => setShowConfirmModal(true)}
        >
          이 요금제 신청하기
        </button>

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
                이 요금제로 신청하시겠습니까?
              </h3>
              <div className={styles.modalButtons}>
                <button
                  type="button"
                  className={styles.modalConfirmButton}
                  onClick={async () => {
                    // 로그인 상태 확인
                    try {
                      await getAuthStatus();
                      // 로그인 상태: localStorage에 현재 사용중인 요금제 저장
                      localStorage.setItem('currentPlanId', plan.id.toString());
                      // Plan 페이지로 이동 (성공 모달 표시 신호 전달)
                      navigate(PAGE_PATHS.PLAN, {
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
