const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

// 회원가입
export const signup = async (data: {
  name: string;
  userId: string;
  password: string;
}) => {
  const response = await fetch(`${API_BASE_URL}/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || '회원가입에 실패했습니다.');
  }

  return response.json();
};

// 아이디 중복 확인
export const checkUserId = async (userId: string) => {
  const response = await fetch(
    `${API_BASE_URL}/auth/check-userid?userId=${userId}`,
    {
      credentials: 'include',
    },
  );

  if (!response.ok) {
    throw new Error('중복 확인에 실패했습니다.');
  }

  return response.json();
};

// 로그인
export const login = async (data: { userId: string; password: string }) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || '로그인에 실패했습니다.');
  }

  return response.json();
};

// 토큰 리프레시
export const refreshToken = async () => {
  const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
    method: 'POST',
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('토큰 갱신에 실패했습니다.');
  }

  return response.json();
};

// 로그인 상태 확인
export const getAuthStatus = async () => {
  const response = await fetch(`${API_BASE_URL}/auth/me`, {
    method: 'GET',
    credentials: 'include',
  });

  if (!response.ok) {
    // 401 / 403 → 비로그인 상태
    throw new Error('인증되지 않은 사용자입니다.');
  }

  return response.json();
};

// 로그아웃
export const logout = async () => {
  const response = await fetch(`${API_BASE_URL}/auth/logout`, {
    method: 'POST',
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('로그아웃에 실패했습니다.');
  }

  return response.json();
};
