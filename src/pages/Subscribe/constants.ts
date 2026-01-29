import appleMusicImg from '@/assets/images/apple-music.png';
import coupangImg from '@/assets/images/coupang.png';
import disneyPlusImg from '@/assets/images/disney-plus.png';
import genieMusicImg from '@/assets/images/genie-music.png';
import millieImg from '@/assets/images/millie.png';
import netflixImg from '@/assets/images/netflix.png';
import newsstandImg from '@/assets/images/newsstand.png';
import spotifyImg from '@/assets/images/spotify.png';
import tvingImg from '@/assets/images/tving.png';
import youtubePremiumImg from '@/assets/images/youtube-premium.png';

import type { CategoryType, SortTarget, Subscribe } from './types';

export const SORT_LABELS: Record<SortTarget, string> = {
  price: '총 가격',
  monthlyPrice: '월 구독료',
  benefits: '혜택 수',
};

export const CATEGORY_LABELS: Record<CategoryType, string> = {
  OTT: 'OTT',
  MUSIC: '음악',
  NEWS: '뉴스',
  EDUCATION: '교육',
  SHOPPING: '쇼핑',
};

// 구독 서비스 이미지 매핑
// 구독 서비스 이름(백엔드에서 받은 name 필드)을 키로 사용합니다
export const SUBSCRIBE_IMAGES: Record<string, string | null> = {
  // 넷플릭스 관련
  '넷플릭스 프리미엄': netflixImg,
  '넷플릭스 월정액': netflixImg,

  // 유튜브 프리미엄 관련
  '유튜브 프리미엄': youtubePremiumImg,
  '유튜브 프리미엄 + 추가혜택(택1)': youtubePremiumImg,
  '유튜브 프리미엄 + 이모티콘플러스 구독팩': youtubePremiumImg,
  '유튜브 프리미엄 + 배달의민족 구독팩': youtubePremiumImg,
  '유튜브 프리미엄 + 스타벅스 구독팩': youtubePremiumImg,
  '유튜브 프리미엄 + CGV 구독팩': youtubePremiumImg,

  // 디즈니+ 관련
  '디즈니+': disneyPlusImg,
  '디즈니 + 추가혜택(택1)': disneyPlusImg,
  '디즈니+월정액 이용권': disneyPlusImg,

  // 티빙 관련
  '티빙 월정액 이용권': tvingImg,

  // 밀리의 서재
  '밀리의 서재': millieImg,

  // 뉴스스탠드
  뉴스스탠드: newsstandImg,

  // 지니뮤직 관련
  '지니뮤직 마음껏듣기 월정액': genieMusicImg,
  '지니뮤직 + 추가혜택(택1)': genieMusicImg,

  // 쿠팡플레이
  쿠팡플레이: coupangImg,

  // 스포티파이
  스포티파이: spotifyImg,

  // 애플 뮤직
  '애플 뮤직': appleMusicImg,

  // 이미지가 없는 서비스들
  '더블 스트리밍 연간권': null,
};

