# Implementation Plan

- [x] 1. Zustand 설치 및 프로젝트 구조 설정









  - Zustand 패키지 설치
  - 필요한 폴더 구조 생성 (store, types, lib)
  - 기존 파일 이동 및 정리
  - _Requirements: 6.1, 6.2_

- [x] 2. 타입 정의 작성





  - src/types/chat.ts 파일 생성
  - ChatRole, ChatMessage, ChatRequest, ChatResponse 타입 정의
  - 기존 src/pages/Chat/types.ts 내용 통합
  - _Requirements: 6.2_

- [x] 3. Zustand 스토어 구현


- [x] 3.1 ChatStore 기본 구조 작성



  - src/store/chatStore.ts 파일 생성
  - messages, loading 상태 정의
  - addMessage, setLoading, resetChat 액션 구현
  - _Requirements: 5.1, 5.4_

- [x] 3.2 Property test for 메시지 ID 고유성






  - **Property 5: 메시지 ID 고유성**
  - **Validates: Requirements 2.2**

- [x] 3.3 Property test for 스토어 상태 일관성






  - **Property 11: 스토어 상태 일관성**
  - **Validates: Requirements 5.2**

- [x] 3.4 Unit tests for ChatStore 액션





  - addMessage 테스트
  - setLoading 테스트
  - resetChat 테스트
  - _Requirements: 5.1, 5.4_

- [x] 4. LangChain API 클라이언트 구현




- [x] 4.1 chatApi 함수 작성


  - src/lib/chatApi.ts 파일 생성 (기존 src/api/chatApi.ts 이동)
  - sendChatMessage 함수 구현
  - axios를 사용한 POST /api/chat 호출
  - Mock 응답 로직 추가 (에러 시)
  - _Requirements: 4.1, 4.2, 4.3, 4.4_

- [x] 4.2 Property test for API 요청 구조 검증






  - **Property 8: API 요청 구조 검증**
  - **Validates: Requirements 4.1**

- [x] 4.3 Property test for API 응답 파싱






  - **Property 9: API 응답 파싱**
  - **Validates: Requirements 4.2**

- [x] 4.4 Property test for 에러 처리






  - **Property 10: 에러 처리**
  - **Validates: Requirements 4.4**

- [x] 4.5 Unit tests for chatApi





  - 성공 시나리오 테스트
  - 에러 시나리오 테스트
  - Mock 응답 테스트
  - _Requirements: 4.1, 4.2, 4.3, 4.4_

- [x] 5. useChat 커스텀 훅 구현




- [x] 5.1 useChat 훅 기본 구조 작성


  - src/hooks/useChat.ts 파일 수정
  - ChatStore 연결
  - sendMessage 함수 구현
  - 빈 문자열 검증 로직
  - API 호출 및 에러 처리
  - _Requirements: 1.1, 1.2, 1.3, 3.1, 3.2, 3.3_

- [x] 5.2 Property test for 메시지 전송 완전성






  - **Property 1: 메시지 전송 완전성**
  - **Validates: Requirements 1.1, 1.3**

- [x] 5.3 Property test for 빈 메시지 거부










  - **Property 2: 빈 메시지 거부**
  - **Validates: Requirements 1.2**

- [x] 5.4 Property test for 로딩 상태 라운드 트립






  - **Property 6: 로딩 상태 라운드 트립**
  - **Validates: Requirements 3.1, 3.3**

- [x] 5.5 Property test for 로딩 중 중복 전송 방지














  - **Property 7: 로딩 중 중복 전송 방지**
  - **Validates: Requirements 3.2**

- [x] 5.6 Unit tests for useChat






  - sendMessage 전체 흐름 테스트
  - 빈 문자열 검증 테스트
  - 에러 처리 테스트
  - _Requirements: 1.1, 1.2, 1.3, 3.1, 3.2, 3.3_

- [x] 6. 컴포넌트 업데이트




- [x] 6.1 MessageItem 컴포넌트 수정


  - 타입 import 경로 수정 (src/types/chat.ts)
  - role별 스타일 구분 로직 확인
  - _Requirements: 2.1, 6.3, 6.4_

- [x] 6.2 MessageList 컴포넌트 수정


  - 타입 import 경로 수정
  - 로딩 표시 로직 확인
  - _Requirements: 2.2, 6.3, 6.4_

- [x] 6.3 ChatInput 컴포넌트 수정


  - 입력 필드 초기화 로직 확인
  - Enter 키 및 버튼 클릭 처리
  - _Requirements: 1.4, 6.3, 6.4_

- [x] 6.4 ChatContainer 컴포넌트 수정


  - useChat 훅 연결 확인
  - MessageList와 ChatInput 통합
  - _Requirements: 1.1, 6.3, 6.4_

- [x] 6.5 Property test for 메시지 역할별 스타일 구분






  - **Property 4: 메시지 역할별 스타일 구분**
  - **Validates: Requirements 2.1**

- [x] 6.6 Property test for 입력 필드 초기화




























  - **Property 3: 입력 필드 초기화**
  - **Validates: Requirements 1.4**



- [x] 7. 라우팅 확인 및 최종 통합






- [x] 7.1 RouterProvider 확인


  - createBrowserRouter 사용 확인
  - PAGE_PATHS 상수 사용 확인
  - / 및 /chat 경로 설정 확인
  - _Requirements: 7.1, 7.2, 7.3, 7.4_

- [x] 7.2 전체 애플리케이션 통합 테스트





  - 홈에서 챗봇 페이지로 이동
  - 메시지 전송 및 응답 확인
  - 에러 시나리오 확인
  - _Requirements: 1.1, 1.2, 1.3, 2.1, 2.2, 3.1, 3.2, 3.3_

- [x] 8. Checkpoint - 모든 테스트 통과 확인
  - Ensure all tests pass, ask the user if questions arise.

- [x] 9. Property-Based Testing 설정 및 실행

- [x] 9.1 fast-check 설치

  - npm install --save-dev fast-check @types/node
  - _Requirements: Testing Strategy_

- [x] 9.2 모든 Property 테스트 실행 및 검증

  - 각 테스트 100회 이상 반복 실행
  - 실패 케이스 분석 및 수정
  - _Requirements: All Correctness Properties_

- [x] 10. 통합 테스트 작성

- [x] 10.1 React Testing Library 설정

  - 필요한 패키지 설치
  - 테스트 환경 설정
  - _Requirements: Testing Strategy_

- [x] 10.2 전체 흐름 통합 테스트 작성

  - 메시지 전송 전체 흐름
  - 연속 메시지 전송
  - API 에러 복구
  - _Requirements: 1.1, 1.2, 1.3, 2.1, 2.2, 3.1, 3.2, 3.3, 4.4_
