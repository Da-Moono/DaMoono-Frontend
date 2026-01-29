import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useLocation, useNavigate } from 'react-router';
import BottomNav from '@/components/BottomNav';
import Header from '@/components/Header';
import { getPlans } from '@/services/planApi';
import { PAGE_PATHS } from '@/shared/config/paths';
import Layout from '../layout/Layout';
import { MOCK_PLANS, OTT_LABELS } from './constants';
import * as styles from './style/PlanCompare.css';
import type { Plan as PlanType } from './types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export default function PlanCompare() {
  const navigate = useNavigate();
  const location = useLocation();
  const { plan1Id, plan2Id } =
    (location.state as { plan1Id?: number; plan2Id?: number }) || {};

  const [plans, setPlans] = useState<PlanType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const plan1 = plan1Id ? (plans.find((p) => p.id === plan1Id) ?? null) : null;
  const plan2 = plan2Id ? (plans.find((p) => p.id === plan2Id) ?? null) : null;

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

  // 차트 데이터 계산 함수
  const calculateChartData = useCallback(
    (plan: PlanType | null) => {
      if (!plan || plans.length === 0) return [0, 0, 0, 0, 0];
      const maxPrice = Math.max(...plans.map((p) => p.price));
      const maxData = Math.max(
        ...plans.map((p) => (p.dataAmountMb === 0 ? 200000 : p.dataAmountMb)),
      );
      const maxVoice = Math.max(
        ...plans.map((p) => (p.voiceMinutes === -1 ? 2000 : p.voiceMinutes)),
      );
      const maxSms = Math.max(...plans.map((p) => p.smsIncluded));
      const maxSpeed = Math.max(...plans.map((p) => p.overageSpeedMbps ?? 0));

      const priceScore =
        plan.price > 0
          ? Math.round(((maxPrice - plan.price) / maxPrice) * 100)
          : 0;
      const dataScore =
        plan.dataAmountMb === 0
          ? 100
          : Math.round((plan.dataAmountMb / maxData) * 100);
      const voiceScore =
        plan.voiceMinutes === -1
          ? 100
          : Math.round((plan.voiceMinutes / maxVoice) * 100);
      const smsScore = Math.round((plan.smsIncluded / maxSms) * 100);
      const speedScore = plan.overageSpeedMbps
        ? Math.round((plan.overageSpeedMbps / maxSpeed) * 100)
        : 0;

      return [priceScore, dataScore, voiceScore, smsScore, speedScore];
    },
    [plans],
  );

  const plan1Scores = useMemo(
    () => calculateChartData(plan1),
    [plan1, calculateChartData],
  );
  const plan2Scores = useMemo(
    () => calculateChartData(plan2),
    [plan2, calculateChartData],
  );

  const chartData = useMemo(
    () => ({
      labels: ['가격', '데이터', '음성통화', '문자', '속도'],
      datasets: [
        {
          label: plan1?.name ?? '',
          data: plan1Scores,
          backgroundColor: '#FBE88A',
        },
        {
          label: plan2?.name ?? '',
          data: plan2Scores,
          backgroundColor: '#E91685',
        },
      ],
    }),
    [plan1?.name, plan2?.name, plan1Scores, plan2Scores],
  );

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
        display: true,
        position: 'top' as const,
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

  if (!plan1 || !plan2) {
    return (
      <Layout>
        <Header />
        <div className={styles.container}>
          <div className={styles.errorMessage}>
            비교할 요금제를 선택해주세요.
          </div>
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
          <h1 className={styles.title}>요금제 비교</h1>
        </div>

        {/* 요금제 카드들 */}
        <div className={styles.cardsContainer}>
          {/* 요금제 1 */}
          <div className={styles.planCard}>
            <div className={styles.cardHeader}>
              <span className={styles.provider}>LG U+</span>
              <span className={styles.price}>
                월 {plan1.price.toLocaleString()}원
              </span>
            </div>
            <h2 className={styles.planName}>{plan1.name}</h2>
            <div className={styles.badge}>{plan1.networkType}</div>
            <div className={styles.details}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>데이터:</span>
                <span className={styles.detailValue}>
                  {plan1.dataAmountMb === 0
                    ? '무제한'
                    : `${(plan1.dataAmountMb / 1024).toFixed(1)}GB`}
                </span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>음성통화:</span>
                <span className={styles.detailValue}>
                  {plan1.voiceMinutes === -1
                    ? '무제한'
                    : `${plan1.voiceMinutes}분`}
                </span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>문자:</span>
                <span className={styles.detailValue}>
                  {plan1.smsIncluded}건
                </span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>속도:</span>
                <span className={styles.detailValue}>
                  {plan1.overageSpeedMbps ?? 0}Mbps
                </span>
              </div>
              {plan1.subscriptionServices &&
                plan1.subscriptionServices.length > 0 && (
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>OTT:</span>
                    <span className={styles.detailValue}>
                      {plan1.subscriptionServices
                        .map((s) => OTT_LABELS[s])
                        .join(', ')}
                    </span>
                  </div>
                )}
            </div>
          </div>

          {/* 요금제 2 */}
          <div className={styles.planCard}>
            <div className={styles.cardHeader}>
              <span className={styles.provider}>LG U+</span>
              <span className={styles.price}>
                월 {plan2.price.toLocaleString()}원
              </span>
            </div>
            <h2 className={styles.planName}>{plan2.name}</h2>
            <div className={styles.badge}>{plan2.networkType}</div>
            <div className={styles.details}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>데이터:</span>
                <span className={styles.detailValue}>
                  {plan2.dataAmountMb === 0
                    ? '무제한'
                    : `${(plan2.dataAmountMb / 1024).toFixed(1)}GB`}
                </span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>음성통화:</span>
                <span className={styles.detailValue}>
                  {plan2.voiceMinutes === -1
                    ? '무제한'
                    : `${plan2.voiceMinutes}분`}
                </span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>문자:</span>
                <span className={styles.detailValue}>
                  {plan2.smsIncluded}건
                </span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>속도:</span>
                <span className={styles.detailValue}>
                  {plan2.overageSpeedMbps ?? 0}Mbps
                </span>
              </div>
              {plan2.subscriptionServices &&
                plan2.subscriptionServices.length > 0 && (
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>OTT:</span>
                    <span className={styles.detailValue}>
                      {plan2.subscriptionServices
                        .map((s) => OTT_LABELS[s])
                        .join(', ')}
                    </span>
                  </div>
                )}
            </div>
          </div>
        </div>

        {/* 비교 차트 */}
        <div className={styles.chartContainer}>
          <h2 className={styles.chartTitle}>요금제 비교</h2>
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>

      <BottomNav />
    </Layout>
  );
}