export const MOCK_SUBSCRIBES: Subscribe[] = [
  {
    id: 1,
    name: '넷플릭스 프리미엄',
    price: 17000,
    monthlyPrice: 17000,
    category: 'OTT',
    benefits: ['4K 화질', '동시 시청 4명', '광고 없음'],
    description: '최고 화질의 영화와 드라마를 광고 없이 시청하세요',
    badges: ['인기', '추천'],
  },
  {
    id: 2,
    name: '유튜브 프리미엄',
    price: 13900,
    monthlyPrice: 13900,
    category: 'OTT',
    benefits: ['광고 없음', '백그라운드 재생', '오프라인 저장'],
    description: '유튜브를 광고 없이, 백그라운드에서도 즐기세요',
    badges: ['인기'],
  },
  {
    id: 3,
    name: '디즈니+',
    price: 9900,
    monthlyPrice: 9900,
    category: 'OTT',
    benefits: ['디즈니 콘텐츠', '4K 화질', '다운로드'],
    description: '디즈니, 마블, 스타워즈를 한 곳에서',
    badges: [],
  },
  {
    id: 4,
    name: '스포티파이',
    price: 10900,
    monthlyPrice: 10900,
    category: 'MUSIC',
    benefits: ['광고 없음', '오프라인 재생', '고음질'],
    description: '전 세계 음악을 광고 없이',
    badges: ['인기'],
  },
  {
    id: 5,
    name: '밀리의 서재',
    price: 9900,
    monthlyPrice: 9900,
    category: 'EDUCATION',
    benefits: ['무제한 독서', '오디오북', '이벤트'],
    description: '책 한 달에 10권 이상 읽는 사람들을 위한',
    badges: [],
  },
  {
    id: 6,
    name: '뉴스스탠드',
    price: 4900,
    monthlyPrice: 4900,
    category: 'NEWS',
    benefits: ['다양한 뉴스', '오프라인 읽기', '요약 기능'],
    description: '세상의 모든 뉴스를 한 곳에서',
    badges: [],
  },
  {
    id: 7,
    name: '쿠팡플레이',
    price: 4990,
    monthlyPrice: 4990,
    category: 'OTT',
    benefits: ['무제한 시청', '쿠팡 와우 혜택'],
    description: '쿠팡 와우 회원을 위한 스트리밍 서비스',
    badges: ['특가'],
  },
  {
    id: 8,
    name: '애플 뮤직',
    price: 11000,
    monthlyPrice: 11000,
    category: 'MUSIC',
    benefits: ['광고 없음', '공간 음향', '라이브 라디오'],
    description: 'Apple 기기와 완벽하게 연동되는 음악 서비스',
    badges: [],
  },
  {
    id: 9,
    name: '유튜브 프리미엄 + 추가혜택(택1)',
    price: 13900,
    monthlyPrice: 13900,
    category: 'OTT',
    benefits: ['유튜브 프리미엄', '추가 라이프 혜택'],
    description: '유튜브 프리미엄과 추가 라이프 혜택까지',
    badges: ['BEST'],
  },
  {
    id: 10,
    name: '더블 스트리밍 연간권',
    price: 226800,
    monthlyPrice: 18900,
    category: 'OTT',
    benefits: ['넷플릭스', '유튜브 프리미엄'],
    description: '넷플릭스+유튜브 프리미엄 국내 유일 월 18,900원!',
    badges: ['특가'],
  },
  {
    id: 11,
    name: '티빙 월정액 이용권',
    price: 4950,
    monthlyPrice: 4950,
    category: 'OTT',
    benefits: ['티빙 오리지널', '방송', '영화', '해외시리즈'],
    description: '티빙 오리지널 콘텐츠, 방송, 영화, 해외시리즈까지!',
    badges: ['할인'],
  },
  {
    id: 12,
    name: '유튜브 프리미엄 + 이모티콘플러스 구독팩',
    price: 14900,
    monthlyPrice: 14900,
    category: 'OTT',
    benefits: ['유튜브 프리미엄', '카카오 이모티콘 무제한'],
    description: '유튜브프리미엄과 카카오이모티콘 무제한 구독상품을 한번에',
    badges: [],
  },
  {
    id: 13,
    name: '넷플릭스 월정액',
    price: 7000,
    monthlyPrice: 7000,
    category: 'OTT',
    benefits: ['무제한 시청', '다양한 콘텐츠'],
    description: '넷플릭스에서 영화와 시리즈를 무제한으로 즐겨보세요!',
    badges: ['할인'],
  },
  {
    id: 14,
    name: '디즈니 + 추가혜택(택1)',
    price: 9900,
    monthlyPrice: 9900,
    category: 'OTT',
    benefits: ['디즈니+', '추가 라이프 혜택'],
    description: '디즈니+와 추가 라이프 혜택까지',
    badges: ['U⁺ 모바일 전용'],
  },
  {
    id: 15,
    name: '디즈니+월정액 이용권',
    price: 9405,
    monthlyPrice: 9405,
    category: 'OTT',
    benefits: ['스트리밍', '다양한 콘텐츠'],
    description: '지금 스트리밍중! 내가 좋아하는 이야기가 모두 여기에!',
    badges: ['할인'],
  },
  {
    id: 16,
    name: '유튜브 프리미엄 + 배달의민족 구독팩',
    price: 17900,
    monthlyPrice: 17900,
    category: 'OTT',
    benefits: ['유튜브 프리미엄', '배달의민족 5,000원 교환권'],
    description: '매월 제공되는 배달앱 1위 배민 5,000원 교환권 제공!',
    badges: [],
  },
  {
    id: 17,
    name: '지니뮤직 마음껏듣기 월정액',
    price: 7900,
    monthlyPrice: 7900,
    category: 'MUSIC',
    benefits: ['무제한 스트리밍', '데이터 무료'],
    description: '데이터 걱정없는 무제한 나만의 음악 요정 지니',
    badges: ['U⁺ 모바일 전용'],
  },
  {
    id: 18,
    name: '지니뮤직 + 추가혜택(택1)',
    price: 8400,
    monthlyPrice: 8400,
    category: 'MUSIC',
    benefits: ['지니뮤직', '추가 라이프 혜택'],
    description: '지니뮤직과 추가 라이프 혜택까지',
    badges: ['U⁺ 모바일 전용'],
  },
  {
    id: 19,
    name: '유튜브 프리미엄 + 스타벅스 구독팩',
    price: 17900,
    monthlyPrice: 17900,
    category: 'OTT',
    benefits: ['유튜브 프리미엄', '스타벅스 5,000원 모바일카드'],
    description: '유튜브프리미엄과 매월 제공되는 스타벅스 5,000원 모바일카드!',
    badges: [],
  },
  {
    id: 20,
    name: '유튜브 프리미엄 + CGV 구독팩',
    price: 15900,
    monthlyPrice: 15900,
    category: 'OTT',
    benefits: ['유튜브 프리미엄', 'CGV 영화 1+1'],
    description: '유튜브는 광고없이 프리미엄 영화는 1+1 스마트하게!',
    badges: ['U⁺ 모바일 전용'],
  },
];
