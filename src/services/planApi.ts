import type { Plan } from '@/pages/Plan/types';

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  import.meta.env.VITE_API_URL ||
  'https://damoono-backend-production.up.railway.app';

/**
 * 요금제 목록을 가져옵니다.
 * @returns Promise<Plan[]>
 */
export async function getPlans(): Promise<Plan[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/reference/plans`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // API 응답 로깅 (디버깅용)
    console.log('API 응답 데이터:', data);

    // biome-ignore lint/suspicious/noExplicitAny: API 응답 타입이 동적이므로 any 사용 필요
    let plansArray: any[] = [];

    // API 응답이 배열인 경우
    if (Array.isArray(data)) {
      plansArray = data;
    }
    // API 응답이 객체이고 plans 속성을 가진 경우
    else if (data && typeof data === 'object' && 'plans' in data) {
      plansArray = Array.isArray(data.plans) ? data.plans : [];
    }
    // 예상치 못한 형식
    else {
      console.warn('API 응답이 배열이 아닙니다:', data);
      return [];
    }

    // 백엔드 응답을 프론트엔드 타입에 맞게 변환
    // biome-ignore lint/suspicious/noExplicitAny: API 응답 아이템 타입이 동적이므로 any 사용 필요
    const mappedPlans: Plan[] = plansArray.map((item: any) => {
      console.log('원본 아이템:', item);

      // snake_case 필드명 지원
      const overageSpeed =
        item.overage_speed_mbps ??
        item.overageSpeedMbps ??
        item.overageSpeed ??
        item.speed;
      const overageSpeedMbps =
        overageSpeed !== undefined && overageSpeed !== null
          ? typeof overageSpeed === 'string'
            ? parseFloat(overageSpeed)
            : overageSpeed
          : null;

      return {
        id: item.id ?? item.planId ?? 0,
        name: item.name ?? item.planName ?? '',
        price: item.price ?? item.monthlyPrice ?? 0,
        dataAmountMb:
          item.data_amount_mb ??
          item.dataAmountMb ??
          item.dataAmount ??
          item.data ??
          0,
        overageSpeedMbps: overageSpeedMbps,
        voiceMinutes:
          item.voice_minutes ??
          item.voiceMinutes ??
          item.voice ??
          item.callMinutes ??
          -1,
        smsIncluded:
          item.sms_included ??
          item.smsIncluded ??
          item.sms ??
          item.messageCount ??
          0,
        networkType: (item.network_type ??
          item.networkType ??
          item.network ??
          'LTE') as Plan['networkType'],
        subscriptionServices: (item.subscription_services ??
          item.subscriptionServices ??
          item.ottServices ??
          item.ott ??
          []) as Plan['subscriptionServices'],
        badges: item.badges ?? item.tags ?? [],
      };
    });

    console.log('변환된 요금제 데이터:', mappedPlans);
    return mappedPlans;
  } catch (error) {
    console.error('요금제 목록을 가져오는 중 오류 발생:', error);
    throw error;
  }
}
