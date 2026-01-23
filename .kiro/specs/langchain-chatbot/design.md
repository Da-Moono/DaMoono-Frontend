# Design Document

## Overview

LangChain 기반 백엔드와 연동하는 React + TypeScript 챗봇 애플리케이션을 설계합니다. Zustand를 활용한 전역 상태 관리, axios를 통한 HTTP 통신, 그리고 명확한 관심사 분리를 통해 확장 가능하고 유지보수가 용이한 구조를 구현합니다.

## Architecture

### 레이어 구조

```
Presentation Layer (Components)
    ↓
Business Logic Layer (Hooks)
    ↓
State Management Layer (Zustand Store)
    ↓
Data Access Layer (API Client)
    ↓
External API (LangChain Backend)
```

### 주요 설계 원칙

1. **단방향 데이터 흐름**: 사용자 입력 → 액션 → 상태 변경 → UI 업데이트
2. **관심사 분리**: 컴포넌트(UI), 훅(로직), 스토어(상태), API(통신)를 명확히 분리
3. **타입 안정성**: 모든 데이터 구조에 TypeScript 타입 적용
4. **확장성**: LangChain의 Prompt Template, Memory 등 향후 기능 추가 용이

## Components and Interfaces

### 1. Type Definitions (types/chat.ts)

```typescript
// 메시지 역할 타입
export type ChatRole = 'user' | 'assistant';

// 메시지 데이터 구조
export interface ChatMessage {
  id: number;
  role: ChatRole;
  content: string;
}

// LangChain API 요청 구조
export interface ChatRequest {
  message: string;
  history: Array<{ role: ChatRole; content: string }>;
}

// LangChain API 응답 구조
export interface ChatResponse {
  reply: string;
}
```

### 2. Zustand Store (store/chatStore.ts)

**상태:**
- `messages: ChatMessage[]` - 대화 메시지 배열
- `loading: boolean` - API 호출 진행 상태

**액션:**
- `addMessage(role: ChatRole, content: string): void` - 새 메시지 추가
- `setLoading(loading: boolean): void` - 로딩 상태 변경
- `resetChat(): void` - 대화 초기화

**구현 방식:**
- `create` 함수로 스토어 생성
- `set` 함수로 불변성 유지하며 상태 업데이트
- 자동 ID 생성 (Date.now() 활용)

### 3. API Client (lib/chatApi.ts)

**함수:**
- `sendChatMessage(message: string, history: ChatMessage[]): Promise<string>`

**동작:**
1. axios를 사용하여 POST `/api/chat` 호출
2. request body: `{ message, history }`
3. response에서 `reply` 추출하여 반환
4. 에러 발생 시 Mock 응답 반환 (개발 편의성)

**Mock 응답 조건:**
- 네트워크 에러 또는 404 에러 시
- 1초 지연 후 "죄송합니다. 현재 서버와 연결할 수 없습니다." 반환

### 4. Custom Hook (hooks/useChat.ts)

**반환값:**
- `messages: ChatMessage[]` - 현재 메시지 목록
- `loading: boolean` - 로딩 상태
- `sendMessage: (text: string) => Promise<void>` - 메시지 전송 함수

**sendMessage 로직:**
1. 빈 문자열 검증 (trim 후 체크)
2. 사용자 메시지를 스토어에 추가
3. 로딩 상태를 true로 설정
4. API 호출 (현재 history 포함)
5. AI 응답을 스토어에 추가
6. 로딩 상태를 false로 설정
7. 에러 발생 시 에러 메시지를 assistant 메시지로 추가

### 5. Component Hierarchy

```
ChatPage (pages/Chat/ChatPage.tsx)
  └─ ChatLayout (pages/Chat/ChatLayout.tsx)
      └─ ChatContainer (pages/Chat/components/ChatContainer.tsx)
          ├─ MessageList (pages/Chat/components/MessageList.tsx)
          │   └─ MessageItem (pages/Chat/components/MessageItem.tsx) [반복]
          └─ ChatInput (pages/Chat/components/ChatInput.tsx)
```

**각 컴포넌트 역할:**

- **ChatPage**: `/chat` 라우트 진입점, ChatLayout 렌더링
- **ChatLayout**: 전체 레이아웃 구성 (중앙 정렬, 높이 100vh)
- **ChatContainer**: useChat 훅 연결, 메시지 목록과 입력창 조합
- **MessageList**: 메시지 배열 렌더링, 로딩 표시
- **MessageItem**: 개별 메시지 UI (user/assistant 구분)
- **ChatInput**: 입력 필드와 전송 버튼, 로컬 상태 관리

## Data Models

### ChatMessage

```typescript
{
  id: number,           // 고유 식별자 (타임스탬프 기반)
  role: 'user' | 'assistant',  // 발신자 유형
  content: string       // 메시지 내용
}
```

### State Shape (Zustand)

