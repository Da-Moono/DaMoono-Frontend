<div align="center">

## 실시간 상담 및 AI 기반 상담 요약 통신사 플랫폼, 다무너 (DaMoono) 🐙

<img width="750" height="400" alt="image" src="https://github.com/user-attachments/assets/ff880c6a-aff5-4124-b319-f3e4be3210da" />


**다무너(DaMoono)** 는 
사용자 맞춤형 최적의 요금제를 추천하고,  
AI 챗봇과 실시간 상담사 연결을 결합하여  
**AI를 통한 상담 요약까지 제공하는 통합 요금제 상담 서비스**입니다.

📑 **PPT** : [발표 자료 링크](여기에_PPT_링크)  
🌐 **배포 링크** : [서비스 바로가기](여기에_배포_링크)  
🎥 **시연 영상** : [Youtube 시연 영상](여기에_Youtube_링크)

</div>

---

## 📌 프로젝트 개요

| 항목     | 내용                                |
| ------ | --------------------------------- |
| 프로젝트명  | 다무너 (DaMoono)                     |
| 서비스 주제 | 실시간 상담 · AI 기반 상담 요약 |
| 해결 방식  | AI 챗봇 및 요약 + 실시간 상담 병행                 |
| 개발 기간  | 2026.01.12 ~ 2026.01.30           |
| 팀 구성   | Frontend 6명 · Backend 1명          |

---

## 🔧 주요 기능

| 기능 미리보기 | 기능 설명 |
| --- | --- |
| ![이미지 준비중]() | **1. 🔐 로그인 & 인증 시스템**<br><br>• 로그인 여부에 따라 접근 가능한 페이지 제어<br>• 인증 정보는 보안성을 고려해 쿠키 기반으로 관리<br>• 전역 상태 관리로 새로고침·페이지 이동 시 로그인 상태 유지<br>• 인증 만료 또는 실패 시 로그인 페이지로 안전하게 리다이렉트 |
| ![이미지 준비중]() | **2. 🧠 AI 챗봇 요금제 추천 (텍스트 / 음성)**<br><br>• OpenAI 기반 챗봇과 대화하며 요금제 추천 제공<br>• LangChain Conversation Chain 기반 대화 흐름 설계<br>• 의도 분석 → 프롬프트 생성 → 요금제 후보 도출 → 카드형 응답 렌더링 구조<br>• 텍스트 입력 / Web Speech API 기반 음성 입력 모두 지원<br>• 성향 테스트 결과를 프롬프트 컨텍스트에 포함해 추천 정확도 향상<br>• 정확 모드 / 자연 모드 전환 가능<br>• 챗봇 이탈 후 재접속 시 대화 히스토리 유지 |
| ![이미지 준비중]() | **3. 💬 실시간 1:1 상담 시스템 (WebSocket)**<br><br>• AI 상담으로 해결되지 않는 경우를 대비한 실시간 상담사 연결 기능<br>• Socket.IO 기반 WebSocket 통신으로 사용자–상담사 1:1 매칭<br>• 상담 요청 → 대기 → 연결 → 종료 단계의 세션 상태 관리<br>• Room 기반 메시지 중계 구조<br>• 상담 종료 시 세션 및 소켓 정리로 안정적인 연결 유지 |
| ![이미지 준비중]() | **4. 📊 요금제 탐색 및 비교 시각화**<br><br>• 통신망(LTE/5G), 가격, 데이터, 혜택 기준 요금제 탐색<br>• 요금제 공통 데이터 모델 정의로 필터·정렬 로직 단순화<br>• Chart.js 기반 요금·데이터·혜택 비교 시각화<br>• Flip Card UI로 핵심 정보 / 상세 정보 단계적 노출<br>• Framer Motion으로 비교 모드 전환 애니메이션 구현 |
| ![이미지 준비중]() | **5. 🎭 사용자 맞춤형 요금제 추천**<br><br>• 데이터 사용량, 통화 빈도, 가격 민감도 등 질문 구성<br>• 점수 기반 로직을 통한 사용자 맞춤형 요금제 제공 서비스 <br>• 질문 폼 재사용 가능하도록 구현 |
| ![이미지 준비중]() | **6. 📱 채팅 모드 분리 구조**<br><br>• **AI 채팅**: 요금제 추천 및 정보 제공<br>• **상담 채팅**: WebSocket 기반 실시간 1:1 상담<br>• **관리자 모드**: 상담 세션 관리 및 상담사 전용 UI<br>• **가이드 모드**: FAQ 및 서비스 이용 안내 제공 |
| ![이미지 준비중]() | **7. 📝 상담 요약 및 히스토리**<br><br>• AI 기반 상담 내용 자동 요약<br>• 마이페이지에서 과거 상담 내역 조회<br>• 상담별 주요 내용 및 추천 요금제 확인 |
| ![이미지 준비중]() | **8. 📚 고객 지원 가이드**<br><br>• 군인 요금제 가이드<br>• 미성년자 가입 안내<br>• 대리인 가입 절차 안내<br>• FAQ 및 자주 묻는 질문 |
| ![이미지 준비중]() | **9. 🎨 3D 인터랙티브 UI**<br><br>• Three.js 기반 3D 마스코트 애니메이션<br>• React Three Fiber로 로딩 화면 구현<br>• 사용자 인터랙션에 반응하는 동적 UI |


