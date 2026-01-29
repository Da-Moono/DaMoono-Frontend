import type { CounselItem } from '@/pages/MyPage/types/counsel';

const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  import.meta.env.VITE_API_BASE_URL ||
  'http://localhost:3000';

export async function getCounselSummary(sessionId: string | null) {
  const res = await fetch(
    `${API_BASE_URL}/summary/consults/${sessionId}/user`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    },
  );

  if (!res.ok) {
    throw new Error('상담 내역 조회 실패');
  }

  const data: CounselItem[] = await res.json();
  return data;
}

export async function fetchCounselList(params?: {
  sort?: 'latest' | 'oldest';
  page?: number;
  size?: number;
}) {
  const query = new URLSearchParams();

  if (params?.sort) query.append('sort', params.sort);
  if (params?.page) query.append('page', String(params.page));
  if (params?.size) query.append('size', String(params.size));

  const res = await fetch(`${API_BASE_URL}/summary/consults/history`, {
    method: 'GET',
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('상담 내역 목록 조회 실패');
  }

  return res.json();
}

// 상담사용 완료된 상담 요약 조회
export async function getConsultantSummary(sessionId: string) {
  const res = await fetch(
    `${API_BASE_URL}/summary/consults/${sessionId}/consultant`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    },
  );

  if (!res.ok) {
    throw new Error('상담 요약 조회 실패');
  }

  return res.json();
}

// 완료된 상담 목록 조회 (상담사용)
export async function fetchCompletedConsults() {
  const res = await fetch(`${API_BASE_URL}/summary/consults/completed`, {
    method: 'GET',
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('완료된 상담 목록 조회 실패');
  }

  return res.json();
}
