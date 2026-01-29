import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import nologinImage from '@/assets/images/nologin.png';
import planHeaderCharacter from '@/assets/images/plan-header-character.png';
import BottomNav from '@/components/BottomNav';
import Header from '@/components/Header';
import { getAuthStatus } from '@/services/authApi';
import { getPlans } from '@/services/planApi';
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
  isDisabled?: boolean;
}

function CurrentPlanCard({
  plan,
  isSelected,
  isCompareMode = false,
  isCompareSelected = false,
  onClick,
  isUpdating,
  isDisabled = false,
}: CurrentPlanCardProps & { isUpdating?: boolean }) {
  const {
    name,
    price,
    dataAmountMb,
    voiceMinutes,
    smsIncluded,
    overageSpeedMbps,
    subscriptionServices,
  } = plan;

  if (isDisabled) {
    return (
      <div
        className={`${styles.currentPlanCard} ${styles.currentPlanCardDisabled}`}
      >
        <div className={styles.disabledContent}>
          <img
            src={nologinImage}
            alt="로그인 필요"
            className={styles.disabledImage}
          />
          <div className={styles.disabledText}>
            <span>현재 사용중인 서비스가 없거나</span>
            <span>로그인이 되어있지 않습니다.</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onClick?.(plan)}
      className={`${styles.currentPlanCard} ${isSelected ? styles.planCardSelected : ''} ${isCompareMode && isCompareSelected ? styles.planCardCompareSelected : ''} ${isUpdating ? styles.currentPlanCardUpdating : ''}`}
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

      {subscriptionServices && subscriptionServices.length > 0 && (
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
  sortOrder: 'asc' | 'desc' | null;
  setSortOrder: (order: 'asc' | 'desc' | null) => void;
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
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [showSortOrderMenu, setShowSortOrderMenu] = useState(false);
  const sortMenuRef = useRef<HTMLDivElement>(null);
  const sortOrderMenuRef = useRef<HTMLDivElement>(null);
  const filterMenuRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 시 메뉴 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sortMenuRef.current &&
        !sortMenuRef.current.contains(event.target as Node)
      ) {
        setShowSortMenu(false);
      }
      if (
        sortOrderMenuRef.current &&
        !sortOrderMenuRef.current.contains(event.target as Node)
      ) {
        setShowSortOrderMenu(false);
      }
      if (
        filterMenuRef.current &&
        !filterMenuRef.current.contains(event.target as Node)
      ) {
        setShowFilterMenu(false);
      }
    };

    if (showSortMenu || showSortOrderMenu || showFilterMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [showSortMenu, showSortOrderMenu, showFilterMenu]);

  return (
    <div className={styles.filterPanel}>
      <div className={styles.filterControls}>
        <div className={styles.selectWrapper} style={{ width: '100px' }}>
          <button
            onClick={() => {
              setShowSortOrderMenu(!showSortOrderMenu);
              setShowSortMenu(false);
              setShowFilterMenu(false);
            }}
            className={styles.selectBase}
          >
            {sortOrder === null
              ? '기본'
              : sortOrder === 'asc'
                ? '낮은 순'
                : '높은 순'}
          </button>
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
          {showSortOrderMenu && (
            <div ref={sortOrderMenuRef} className={styles.sortMenu}>
              <button
                className={`${styles.sortMenuItem} ${sortOrder === null ? styles.sortMenuItemSelected : ''}`}
                onClick={() => {
                  setSortOrder(null);
                  setShowSortOrderMenu(false);
                }}
              >
                <span>기본</span>
                {sortOrder === null && (
                  <svg
                    className={styles.checkIcon}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-label="선택됨"
                    role="img"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>
              <button
                className={`${styles.sortMenuItem} ${sortOrder === 'asc' ? styles.sortMenuItemSelected : ''}`}
                onClick={() => {
                  setSortOrder('asc');
                  setShowSortOrderMenu(false);
                }}
              >
                <span>낮은 순</span>
                {sortOrder === 'asc' && (
                  <svg
                    className={styles.checkIcon}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-label="선택됨"
                    role="img"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>
              <button
                className={`${styles.sortMenuItem} ${sortOrder === 'desc' ? styles.sortMenuItemSelected : ''}`}
                onClick={() => {
                  setSortOrder('desc');
                  setShowSortOrderMenu(false);
                }}
              >
                <span>높은 순</span>
                {sortOrder === 'desc' && (
                  <svg
                    className={styles.checkIcon}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-label="선택됨"
                    role="img"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>
            </div>
          )}
        </div>

        <div className={styles.selectWrapper} style={{ width: '120px' }}>
          <button
            onClick={() => {
              setShowSortMenu(!showSortMenu);
              setShowSortOrderMenu(false);
              setShowFilterMenu(false);
            }}
            className={styles.selectBase}
          >
            {sortTarget ? SORT_LABELS[sortTarget] : '정렬 기준'}
          </button>
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
          {showSortMenu && (
            <div ref={sortMenuRef} className={styles.sortMenu}>
              {Object.entries(SORT_LABELS).map(([key, label]) => {
                const isSelected = sortTarget === key;
                return (
                  <button
                    key={key}
                    className={`${styles.sortMenuItem} ${isSelected ? styles.sortMenuItemSelected : ''}`}
                    onClick={() => {
                      setSortTarget(key as SortTarget);
                      setShowSortMenu(false);
                    }}
                  >
                    <span>{label}</span>
                    {isSelected && (
                      <svg
                        className={styles.checkIcon}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-label="선택됨"
                        role="img"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className={styles.selectWrapper} style={{ width: '80px' }}>
          <button
            onClick={() => {
              setShowFilterMenu(!showFilterMenu);
              setShowSortMenu(false);
              setShowSortOrderMenu(false);
            }}
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
            <div ref={filterMenuRef} className={styles.filterMenu}>
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

      {subscriptionServices && subscriptionServices.length > 0 && (
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
  const location = useLocation();
  const [sortTarget, setSortTarget] = useState<SortTarget | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);
  const [selectedNetwork, setSelectedNetwork] = useState<NetworkType | null>(
    null,
  );
  const [selectedOttList, setSelectedOttList] = useState<OTTType[]>([]);
  const [selectedPlanId, setSelectedPlanId] = useState<number | null>(null);
  const [isCompareMode, setIsCompareMode] = useState(() => {
    return location.state?.compare ?? false;
  });
  const [comparePlans, setComparePlans] = useState<number[]>([]);
  const listRef = useRef<HTMLDivElement>(null);

  // API 데이터 상태
  const [plans, setPlans] = useState<PlanType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [currentPlan, setCurrentPlan] = useState<PlanType | null>(null);
  const [isUpdatingPlan, setIsUpdatingPlan] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null); // null: 확인 중, true: 로그인, false: 비로그인

  // API에서 요금제 목록 가져오기
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const fetchedPlans = await getPlans();
        // 랜덤으로 섞기
        const shuffledPlans = [...fetchedPlans].sort(() => Math.random() - 0.5);
        setPlans(shuffledPlans);

        // 현재 요금제 설정
        const savedPlanId = localStorage.getItem('currentPlanId');
        if (savedPlanId && fetchedPlans.length > 0) {
          const planId = parseInt(savedPlanId, 10);
          const savedPlan = fetchedPlans.find((p) => p.id === planId);
          if (savedPlan) {
            setCurrentPlan(savedPlan);
          } else {
            // 저장된 요금제가 없으면 랜덤 선택
            setCurrentPlan(
              fetchedPlans[Math.floor(Math.random() * fetchedPlans.length)],
            );
          }
        } else if (fetchedPlans.length > 0) {
          // 저장된 요금제가 없으면 랜덤 선택
          setCurrentPlan(
            fetchedPlans[Math.floor(Math.random() * fetchedPlans.length)],
          );
        }
      } catch (err) {
        console.error('요금제 목록을 가져오는 중 오류 발생:', err);
        setError('요금제 목록을 불러오는데 실패했습니다.');
        // 에러 발생 시 목데이터 사용 (랜덤으로 섞기)
        const shuffledMockPlans = [...MOCK_PLANS].sort(
          () => Math.random() - 0.5,
        );
        setPlans(shuffledMockPlans);
        const savedPlanId = localStorage.getItem('currentPlanId');
        if (savedPlanId) {
          const planId = parseInt(savedPlanId, 10);
          const savedPlan = MOCK_PLANS.find((p) => p.id === planId);
          if (savedPlan) {
            setCurrentPlan(savedPlan);
          } else {
            setCurrentPlan(
              MOCK_PLANS[Math.floor(Math.random() * MOCK_PLANS.length)],
            );
          }
        } else {
          setCurrentPlan(
            MOCK_PLANS[Math.floor(Math.random() * MOCK_PLANS.length)],
          );
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const loadCurrentPlan = useCallback(() => {
    const savedPlanId = localStorage.getItem('currentPlanId');
    if (savedPlanId && plans.length > 0) {
      const planId = parseInt(savedPlanId, 10);
      const savedPlan = plans.find((p) => p.id === planId);
      if (savedPlan) setCurrentPlan(savedPlan);
    }
  }, [plans]);

  useEffect(() => {
    loadCurrentPlan();
    window.addEventListener('focus', loadCurrentPlan);
    return () => window.removeEventListener('focus', loadCurrentPlan);
  }, [loadCurrentPlan]);

  // 로그인 상태 확인
  useEffect(() => {
    const checkAuth = async () => {
      try {
        await getAuthStatus();
        setIsAuthenticated(true);
      } catch {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  // 성공 모달 표시 신호 감지
  useEffect(() => {
    const showSuccess = (location.state as { showSuccessModal?: boolean })
      ?.showSuccessModal;
    if (showSuccess) {
      setShowSuccessModal(true);
      // location state 초기화
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, navigate, location.pathname]);

  // 성공 모달 확인 버튼 클릭 시 애니메이션 시작
  const handleSuccessModalConfirm = useCallback(() => {
    setShowSuccessModal(false);
    setIsUpdatingPlan(true);
    loadCurrentPlan();

    // 700ms 후 효과 제거 (애니메이션 완료 후 클래스 제거)
    setTimeout(() => {
      setIsUpdatingPlan(false);
    }, 700);
  }, [loadCurrentPlan]);

  const filteredAndSortedPlans = useMemo(() => {
    if (plans.length === 0) return [];
    let filtered = [...plans];
    if (selectedNetwork)
      filtered = filtered.filter((p) => p.networkType === selectedNetwork);
    if (selectedOttList.length > 0) {
      filtered = filtered.filter((p) =>
        selectedOttList.some((ott) => p.subscriptionServices?.includes(ott)),
      );
    }
    if (sortTarget && sortOrder !== null) {
      filtered.sort((a, b) => {
        const aVal = a[sortTarget] ?? 0;
        const bVal = b[sortTarget] ?? 0;
        return sortOrder === 'asc'
          ? (aVal as number) - (bVal as number)
          : (bVal as number) - (aVal as number);
      });
    }
    return filtered;
  }, [plans, selectedNetwork, selectedOttList, sortTarget, sortOrder]);

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
          <div className={styles.headerSection}>
            <div className={styles.titleWrapper}>
              <h1 className={styles.title}>
                <span className={styles.titleLine1}>요금제 서비스</span>
                <span className={styles.titleLine2}>둘러보기</span>
              </h1>
            </div>
            <div className={styles.characterWrapper}>
              <img
                src={planHeaderCharacter}
                alt="요금제 비교 캐릭터"
                className={styles.headerCharacter}
              />
            </div>
          </div>
          <button
            className={`${styles.compareButton} ${isCompareMode ? styles.compareButtonActive : ''}`}
            onClick={() => setIsCompareMode(!isCompareMode)}
          >
            간편하게 요금제 비교하기
          </button>
          <div className={styles.currentPlanSection}>
            <h2 className={styles.currentPlanTitle}>
              현재 사용중인 요금제 서비스
            </h2>
            {currentPlan ? (
              <CurrentPlanCard
                plan={currentPlan}
                isSelected={selectedPlanId === currentPlan.id}
                isCompareMode={isCompareMode}
                isCompareSelected={comparePlans.includes(currentPlan.id)}
                isUpdating={isUpdatingPlan}
                isDisabled={isAuthenticated === false}
                onClick={handlePlanClick}
              />
            ) : (
              <div className={styles.loadingMessage}>로딩 중...</div>
            )}
          </div>
          <h2 className={styles.allPlansTitle}>요금제 전체보기</h2>
          {isLoading ? (
            <div className={styles.loadingMessage}>
              요금제 목록을 불러오는 중...
            </div>
          ) : error ? (
            <div className={styles.errorMessage}>{error}</div>
          ) : (
            <>
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
                {filteredAndSortedPlans.length === 0 ? (
                  <div className={styles.emptyState}>
                    조건에 맞는 요금제가 없습니다.
                  </div>
                ) : (
                  filteredAndSortedPlans.map((plan) => (
                    <PlanCard
                      key={plan.id}
                      plan={plan}
                      isSelected={selectedPlanId === plan.id}
                      isCompareMode={isCompareMode}
                      isCompareSelected={comparePlans.includes(plan.id)}
                      onClick={handlePlanClick}
                    />
                  ))
                )}
              </div>
            </>
          )}
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

      {/* 성공 알림 모달 */}
      {showSuccessModal && (
        <button
          type="button"
          className={styles.successModalOverlay}
          onClick={handleSuccessModalConfirm}
          onKeyDown={(e) => {
            if (e.key === 'Escape' || e.key === 'Enter') {
              handleSuccessModalConfirm();
            }
          }}
          aria-label="모달 닫기"
        >
          <div
            className={styles.successModalContent}
            role="dialog"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <h3 className={styles.successModalTitle}>
              요금제 신청 및 변경이 완료되었습니다.
            </h3>
            <div className={styles.successModalButtons}>
              <button
                type="button"
                className={styles.successModalConfirmButton}
                onClick={handleSuccessModalConfirm}
              >
                확인
              </button>
            </div>
          </div>
        </button>
      )}

      {!showSuccessModal && <BottomNav />}
    </Layout>
  );
}
