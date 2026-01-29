import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import nologinImage from '@/assets/images/nologin.png';
import subscribeHeaderCharacter from '@/assets/images/subscribe-header-character.png';
import BottomNav from '@/components/BottomNav';
import Header from '@/components/Header';
import { getAuthStatus } from '@/services/authApi';
import { getSubscribes } from '@/services/subscribeApi';
import Layout from '../layout/Layout';
import {
  CATEGORY_LABELS,
  MOCK_SUBSCRIBES,
  SORT_LABELS,
  SUBSCRIBE_IMAGES,
} from './constants';
import * as styles from './style/Subscribe.css';
import type {
  CategoryType,
  SortTarget,
  Subscribe as SubscribeType,
} from './types';

// 현재 사용 중인 구독 카드 컴포넌트
interface CurrentSubscribeCardProps {
  subscribe: SubscribeType;
  isSelected: boolean;
  onClick?: (subscribe: SubscribeType) => void;
  isDisabled?: boolean;
}

function CurrentSubscribeCard({
  subscribe,
  isSelected,
  onClick,
  isUpdating,
  isDisabled = false,
}: CurrentSubscribeCardProps & { isUpdating?: boolean }) {
  const { name, monthlyPrice, category, description } = subscribe;
  const subscribeImage = SUBSCRIBE_IMAGES[name] || null;

  if (isDisabled) {
    return (
      <div
        className={`${styles.currentSubscribeCard} ${styles.currentSubscribeCardDisabled}`}
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
      onClick={() => onClick?.(subscribe)}
      className={`${styles.currentSubscribeCard} ${isSelected ? styles.subscribeCardSelected : ''} ${isUpdating ? styles.currentSubscribeCardUpdating : ''}`}
    >
      <div className={styles.cardHeader}>
        <span className={styles.category}>{CATEGORY_LABELS[category]}</span>
        <span className={styles.price}>
          월 {monthlyPrice.toLocaleString()}원
        </span>
      </div>
      <div className={styles.subscribeName} title={name}>
        {name}
      </div>

      {/* 서비스 소개 */}
      <div className={styles.descriptionContainer}>
        <p className={styles.descriptionText}>{description}</p>
      </div>

      {/* 구독 서비스 원형 아이콘 */}
      <div className={styles.subscribeContainer}>
        <div className={styles.subscribeCircle} title={name}>
          {subscribeImage ? (
            <img
              src={subscribeImage}
              alt={name}
              className={styles.subscribeImage}
            />
          ) : (
            name.charAt(0)
          )}
        </div>
      </div>
    </button>
  );
}

// 정렬/필터 패널 컴포넌트
interface SortFilterPanelProps {
  sortOrder: 'asc' | 'desc';
  setSortOrder: (order: 'asc' | 'desc') => void;
  sortTarget: SortTarget | null;
  setSortTarget: (target: SortTarget | null) => void;
  selectedCategories: CategoryType[];
  setSelectedCategories: (categories: CategoryType[]) => void;
}

function SortFilterPanel({
  sortOrder,
  setSortOrder,
  sortTarget,
  setSortTarget,
  selectedCategories,
  setSelectedCategories,
}: SortFilterPanelProps) {
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [showSortOrderMenu, setShowSortOrderMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const sortOrderMenuRef = useRef<HTMLDivElement>(null);
  const sortMenuRef = useRef<HTMLDivElement>(null);
  const filterMenuRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sortOrderMenuRef.current &&
        !sortOrderMenuRef.current.contains(event.target as Node)
      ) {
        setShowSortOrderMenu(false);
      }
      if (
        sortMenuRef.current &&
        !sortMenuRef.current.contains(event.target as Node)
      ) {
        setShowSortMenu(false);
      }
      if (
        filterMenuRef.current &&
        !filterMenuRef.current.contains(event.target as Node)
      ) {
        setShowFilterMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.filterPanel}>
      <div className={styles.filterControls}>
        {/* 정렬 순서 */}
        <div className={styles.selectWrapper} style={{ width: '85px' }}>
          <button
            onClick={() => {
              setShowSortOrderMenu(!showSortOrderMenu);
              setShowSortMenu(false);
              setShowFilterMenu(false);
            }}
            className={styles.selectBase}
          >
            {sortOrder === 'asc' ? '낮은 순' : '높은 순'}
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

        {/* 정렬 기준 */}
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

        {/* 필터 버튼 */}
        <div className={styles.selectWrapper} style={{ width: '80px' }}>
          <button
            onClick={() => {
              setShowFilterMenu(!showFilterMenu);
              setShowSortOrderMenu(false);
              setShowSortMenu(false);
            }}
            className={styles.selectBase}
          >
            필터링
          </button>
          <svg
            className={styles.selectIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            role="img"
            aria-label="필터링 메뉴 열기"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>

          {/* 필터 메뉴 */}
          {showFilterMenu && (
            <div ref={filterMenuRef} className={styles.filterMenu}>
              {/* 카테고리 필터 */}
              <div className={styles.filterSection}>
                <div className={styles.filterSectionTitle}>카테고리</div>
                <div className={styles.filterButtons}>
                  {Object.entries(CATEGORY_LABELS).map(([key, label]) => {
                    const categoryKey = key as CategoryType;
                    const isSelected = selectedCategories.includes(categoryKey);
                    return (
                      <button
                        key={key}
                        className={`${styles.filterButton} ${isSelected ? styles.filterButtonActive : ''}`}
                        onClick={() => {
                          setSelectedCategories(
                            isSelected
                              ? selectedCategories.filter(
                                  (v) => v !== categoryKey,
                                )
                              : [...selectedCategories, categoryKey],
                          );
                        }}
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

// 구독 카드 컴포넌트
interface SubscribeCardProps {
  subscribe: SubscribeType;
  onClick?: (subscribe: SubscribeType) => void;
}

function SubscribeCard({ subscribe, onClick }: SubscribeCardProps) {
  const { name, monthlyPrice, category, description } = subscribe;
  const subscribeImage = SUBSCRIBE_IMAGES[name] || null;

  return (
    <button
      type="button"
      onClick={() => onClick?.(subscribe)}
      className={styles.subscribeCard}
    >
      <div className={styles.cardHeader}>
        <span className={styles.category}>{CATEGORY_LABELS[category]}</span>
        <span className={styles.price}>
          월 {monthlyPrice.toLocaleString()}원
        </span>
      </div>
      <div className={styles.subscribeName} title={name}>
        {name}
      </div>

      {/* 서비스 소개 */}
      <div className={styles.descriptionContainer}>
        <p className={styles.descriptionText}>{description}</p>
      </div>

      {/* 구독 서비스 원형 아이콘 */}
      <div className={styles.subscribeContainer}>
        <div className={styles.subscribeCircle} title={name}>
          {subscribeImage ? (
            <img
              src={subscribeImage}
              alt={name}
              className={styles.subscribeImage}
            />
          ) : (
            name.charAt(0)
          )}
        </div>
      </div>
    </button>
  );
}

// 메인 페이지 컴포넌트
export default function Subscribe() {
  const navigate = useNavigate();
  const location = useLocation();
  const [sortTarget, setSortTarget] = useState<SortTarget | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedCategories, setSelectedCategories] = useState<CategoryType[]>(
    [],
  );
  const [selectedSubscribeId, setSelectedSubscribeId] = useState<number | null>(
    null,
  );
  const listRef = useRef<HTMLDivElement>(null);

  // API 데이터 상태
  const [subscribes, setSubscribes] = useState<SubscribeType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 현재 사용 중인 구독 상태
  const [currentSubscribe, setCurrentSubscribe] =
    useState<SubscribeType | null>(null);
  const [isUpdatingSubscribe, setIsUpdatingSubscribe] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null); // null: 확인 중, true: 로그인, false: 비로그인

  // API에서 구독 목록 가져오기
  useEffect(() => {
    const fetchSubscribes = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const fetchedSubscribes = await getSubscribes();
        setSubscribes(fetchedSubscribes);

        // 현재 구독 설정
        const savedSubscribeId = localStorage.getItem('currentSubscribeId');
        if (savedSubscribeId && fetchedSubscribes.length > 0) {
          const subscribeId = parseInt(savedSubscribeId, 10);
          const savedSubscribe = fetchedSubscribes.find(
            (s) => s.id === subscribeId,
          );
          if (savedSubscribe) {
            setCurrentSubscribe(savedSubscribe);
          } else {
            // 저장된 구독이 없으면 랜덤 선택
            setCurrentSubscribe(
              fetchedSubscribes[
                Math.floor(Math.random() * fetchedSubscribes.length)
              ],
            );
          }
        } else if (fetchedSubscribes.length > 0) {
          // 저장된 구독이 없으면 랜덤 선택
          setCurrentSubscribe(
            fetchedSubscribes[
              Math.floor(Math.random() * fetchedSubscribes.length)
            ],
          );
        }
      } catch (err) {
        console.error('구독 목록을 가져오는 중 오류 발생:', err);
        setError('구독 목록을 불러오는데 실패했습니다.');
        // 에러 발생 시 목데이터 사용
        setSubscribes(MOCK_SUBSCRIBES);
        const savedSubscribeId = localStorage.getItem('currentSubscribeId');
        if (savedSubscribeId) {
          const subscribeId = parseInt(savedSubscribeId, 10);
          const savedSubscribe = MOCK_SUBSCRIBES.find(
            (s) => s.id === subscribeId,
          );
          if (savedSubscribe) {
            setCurrentSubscribe(savedSubscribe);
          } else {
            setCurrentSubscribe(
              MOCK_SUBSCRIBES[
                Math.floor(Math.random() * MOCK_SUBSCRIBES.length)
              ],
            );
          }
        } else {
          setCurrentSubscribe(
            MOCK_SUBSCRIBES[Math.floor(Math.random() * MOCK_SUBSCRIBES.length)],
          );
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchSubscribes();
  }, []);

  // localStorage에서 현재 사용중인 구독 가져오기
  const loadCurrentSubscribe = useCallback(() => {
    const savedSubscribeId = localStorage.getItem('currentSubscribeId');
    if (savedSubscribeId && subscribes.length > 0) {
      const subscribeId = parseInt(savedSubscribeId, 10);
      const savedSubscribe = subscribes.find((s) => s.id === subscribeId);
      if (savedSubscribe) {
        setCurrentSubscribe(savedSubscribe);
        return;
      }
    }
  }, [subscribes]);

  // 컴포넌트 마운트 시 및 페이지 포커스 시 localStorage 확인
  useEffect(() => {
    loadCurrentSubscribe();

    const handleFocus = () => {
      loadCurrentSubscribe();
    };

    window.addEventListener('focus', handleFocus);
    return () => {
      window.removeEventListener('focus', handleFocus);
    };
  }, [loadCurrentSubscribe]);

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
    setIsUpdatingSubscribe(true);
    loadCurrentSubscribe();

    // 700ms 후 효과 제거 (애니메이션 완료 후 클래스 제거)
    setTimeout(() => {
      setIsUpdatingSubscribe(false);
    }, 700);
  }, [loadCurrentSubscribe]);

  // 필터링 및 정렬 로직
  const filteredAndSortedSubscribes = useMemo(() => {
    if (subscribes.length === 0) return [];
    let filtered = [...subscribes];

    // 카테고리 필터
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((subscribe) =>
        selectedCategories.includes(subscribe.category),
      );
    }

    // 정렬
    if (sortTarget) {
      filtered.sort((a, b) => {
        let aValue: number;
        let bValue: number;

        switch (sortTarget) {
          case 'price':
            aValue = a.price;
            bValue = b.price;
            break;
          case 'monthlyPrice':
            aValue = a.monthlyPrice;
            bValue = b.monthlyPrice;
            break;
          case 'benefits':
            aValue = a.benefits?.length ?? 0;
            bValue = b.benefits?.length ?? 0;
            break;
          default:
            return 0;
        }

        if (sortOrder === 'asc') {
          return aValue - bValue;
        } else {
          return bValue - aValue;
        }
      });
    }

    return filtered;
  }, [subscribes, selectedCategories, sortTarget, sortOrder]);

  const handleSubscribeClick = (subscribe: SubscribeType) => {
    setSelectedSubscribeId(subscribe.id);
    navigate(`/subscribe/${subscribe.id}`);
  };

  return (
    <Layout>
      <Header />

      <div className={styles.container}>
        <div className={styles.gradientBg} />

        <div className={styles.content} ref={listRef}>
          {/* 헤더 */}
          <div className={styles.headerSection}>
            <div className={styles.titleWrapper}>
              <h1 className={styles.title}>
                <span className={styles.titleLine1}>구독 서비스</span>
                <span className={styles.titleLine2}>둘러보기</span>
              </h1>
            </div>
            <div className={styles.characterWrapper}>
              <img
                src={subscribeHeaderCharacter}
                alt="구독 서비스 둘러보기 캐릭터"
                className={styles.headerCharacter}
              />
            </div>
          </div>

          {/* 현재 사용 중인 구독 */}
          <div className={styles.currentSubscribeSection}>
            <h2 className={styles.currentSubscribeTitle}>현재 사용중인 구독</h2>
            {currentSubscribe ? (
              <CurrentSubscribeCard
                subscribe={currentSubscribe}
                isSelected={selectedSubscribeId === currentSubscribe.id}
                isUpdating={isUpdatingSubscribe}
                isDisabled={isAuthenticated === false}
                onClick={handleSubscribeClick}
              />
            ) : (
              <div className={styles.loadingMessage}>로딩 중...</div>
            )}
          </div>

          {/* 정렬/필터 패널 */}
          {isLoading ? (
            <div className={styles.loadingMessage}>
              구독 목록을 불러오는 중...
            </div>
          ) : error ? (
            <div className={styles.errorMessage}>{error}</div>
          ) : (
            <>
              <SortFilterPanel
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
                sortTarget={sortTarget}
                setSortTarget={setSortTarget}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
              />

              {/* 모든 구독 */}
              <h2 className={styles.allSubscribesTitle}>모든 구독</h2>

              {/* 구독 리스트 */}
              <div className={styles.subscribeList}>
                {filteredAndSortedSubscribes.length === 0 ? (
                  <div className={styles.emptyState}>
                    조건에 맞는 구독 서비스가 없습니다.
                  </div>
                ) : (
                  filteredAndSortedSubscribes.map((subscribe) => (
                    <SubscribeCard
                      key={subscribe.id}
                      subscribe={subscribe}
                      onClick={handleSubscribeClick}
                    />
                  ))
                )}
              </div>
            </>
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
              구독 서비스 신청 및 변경이 완료되었습니다.
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
