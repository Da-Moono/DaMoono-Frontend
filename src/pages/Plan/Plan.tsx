import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import BottomNav from '@/components/BottomNav';
import Header from '@/components/Header';
import { Loading3D } from '@/components/loading';
import { PAGE_PATHS } from '@/shared/config/paths';
import Layout from '../layout/Layout';
import { MOCK_PLANS, OTT_IMAGES, OTT_LABELS, SORT_LABELS } from './constants';
import * as styles from './style/Plan.css';
import type {
  NetworkType,
  OTTType,
  Plan as PlanType,
  SortTarget,
} from './types';

// 현재 사용 중인 요금제 카드 컴포넌트
interface CurrentPlanCardProps {
  plan: PlanType;
  isSelected: boolean;
  isCompareMode?: boolean;
  isCompareSelected?: boolean;
  onClick?: (plan: PlanType) => void;
}

function CurrentPlanCard({
  plan,
  isSelected,
  isCompareMode = false,
  isCompareSelected = false,
  onClick,
}: CurrentPlanCardProps) {
  const {
    name,
    price,
    dataAmountMb,
    voiceMinutes,
    smsIncluded,
    overageSpeedMbps,
    subscriptionServices,
  } = plan;

  return (
    <button
      type="button"
      onClick={() => onClick?.(plan)}
      className={`${styles.currentPlanCard} ${isSelected ? styles.planCardSelected : ''} ${isCompareMode && isCompareSelected ? styles.planCardCompareSelected : ''}`}
    >
      <div className={styles.planCardHeader}>
        <span className={styles.planProvider}>LG U+</span>
        <span className={styles.planPrice}>월 {price.toLocaleString()}원</span>
      </div>
      <div className={styles.planName} title={name}>
        {name}
      </div>

      <div className={styles.badgeContainer}>
        <span className={`${styles.badge} ${styles.badgeData}`}>
          {dataAmountMb === 0
            ? '무제한'
            : `${(dataAmountMb / 1024).toFixed(1)}GB`}
        </span>
        <span className={`${styles.badge} ${styles.badgeVoice}`}>
          {voiceMinutes === -1 ? '무제한' : `${voiceMinutes}분`}
        </span>
        <span className={`${styles.badge} ${styles.badgeSpeed}`}>
          속도 {overageSpeedMbps ?? 0}Mbps
        </span>
        <span className={`${styles.badge} ${styles.badgeSms}`}>
          혜택 가치 {smsIncluded}
        </span>
      </div>

      {subscriptionServices.length > 0 && (
        <div className={styles.ottContainer}>
          {subscriptionServices.map((service, index) => (
            <div
              key={service}
              className={`${styles.ottCircle} ${index !== 0 ? styles.ottCircleOverlap : ''}`}
              title={OTT_LABELS[service]}
            >
              <img
                src={OTT_IMAGES[service]}
                alt={OTT_LABELS[service]}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
            </div>
          ))}
        </div>
      )}
    </button>
  );
}

// 정렬/필터 패널 컴포넌트
interface SortFilterPanelProps {
  selectedNetwork: NetworkType | null;
  setSelectedNetwork: (network: NetworkType | null) => void;
  sortOrder: 'asc' | 'desc';
  setSortOrder: (order: 'asc' | 'desc') => void;
  sortTarget: SortTarget | null;
  setSortTarget: (target: SortTarget | null) => void;
  selectedOttList: OTTType[];
  setSelectedOttList: (ott: OTTType[]) => void;
}