```typescript
{
  messages: ChatMessage[],
  loading: boolean,
  addMessage: (role, content) => void,
  setLoading: (loading) => void,
  resetChat: () => void
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: 메시지 전송 완전성
*For any* 유효한 메시지 텍스트, sendMessage를 호출하면 사용자 메시지와 AI 응답이 순차적으로 messages 배열에 추가되어야 한다
**Validates: Requirements 1.1, 1.3**

### Property 2: 빈 메시지 거부
*For any* 공백만으로 구성된 문자열, sendMessage를 호출하면 메시지가 추가되지 않고 현재 상태가 유지되어야 한다
**Validates: Requirements 1.2**

### Property 3: 입력 필드 초기화
*For any* UI 상태에서 메시지를 전송하면 입력 필드가 비워져야 한다
**Validates: Requirements 1.4**

### Property 4: 메시지 역할별 스타일 구분
*For any* 메시지, role이 'user'이면 오른쪽 정렬 및 파란색 배경, 'assistant'이면 왼쪽 정렬 및 회색 배경으로 렌더링되어야 한다
**Validates: Requirements 2.1**

### Property 5: 메시지 ID 고유성
*For any* 메시지 목록, 모든 메시지의 ID는 고유해야 한다
**Validates: Requirements 2.2**

### Property 6: 로딩 상태 라운드 트립
*For any* 초기 상태, sendMessage 호출 시 loading이 true로 변경되었다가 API 완료 후 false로 복원되어야 한다
**Validates: Requirements 3.1, 3.3**

### Property 7: 로딩 중 중복 전송 방지
*For any* loading이 true인 상태, sendMessage 호출은 무시되어야 한다
**Validates: Requirements 3.2**

### Property 8: API 요청 구조 검증
*For any* 메시지와 히스토리, API 호출 시 { message, history } 형태의 요청이 전송되어야 한다
**Validates: Requirements 4.1**

### Property 9: API 응답 파싱
*For any* API 응답, reply 필드가 올바르게 파싱되어 assistant 메시지로 저장되어야 한다
**Validates: Requirements 4.2**

### Property 10: 에러 처리
*For any* API 에러, 에러 메시지가 assistant 메시지로 추가되어야 한다
**Validates: Requirements 4.4**

### Property 11: 스토어 상태 일관성
*For any* 스토어 상태 변경, 구독 중인 컴포넌트는 최신 상태를 받아야 한다
**Validates: Requirements 5.2**

## Error Handling

### API 에러 처리
- 네트워크 에러: Mock 응답 반환
- 타임아웃: 30초 후 에러 메시지 표시
- 서버 에러 (5xx): "서버 오류가 발생했습니다" 메시지 표시
- 클라이언트 에러 (4xx): "잘못된 요청입니다" 메시지 표시

### 입력 검증
- 빈 문자열: 전송 방지
- 공백만 있는 문자열: trim 후 검증
- 최대 길이: 제한 없음 (백엔드에서 처리)

### 상태 일관성
- API 호출 중 에러 발생 시에도 loading을 false로 복원
- 에러 메시지를 assistant 메시지로 추가하여 사용자에게 피드백 제공

## Testing Strategy

### Unit Testing

**테스트 대상:**
- `chatStore`: 액션 함수들의 상태 변경 로직
- `chatApi`: API 호출 및 Mock 응답 로직
- `useChat`: sendMessage 함수의 전체 흐름

**주요 테스트 케이스:**
- addMessage: 메시지 추가 및 ID 생성
- setLoading: 로딩 상태 변경
- resetChat: 상태 초기화
- sendChatMessage: 성공/실패 시나리오
- useChat.sendMessage: 빈 문자열 검증, API 호출, 에러 처리

### Property-Based Testing

**사용 라이브러리:** fast-check (JavaScript/TypeScript용 PBT 라이브러리)

**설정:**
- 각 속성 테스트는 최소 100회 반복 실행
- 각 테스트는 설계 문서의 속성 번호를 주석으로 명시
- 형식: `// Feature: langchain-chatbot, Property {number}: {property_text}`

**테스트 대상 속성:**
1. Property 1: 메시지 전송 완전성
2. Property 2: 빈 메시지 거부
3. Property 5: 메시지 ID 고유성
4. Property 6: 로딩 상태 라운드 트립
5. Property 7: 로딩 중 중복 전송 방지
6. Property 8: API 요청 구조 검증
7. Property 9: API 응답 파싱
8. Property 10: 에러 처리
9. Property 11: 스토어 상태 일관성

**Generator 전략:**
- 메시지 텍스트: 일반 문자열, 공백 문자열, 특수문자 포함 문자열
- 메시지 배열: 빈 배열, 단일 메시지, 다수 메시지
- API 응답: 성공 응답, 에러 응답, 잘못된 형식

### Integration Testing

**테스트 시나리오:**
- 사용자가 메시지를 입력하고 전송하는 전체 흐름
- 여러 메시지를 연속으로 전송하는 시나리오
- API 에러 발생 시 복구 시나리오

**테스트 도구:**
- React Testing Library: 컴포넌트 렌더링 및 사용자 상호작용
- MSW (Mock Service Worker): API 모킹

## Implementation Notes

### Zustand 설치
```bash
npm install zustand
```

### 파일 생성 순서
1. types/chat.ts - 타입 정의
2. store/chatStore.ts - 상태 관리
3. lib/chatApi.ts - API 클라이언트
4. hooks/useChat.ts - 비즈니스 로직
5. components - UI 컴포넌트들

### 기존 코드와의 통합
- 기존 `src/pages/Chat/types.ts`를 `src/types/chat.ts`로 이동
- 기존 컴포넌트들을 새로운 구조에 맞게 수정
- `src/api/chatApi.ts`를 `src/lib/chatApi.ts`로 이동

### 스타일링
- 현재는 인라인 스타일 사용
- 향후 vanilla-extract 또는 CSS 모듈로 전환 가능