## ⚔️ 기술 스택
| 분야         | 기술                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Frontend   | ![React](https://img.shields.io/badge/React-61DAFB?logo=react\&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript\&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite\&logoColor=white) ![React Router](https://img.shields.io/badge/React%20Router-CA4245?logo=reactrouter) ![Vanilla Extract](https://img.shields.io/badge/Vanilla%20Extract-CB9DF0) |
| 3D / UI | ![Three.js](https://img.shields.io/badge/Three.js-000000?logo=three.js\&logoColor=white) ![React Three Fiber](https://img.shields.io/badge/React%20Three%20Fiber-000000) ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-black?logo=framer) ![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?logo=chartdotjs\&logoColor=white)                                                                                                                                                                                                                                                                                                       |
| Backend    | ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js\&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?logo=express) ![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?logo=socket.io) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript\&logoColor=white)                                                                                                                                                                                                                                                                       |
| AI         | ![LangChain](https://img.shields.io/badge/LangChain-4B0082) ![OpenAI](https://img.shields.io/badge/OpenAI-412991?logo=openai\&logoColor=white)                                                                                                                                                                                                                                                                                                                                                              |
| Deploy     | ![Railway](https://img.shields.io/badge/Railway-0B0D0E?logo=railway\&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel\&logoColor=white)                                                                                                                                                                                                                                                                                                                                    |
| Design & Collaboration  | ![Figma](https://img.shields.io/badge/Figma-F24E1E?logo=figma\&logoColor=white) ![Notion](https://img.shields.io/badge/Notion-000000?logo=notion\&logoColor=white)                                                                                                                                                                                                                                                                                                                                    |
| Dev Tools  | ![Git](https://img.shields.io/badge/Git-F05032?logo=git\&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github) ![Biome](https://img.shields.io/badge/Biome-60A5FA) ![Lefthook](https://img.shields.io/badge/Lefthook-FF1E1E) ![Vitest](https://img.shields.io/badge/Vitest-6E9F18?logo=vitest\&logoColor=white)                                                                                                                                                                                                                           |


## 📦 설치 및 실행

### 환경 변수 설정
**Frontend (.env)**
```env
VITE_API_URL=https://damoono-backend-production.up.railway.app
VITE_API_BASE_URL=https://damoono-backend-production.up.railway.app
```

**Backend (.env)**
```env
PORT=3000
OPENAI_API_KEY=your_openai_api_key_here
NODE_ENV=development
```

### 설치 및 실행
```bash
cd DaMoono-Frontend
npm install
npm run dev
```

```bash
cd DaMoono-Backend
npm install
npm run dev
```

## 🏗️ 시스템 아키텍처
<img width="891" height="371" alt="image" src="https://github.com/user-attachments/assets/634658b6-132a-4b19-b61c-17f33e5fa13b" />
```
Frontend (React + Vite)
   ↕ REST API / WebSocket
Backend (Node.js + Express + Socket.IO)
   ↕
LangChain + OpenAI API
```

## 🔄 플로우 차트

**Service Flow**
<img width="4377" height="2305" alt="플로우 차트 - service" src="https://github.com/user-attachments/assets/89d17c43-6c39-49d6-b41c-83177ce71b56" />

**Admin Flow**
<img width="3744" height="1610" alt="플로우 차트 - admin" src="https://github.com/user-attachments/assets/b468dd41-a5fc-4a43-94be-ffee510e6b6b" />

**상담 흐름**

1. 상담 요청
2. 대기 세션 등록
3. 상담사 매칭
4. 실시간 상담
5. 상담 종료 및 요약

---

## 👥 팀원 및 역할
| 프로필 | 이름 | 주요 역할 및 기여 |
| :---: | --- | --- |
| <img width="100" height="100" alt="김예린" src="https://github.com/user-attachments/assets/1402d72e-21bf-4ce8-98a2-56a6dfba2aed" /> | **김예린**<br/>[@yerroong](https://github.com/yerroong) | **Frontend · AI**<br/>팀장으로, OpenAI + LangChain 기반 텍스트·음성 AI 챗봇 프론트·백엔드 연동 구현, 요금제·구독 상품 응답 로직 설계, Socket.IO 기반 실시간 상담 채팅 통신 구현, 상담사 채팅 UI 개발, 챗봇 대화 흐름·프롬프트 설계 및 챗봇 매뉴얼 제작 |
| <img width="100" height="100" alt="류종현" src="https://via.placeholder.com/100" /> | **류종현**<br/>[@jonghyunRyu](https://github.com/jonghyunRyu) | **Frontend**<br/>마이페이지 및 관리자 페이지 UI 구현, 상담 이력·이용 데이터 시각화, 요금제·구독 정보 조회 UI 개발, 다중 데이터 로딩 렌더링 최적화 및 3D 로딩 UI 적용 |
| <img width="100" height="100" alt="양해강" src="https://via.placeholder.com/100" /> | **양해강**<br/>[@Inoansta](https://github.com/Inoansta) | **Backend · AI**<br/>백엔드 프로젝트 및 DB 초기 셋업, 회원가입·인증 API 구현, REST API 설계, 프론트엔드 연동 및 서비스 배포 환경 구성, AI 기능 연동을 위한 서버 구조 설계 |
| <img width="100" height="100" alt="이해니" src="https://via.placeholder.com/100" /> | **이해니**<br/>[@haeni82](https://github.com/haeni82) | **Frontend**<br/>상담 요약 페이지(UI) 구현, 유저용 상담 요약 프롬프트(JSON) 설계, 상담사 WebSocket 양방향 통신 구조 설계, 상담 요약 및 후속 액션 제안 기능 기획 |
| <img width="100" height="100" alt="이혁준" src="https://via.placeholder.com/100" /> | **이혁준**<br/>[@Lilium0422](https://github.com/Lilium0422) | **Frontend**<br/>홈·온보딩·성향 분석 페이지 UI 및 컴포넌트 구현, 사용자 성향 분석 로직 설계, 공용 레이아웃(헤더·하단 메뉴) 및 서비스 가이드 UI 개발 |
| <img width="100" height="100" alt="유덕현" src="https://github.com/user-attachments/assets/f220a58f-7388-4cc2-ac11-d1d82f052084" /> | **유덕현**<br/>[@Ydh0622](https://github.com/Ydh0622) | **Frontend**<br/>FAQ 페이지 및 군인·미성년자·대리인 가입 시 구비 서류 안내 UI 구현, 이미지 애니메이션 및 인터랙션 마무리 |
