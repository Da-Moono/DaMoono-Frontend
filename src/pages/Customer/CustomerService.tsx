import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/BottomNav';
import { PAGE_PATHS } from '../../shared/config/paths';
import Layout from '../layout/Layout';
import { faqs } from './FAQ.ts';
import * as S from './style/CustomerService.css.ts';

export default function CustomerService() {
  const navigate = useNavigate();

  // 상태 관리
  const [openId, setOpenId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<string>('전체');

  // 핸들러 함수
  const toggleFaq = (id: string) => setOpenId(openId === id ? null : id);
  const handleCategorySelect = (id: string) =>
    setSelectedCategory(selectedCategory === id ? null : id);

  const handleGuideButtonClick = () => {
    if (selectedCategory === 'army') navigate(PAGE_PATHS.ARMY_GUIDE);
    if (selectedCategory === 'proxy') navigate(PAGE_PATHS.PROXY_GUIDE);
    if (selectedCategory === 'minor') navigate(PAGE_PATHS.MINOR_GUIDE);
  };

  // 필터링 로직
  const filteredFaqs = faqs.filter((faq) => {
    const matchesTab =
      activeTab === '전체' ? faq.isTop10 : faq.category === activeTab;
    const matchesSearch = faq.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <Layout>
      {/* 상단 헤더 섹션: CSS clamp에 의해 캐릭터와 로고 크기가 자동 조절됩니다. */}
      <header className={S.headerSection}>
        <div className={S.topLogo} />
        <div className={S.customerCharacter} />
        <h1 className={S.title}>무엇을 도와드릴까요?</h1>
        <div className={S.searchContainer}>
          <input
            type="text"
            placeholder="궁금한 내용을 입력해 보세요"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={S.searchInput}
          />
        </div>
        <div className={S.tabContainer}>
          {['전체', '모바일', '인터넷/TV', '결제/관리', '서비스안내'].map(
            (cat) => (
              <button
                key={cat}
                className={`${S.categoryTab} ${activeTab === cat ? S.activeTab : ''}`}
                onClick={() => {
                  setActiveTab(cat);
                  setOpenId(null);
                }}
              >
                {cat}
              </button>
            ),
          )}
        </div>
      </header>

      {/* 중앙 스크롤 영역 */}
      <div className={S.scrollArea}>
        <div className={S.faqListWrapper}>
          {filteredFaqs.map((faq) => (
            <div key={faq.id} className={S.faqItemBox}>
              <button
                type="button"
                className={S.faqHeader}
                onClick={() => toggleFaq(faq.id)}
              >
                <span className={S.faqHeaderText}>{faq.title}</span>
                <div
                  className={`${S.arrowIcon} ${openId === faq.id ? S.arrowIconOpen : ''}`}
                />
              </button>
              {openId === faq.id && (
                <div className={S.faqAnswer}>{faq.content}</div>
              )}
            </div>
          ))}
        </div>

        {/* 하단 가이드 프레임 */}
        <div className={S.guideFrame}>
          <p className={S.cardTitle}>항목 선택 시 서류 안내</p>

          {/* ⭐ 3개 버튼을 한 줄로 정렬하는 반응형 컨테이너 */}
          <div className={S.categoryGroup}>
            <button
              type="button"
              className={S.categoryBox}
              style={{
                borderColor:
                  selectedCategory === 'army' ? '#FBC02D' : '#EFEFEF',
                borderWidth: selectedCategory === 'army' ? '2px' : '1px',
              }}
              onClick={() => handleCategorySelect('army')}
            >
              군인 혜택 {selectedCategory === 'army' && '✓'}
            </button>

            <button
              type="button"
              className={S.categoryBox}
              style={{
                borderColor:
                  selectedCategory === 'proxy' ? '#FBC02D' : '#EFEFEF',
                borderWidth: selectedCategory === 'proxy' ? '2px' : '1px',
              }}
              onClick={() => handleCategorySelect('proxy')}
            >
              대리인 서류 {selectedCategory === 'proxy' && '✓'}
            </button>

            <button
              type="button"
              className={S.categoryBox}
              style={{
                borderColor:
                  selectedCategory === 'minor' ? '#FBC02D' : '#EFEFEF',
                borderWidth: selectedCategory === 'minor' ? '2px' : '1px',
              }}
              onClick={() => handleCategorySelect('minor')}
            >
              미성년자 가입 {selectedCategory === 'minor' && '✓'}
            </button>
          </div>

          <button
            type="button"
            className={`${S.guideButton} ${selectedCategory ? S.buttonActive : S.buttonDisabled}`}
            onClick={handleGuideButtonClick}
            disabled={!selectedCategory}
          >
            서류 확인하기 →
          </button>
        </div>
      </div>
      <BottomNav />
    </Layout>
  );
}
