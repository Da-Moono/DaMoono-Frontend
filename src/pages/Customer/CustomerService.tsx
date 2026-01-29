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
  const [openId, setOpenId] = useState<string | null>(null); // FAQ 아코디언 열림 상태
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // 하단 가이드 선택 상태
  const [searchQuery, setSearchQuery] = useState(''); // 검색어 상태
  const [activeTab, setActiveTab] = useState<string>('전체'); // 상단 카테고리 탭 상태

  // 핸들러 함수
  const toggleFaq = (id: string) => setOpenId(openId === id ? null : id); // FAQ 열고 닫기
  const handleCategorySelect = (id: string) =>
    setSelectedCategory(selectedCategory === id ? null : id); // 가이드 항목 토글 선택

  // 선택된 카테고리에 따른 페이지 이동
  const handleGuideButtonClick = () => {
    if (selectedCategory === 'army') {
      navigate(PAGE_PATHS.ARMY_GUIDE);
    }
    if (selectedCategory === 'proxy') {
      navigate(PAGE_PATHS.PROXY_GUIDE);
    }
    if (selectedCategory === 'minor') {
      navigate(PAGE_PATHS.MINOR_GUIDE);
    }
  };

  // --- 필터링 로직
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
      <header className={S.headerSection}>
        <div className={S.topLogo} />
        <div className={S.faqCharacter} />
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

      <div className={S.scrollArea}>
        <div className={S.faqListWrapper}>
          {filteredFaqs.map((faq) => (
            <div
              key={faq.id}
              className={S.faqItemBox}
              style={{ height: openId === faq.id ? 'auto' : '50px' }}
            >
              <button
                type="button"
                className={S.faqHeader}
                onClick={() => toggleFaq(faq.id)}
              >
                <span style={{ textAlign: 'left', flex: 1 }}>{faq.title}</span>
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

        <div className={S.guideFrame}>
          <p
            style={{ textAlign: 'center', paddingTop: '20px', fontWeight: 700 }}
          >
            항목 선택 시 서류 안내
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '20px',
            }}
          >
            {/* 군인 혜택 */}
            <button
              type="button"
              className={S.categoryBox}
              style={{
                border:
                  selectedCategory === 'army'
                    ? '2px solid #FBC02D'
                    : '1px solid #EFEFEF',
              }}
              onClick={() => handleCategorySelect('army')}
            >
              군인 혜택 {selectedCategory === 'army' && '✓'}
            </button>

            <button
              type="button"
              className={S.categoryBox}
              style={{
                border:
                  selectedCategory === 'proxy'
                    ? '2px solid #FBC02D'
                    : '1px solid #EFEFEF',
              }}
              onClick={() => handleCategorySelect('proxy')}
            >
              대리인 서류 {selectedCategory === 'proxy' && '✓'}
            </button>

            {/* 미성년자 가입 */}
            <button
              type="button"
              className={S.categoryBox}
              style={{
                border:
                  selectedCategory === 'minor'
                    ? '2px solid #FBC02D'
                    : '1px solid #EFEFEF',
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
