import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { useMemo, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useNavigate, useParams } from 'react-router';
import BottomNav from '@/components/BottomNav';
import Header from '@/components/Header';
import { PAGE_PATHS } from '@/shared/config/paths';
import Layout from '../layout/Layout';
import { MOCK_PLANS, OTT_IMAGES, OTT_LABELS } from './constants';
import * as styles from './style/PlanDetail.css';

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
  const plan = planId ? MOCK_PLANS.find((p) => p.id === planId) : null;
  const [isFlipped, setIsFlipped] = useState(false);

  // 차트 데이터 계산 (0-100 점수로 정규화)
  const chartData = useMemo(() => {
    if (!plan) {
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
    const maxPrice = Math.max(...MOCK_PLANS.map((p) => p.price));
    const maxData = Math.max(
      ...MOCK_PLANS.map((p) =>
        p.dataAmountMb === 0 ? 200000 : p.dataAmountMb,
      ),
    );
    const maxVoice = Math.max(
      ...MOCK_PLANS.map((p) => (p.voiceMinutes === -1 ? 2000 : p.voiceMinutes)),
    );
    const maxSms = Math.max(...MOCK_PLANS.map((p) => p.smsIncluded));
    const maxSpeed = Math.max(
      ...MOCK_PLANS.map((p) => p.overageSpeedMbps ?? 0),
    );

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
  }, [plan]);

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
            ← 뒤로가기
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
            {subscriptionServices.length > 0 && (
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
          onClick={() => {
            // localStorage에 현재 사용중인 요금제 저장
            localStorage.setItem('currentPlanId', plan.id.toString());
            // Plan 페이지로 이동
            navigate(PAGE_PATHS.PLAN);
          }}
        >
          이 요금제 신청하기
        </button>
      </div>

      <BottomNav />
    </Layout>
  );
}
