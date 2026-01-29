import type { Subscribe } from '@/pages/Subscribe/types';

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  import.meta.env.VITE_API_URL ||
  'https://damoono-backend-production.up.railway.app';

/**
 * 구독 목록을 가져옵니다.
 * @returns Promise<Subscribe[]>
 */
export async function getSubscribes(): Promise<Subscribe[]> {
  try {
    // 여러 가능한 엔드포인트 시도
    let response = await fetch(`${API_BASE_URL}/reference/subscribes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // 404인 경우 다른 경로 시도
    if (!response.ok && response.status === 404) {
      console.warn(
        '/reference/subscribes가 404입니다. /reference/subscribers를 시도합니다.',
      );
      response = await fetch(`${API_BASE_URL}/reference/subscribers`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // API 응답 로깅 (디버깅용)
    console.log('API 응답 데이터:', data);

    // biome-ignore lint/suspicious/noExplicitAny: API 응답 타입이 동적이므로 any 사용 필요
    let subscribesArray: any[] = [];

    // API 응답이 배열인 경우
    if (Array.isArray(data)) {
      subscribesArray = data;
    }
    // API 응답이 객체이고 subscribes 속성을 가진 경우
    else if (data && typeof data === 'object' && 'subscribes' in data) {
      subscribesArray = Array.isArray(data.subscribes) ? data.subscribes : [];
    }
    // API 응답이 객체이고 subscribers 속성을 가진 경우 (fallback)
    else if (data && typeof data === 'object' && 'subscribers' in data) {
      subscribesArray = Array.isArray(data.subscribers) ? data.subscribers : [];
    }
    // 예상치 못한 형식
    else {
      console.warn('API 응답이 배열이 아닙니다:', data);
      return [];
    }

    // 백엔드 응답을 프론트엔드 타입에 맞게 변환
    // biome-ignore lint/suspicious/noExplicitAny: API 응답 아이템 타입이 동적이므로 any 사용 필요
    const mappedSubscribes: Subscribe[] = subscribesArray.map((item: any) => {
      console.log('원본 아이템:', item);

      // benefits와 badges가 JSON 문자열인 경우 파싱
      let benefits: string[] = [];
      if (item.benefits) {
        if (typeof item.benefits === 'string') {
          try {
            benefits = JSON.parse(item.benefits);
          } catch {
            benefits = [item.benefits];
          }
        } else if (Array.isArray(item.benefits)) {
          benefits = item.benefits;
        }
      }

      let badges: string[] = [];
      if (item.badges) {
        if (typeof item.badges === 'string') {
          try {
            badges = JSON.parse(item.badges);
          } catch {
            badges = item.badges ? [item.badges] : [];
          }
        } else if (Array.isArray(item.badges)) {
          badges = item.badges;
        }
      }

      // snake_case 필드명 지원
      return {
        id: item.id ?? item.subscribe_id ?? item.subscribeId ?? 0,
        name: item.name ?? item.subscribe_name ?? item.subscribeName ?? '',
        price:
          item.price ??
          item.total_price ??
          item.totalPrice ??
          item.monthly_price ??
          item.monthlyPrice ??
          0,
        monthlyPrice:
          item.monthly_price ?? item.monthlyPrice ?? item.price ?? 0,
        category: (item.category ??
          item.category_type ??
          item.categoryType ??
          'OTT') as Subscribe['category'],
        benefits:
          benefits.length > 0
            ? benefits
            : (item.benefit_list ?? item.benefitList ?? []),
        description: item.description ?? item.desc ?? '',
        badges: badges.length > 0 ? badges : (item.tags ?? []),
      };
    });

    console.log('변환된 구독 데이터:', mappedSubscribes);
    return mappedSubscribes;
  } catch (error) {
    console.error('구독 목록을 가져오는 중 오류 발생:', error);
    throw error;
  }
}
