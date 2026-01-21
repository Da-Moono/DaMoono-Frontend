export interface CardData {
  title: string;
  price?: string;
  originalPrice?: string;
  discountPrice?: string;
  mainFeature?: string;
  details: Array<{ label: string; value: string }>;
}

export interface ReferenceData {
  plans: CardData[];
  subscriptions: CardData[];
  phones: CardData[];
  events: CardData[];
}

export const planData: CardData[] = [
  {
    title: '(넷플릭스) 5G 프리미엄 플러스',
    originalPrice: '월 105,000원',
    discountPrice: '24개월 약정 할인 | 월 78,750원',
    mainFeature: '무제한',
    details: [
      { label: '데이터/쉐어링', value: '100GB' },
      { label: '음성통화', value: '기본제공' },
      { label: '문자메시지', value: '기본제공' },
    ],
  },
  {
    title: '(유튜브 프리미엄) 5G 스페셜',
    originalPrice: '월 95,000원',
    discountPrice: '24개월 약정 할인 | 월 71,250원',
    mainFeature: '무제한',
    details: [
      { label: '데이터/쉐어링', value: '80GB' },
      { label: '음성통화', value: '기본제공' },
      { label: '문자메시지', value: '기본제공' },
    ],
  },
  {
    title: '(디즈니+) 5G 베이직 플러스',
    originalPrice: '월 85,000원',
    discountPrice: '24개월 약정 할인 | 월 63,750원',
    mainFeature: '무제한',
    details: [
      { label: '데이터/쉐어링', value: '60GB' },
      { label: '음성통화', value: '기본제공' },
      { label: '문자메시지', value: '기본제공' },
    ],
  },
  {
    title: '5G 라이트 플러스',
    originalPrice: '월 75,000원',
    discountPrice: '24개월 약정 할인 | 월 56,250원',
    mainFeature: '무제한',
    details: [
      { label: '데이터/쉐어링', value: '50GB' },
      { label: '음성통화', value: '기본제공' },
      { label: '문자메시지', value: '기본제공' },
    ],
  },
  {
    title: '5G 에센셜',
    originalPrice: '월 65,000원',
    discountPrice: '24개월 약정 할인 | 월 48,750원',
    mainFeature: '무제한',
    details: [
      { label: '데이터/쉐어링', value: '40GB' },
      { label: '음성통화', value: '기본제공' },
      { label: '문자메시지', value: '기본제공' },
    ],
  },
];

export const subscriptionData: CardData[] = [
  {
    title: '넷플릭스 프리미엄',
    price: '월 17,000원',
    details: [
      { label: '화질', value: '4K UHD' },
      { label: '동시 시청', value: '4명' },
      { label: '광고', value: '없음' },
    ],
  },
  {
    title: '유튜브 프리미엄',
    price: '월 14,900원',
    details: [
      { label: '광고', value: '없음' },
      { label: '백그라운드 재생', value: '지원' },
      { label: '오프라인 저장', value: '지원' },
    ],
  },
  {
    title: '디즈니+',
    price: '월 9,900원',
    details: [
      { label: '화질', value: '4K UHD' },
      { label: '동시 시청', value: '4명' },
      { label: '다운로드', value: '지원' },
    ],
  },
  {
    title: '웨이브',
    price: '월 7,900원',
    details: [
      { label: '화질', value: 'Full HD' },
      { label: '동시 시청', value: '2명' },
      { label: '광고', value: '없음' },
    ],
  },
];

export const phoneData: CardData[] = [
  {
    title: 'iPhone 15 Pro Max',
    price: '1,550,000원',
    details: [
      { label: '용량', value: '256GB' },
      { label: '디자인', value: '티타늄' },
      { label: '칩셋', value: 'A17 Pro' },
    ],
  },
  {
    title: 'Galaxy S24 Ultra',
    price: '1,698,400원',
    details: [
      { label: '용량', value: '512GB' },
      { label: '특징', value: 'S펜 내장' },
      { label: 'AI', value: 'Galaxy AI' },
    ],
  },
  {
    title: 'iPhone 15',
    price: '1,250,000원',
    details: [
      { label: '용량', value: '128GB' },
      { label: '디스플레이', value: '6.1인치' },
      { label: '칩셋', value: 'A16 Bionic' },
    ],
  },
  {
    title: 'Galaxy S24',
    price: '1,155,000원',
    details: [
      { label: '용량', value: '256GB' },
      { label: '디스플레이', value: '6.2인치' },
      { label: 'AI', value: 'Galaxy AI' },
    ],
  },
];

export const eventData: CardData[] = [
  {
    title: '신규가입 웰컴 혜택',
    price: '최대 30만원',
    details: [
      { label: '요금 할인', value: '3개월' },
      { label: '사은품', value: '무선이어폰' },
      { label: '데이터', value: '+10GB' },
    ],
  },
  {
    title: '가족 결합 할인',
    price: '최대 50만원',
    details: [
      { label: '할인', value: '월 2만원' },
      { label: '기간', value: '24개월' },
      { label: '대상', value: '2인 이상' },
    ],
  },
];

export const recommendedQuestions = [
  '구독(유독) 추천',
  '요금제 추천',
  '휴대폰 추천',
  '신규가입 이벤트',
  '채팅 상담사 연결',
];

// Structured reference data for backend consumption
export const referenceData: ReferenceData = {
  plans: planData,
  subscriptions: subscriptionData,
  phones: phoneData,
  events: eventData,
};

/**
 * Serializes reference data into a text format suitable for LangChain prompts.
 * This function converts the structured data into a human-readable format that
 * can be included in AI prompts for context-aware recommendations.
 *
 * @param category - Optional category to serialize ('plan', 'subscription', 'phone', 'event')
 *                   If not provided, all categories will be serialized
 * @returns A formatted string representation of the reference data
 */
export function getReferenceDataAsText(
  category?: 'plan' | 'subscription' | 'phone' | 'event',
): string {
  const formatCardData = (card: CardData): string => {
    const lines: string[] = [`- ${card.title}`];

    if (card.price) {
      lines.push(`  가격: ${card.price}`);
    }
    if (card.originalPrice) {
      lines.push(`  정가: ${card.originalPrice}`);
    }
    if (card.discountPrice) {
      lines.push(`  할인가: ${card.discountPrice}`);
    }
    if (card.mainFeature) {
      lines.push(`  주요 특징: ${card.mainFeature}`);
    }

    if (card.details && card.details.length > 0) {
      lines.push('  상세 정보:');
      card.details.forEach((detail) => {
        lines.push(`    - ${detail.label}: ${detail.value}`);
      });
    }

    return lines.join('\n');
  };

  const sections: string[] = [];

  if (!category || category === 'plan') {
    sections.push('## 요금제 (Plans)\n');
    sections.push(planData.map(formatCardData).join('\n\n'));
  }

  if (!category || category === 'subscription') {
    sections.push('\n## 구독 서비스 (Subscriptions)\n');
    sections.push(subscriptionData.map(formatCardData).join('\n\n'));
  }

  if (!category || category === 'phone') {
    sections.push('\n## 휴대폰 (Phones)\n');
    sections.push(phoneData.map(formatCardData).join('\n\n'));
  }

  if (!category || category === 'event') {
    sections.push('\n## 이벤트 (Events)\n');
    sections.push(eventData.map(formatCardData).join('\n\n'));
  }

  return sections.join('\n');
}