function SortFilterPanel({
  selectedNetwork,
  setSelectedNetwork,
  sortOrder,
  setSortOrder,
  sortTarget,
  setSortTarget,
  selectedOttList,
  setSelectedOttList,
}: SortFilterPanelProps) {
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  return (
    <div className={styles.filterPanel}>
      <div className={styles.filterControls}>
        <div className={styles.selectWrapper} style={{ width: '85px' }}>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
            className={styles.selectBase}
          >
            <option value="asc">낮은 순</option>
            <option value="desc">높은 순</option>
          </select>
          {/* 에러 수정: role과 aria-label 추가 */}
          <svg
            className={styles.selectIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            role="img"
            aria-label="정렬 순서 선택 메뉴 열기"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        <div className={styles.selectWrapper} style={{ width: '96px' }}>
          <select
            value={sortTarget ?? ''}
            onChange={(e) =>
              setSortTarget(
                e.target.value === '' ? null : (e.target.value as SortTarget),
              )
            }
            className={styles.selectBase}
          >
            <option value="" disabled hidden>
              정렬 기준
            </option>
            {Object.entries(SORT_LABELS).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
          {/* 에러 수정: role과 aria-label 추가 */}
          <svg
            className={styles.selectIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            role="img"
            aria-label="정렬 기준 선택 메뉴 열기"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        <div className={styles.selectWrapper} style={{ width: '80px' }}>
          <button
            onClick={() => setShowFilterMenu(!showFilterMenu)}
            className={styles.selectBase}
          >
            필터링
          </button>
          {/* 에러 수정: role과 aria-label 추가 */}
          <svg
            className={styles.selectIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            role="img"
            aria-label="필터 옵션 열기"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>

          {showFilterMenu && (
            <div className={styles.filterMenu}>
              <div className={styles.filterSection}>
                <div className={styles.filterSectionTitle}>네트워크</div>
                <div className={styles.filterButtons}>
                  {(['LTE', '5G'] as NetworkType[]).map((network) => (
                    <button
                      key={network}
                      className={`${styles.filterButton} ${selectedNetwork === network ? styles.filterButtonActive : ''}`}
                      onClick={() =>
                        setSelectedNetwork(
                          selectedNetwork === network ? null : network,
                        )
                      }
                    >
                      {network}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.filterSection}>
                <div className={styles.filterSectionTitle}>OTT 혜택</div>
                <div className={styles.filterButtons}>
                  {Object.entries(OTT_LABELS).map(([key, label]) => {
                    const ottKey = key as OTTType;
                    const isSelected = selectedOttList.includes(ottKey);
                    return (
                      <button
                        key={key}
                        className={`${styles.filterButton} ${isSelected ? styles.filterButtonActive : ''}`}
                        onClick={() =>
                          setSelectedOttList(
                            isSelected
                              ? selectedOttList.filter((v) => v !== ottKey)
                              : [...selectedOttList, ottKey],
                          )
                        }
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// 요금제 카드 컴포넌트
interface PlanCardProps {
  plan: PlanType;
  isSelected: boolean;
  isCompareMode?: boolean;
  isCompareSelected?: boolean;
  onClick?: (plan: PlanType) => void;
}

function PlanCard({
  plan,
  isSelected,
  isCompareMode = false,
  isCompareSelected = false,
  onClick,
}: PlanCardProps) {
  const {
    name,
    price,
    dataAmountMb,
    voiceMinutes,
    smsIncluded,
    overageSpeedMbps,
    subscriptionServices,
  } = plan;

  return (
    <button
      type="button"
      onClick={() => onClick?.(plan)}
      className={`${styles.planCard} ${isSelected ? styles.planCardSelected : ''} ${isCompareMode && isCompareSelected ? styles.planCardCompareSelected : ''}`}
    >
      <div className={styles.planCardHeader}>
        <span className={styles.planProvider}>LG U+</span>
        <span className={styles.planPrice}>월 {price.toLocaleString()}원</span>
      </div>
      <div className={styles.planName} title={name}>
        {name}
      </div>

      <div className={styles.badgeContainer}>
        <span className={`${styles.badge} ${styles.badgeData}`}>
          {dataAmountMb === 0
            ? '무제한'
            : `${(dataAmountMb / 1024).toFixed(1)}GB`}
        </span>
        <span className={`${styles.badge} ${styles.badgeVoice}`}>
          {voiceMinutes === -1 ? '무제한' : `${voiceMinutes}분`}
        </span>
        <span className={`${styles.badge} ${styles.badgeSpeed}`}>
          속도 {overageSpeedMbps ?? 0}Mbps
        </span>
        <span className={`${styles.badge} ${styles.badgeSms}`}>
          혜택 가치 {smsIncluded}
        </span>
      </div>

      {subscriptionServices.length > 0 && (
        <div className={styles.ottContainer}>
          {subscriptionServices.map((service, index) => (
            <div
              key={service}
              className={`${styles.ottCircle} ${index !== 0 ? styles.ottCircleOverlap : ''}`}
              title={OTT_LABELS[service]}
            >
              <img
                src={OTT_IMAGES[service]}
                alt={OTT_LABELS[service]}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
            </div>
          ))}
        </div>
      )}
    </button>
  );
}

// 메인 페이지 컴포넌트
export default function Plan() {
  const navigate = useNavigate();
  const [sortTarget, setSortTarget] = useState<SortTarget | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedNetwork, setSelectedNetwork] = useState<NetworkType | null>(
    null,
  );
  const [selectedOttList, setSelectedOttList] = useState<OTTType[]>([]);
  const [selectedPlanId, setSelectedPlanId] = useState<number | null>(null);
  const [isCompareMode, setIsCompareMode] = useState(false);
  const [comparePlans, setComparePlans] = useState<number[]>([]);
  const listRef = useRef<HTMLDivElement>(null);

  const [currentPlan, setCurrentPlan] = useState<PlanType>(() => {
    const savedPlanId = localStorage.getItem('currentPlanId');
    if (savedPlanId) {
      const planId = parseInt(savedPlanId, 10);
      const savedPlan = MOCK_PLANS.find((p) => p.id === planId);
      if (savedPlan) return savedPlan;
    }
    return MOCK_PLANS[Math.floor(Math.random() * MOCK_PLANS.length)];
  });

  const loadCurrentPlan = useCallback(() => {
    const savedPlanId = localStorage.getItem('currentPlanId');
    if (savedPlanId) {
      const planId = parseInt(savedPlanId, 10);
      const savedPlan = MOCK_PLANS.find((p) => p.id === planId);
      if (savedPlan) setCurrentPlan(savedPlan);
    }
  }, []);

  useEffect(() => {
    loadCurrentPlan();
    window.addEventListener('focus', loadCurrentPlan);
    return () => window.removeEventListener('focus', loadCurrentPlan);
  }, [loadCurrentPlan]);

  const filteredAndSortedPlans = useMemo(() => {
    let filtered = [...MOCK_PLANS];
    if (selectedNetwork)
      filtered = filtered.filter((p) => p.networkType === selectedNetwork);
    if (selectedOttList.length > 0) {
      filtered = filtered.filter((p) =>
        selectedOttList.some((ott) => p.subscriptionServices.includes(ott)),
      );
    }
    if (sortTarget) {
      filtered.sort((a, b) => {
        const aVal = a[sortTarget] ?? 0;
        const bVal = b[sortTarget] ?? 0;
        return sortOrder === 'asc'
          ? (aVal as number) - (bVal as number)
          : (bVal as number) - (aVal as number);
      });
    }
    return filtered;
  }, [selectedNetwork, selectedOttList, sortTarget, sortOrder]);

  const handlePlanClick = (plan: PlanType) => {
    if (isCompareMode) {
      if (comparePlans.includes(plan.id))
        setComparePlans((p) => p.filter((id) => id !== plan.id));
      else if (comparePlans.length < 2) setComparePlans((p) => [...p, plan.id]);
    } else {
      setSelectedPlanId(plan.id);
      navigate(PAGE_PATHS.PLAN_DETAIL.replace(':id', plan.id.toString()));
    }
  };

  const handleCompareClick = () => {
    if (comparePlans.length === 2) {
      navigate(PAGE_PATHS.PLAN_COMPARE, {
        state: { plan1Id: comparePlans[0], plan2Id: comparePlans[1] },
      });
    }
  };

  return (
    <Layout>
      <Header />
      <div className={styles.container}>
        <div className={styles.gradientBg} />
        <div className={styles.content} ref={listRef}>
          <h1 className={styles.title}>요금제 목록</h1>
          <div
            style={{ width: '200px', height: '200px', marginBottom: '24px' }}
          >
            <Loading3D
              textureUrl="src/assets/images/search-moono.png"
              size="lg"
              floatSpeed={1.8}
            />
          </div>
          <button
            className={`${styles.compareButton} ${isCompareMode ? styles.compareButtonActive : ''}`}
            onClick={() => setIsCompareMode(!isCompareMode)}
          >
            요금제 한눈에 비교하기!! click!!
          </button>
          <div
            style={{
              marginBottom: '24px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h2 className={styles.currentPlanTitle}>현재 사용중인 요금제</h2>
            <CurrentPlanCard
              plan={currentPlan}
              isSelected={selectedPlanId === currentPlan.id}
              isCompareMode={isCompareMode}
              isCompareSelected={comparePlans.includes(currentPlan.id)}
              onClick={handlePlanClick}
            />
          </div>
          <SortFilterPanel
            selectedNetwork={selectedNetwork}
            setSelectedNetwork={setSelectedNetwork}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            sortTarget={sortTarget}
            setSortTarget={setSortTarget}
            selectedOttList={selectedOttList}
            setSelectedOttList={setSelectedOttList}
          />
          <div className={styles.planList}>
            {filteredAndSortedPlans.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                isSelected={selectedPlanId === plan.id}
                isCompareMode={isCompareMode}
                isCompareSelected={comparePlans.includes(plan.id)}
                onClick={handlePlanClick}
              />
            ))}
          </div>
          {isCompareMode && (
            <div className={styles.compareActions}>
              <button
                className={styles.compareConfirmButton}
                onClick={handleCompareClick}
                disabled={comparePlans.length !== 2}
              >
                비교하기 ({comparePlans.length}/2)
              </button>
              <button
                className={styles.compareCancelButton}
                onClick={() => {
                  setIsCompareMode(false);
                  setComparePlans([]);
                }}
              >
                취소
              </button>
            </div>
          )}
        </div>
      </div>
      <BottomNav />
    </Layout>
  );
}
