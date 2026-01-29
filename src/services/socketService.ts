import { io, type Socket } from 'socket.io-client';

class SocketService {
  private socket: Socket | null = null;
  private sessionId: string | null = null;

  connect() {
    if (this.socket?.connected) {
      return this.socket;
    }

    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
    this.socket = io(apiUrl, { withCredentials: true });

    this.socket.on('connect', () => {
      // 연결됨
    });

    this.socket.on('disconnect', () => {
      // 연결 해제
    });

    return this.socket;
  }

  disconnect() {
    this.socket?.disconnect();
    this.socket = null;
    this.sessionId = null;
  }

  // 사용자: 상담 시작
  startConsult(userName: string, userRole?: string) {
    const data = { userName, userRole };
    this.socket?.emit('start-consult', data);
  }

  // 상담사: 세션 참여
  joinSession(sessionId: string) {
    this.sessionId = sessionId;
    this.socket?.emit('consultant-join', sessionId);
  }

  // 메시지 전송
  sendMessage(message: string, sender: 'user' | 'consultant') {
    if (this.sessionId) {
      this.socket?.emit('send-message', {
        sessionId: this.sessionId,
        message,
        sender,
      });
    }
  }

  // 입력 중 상태 전송
  sendTyping(sender: 'user' | 'consultant', isTyping: boolean) {
    if (this.sessionId) {
      this.socket?.emit('typing', {
        sessionId: this.sessionId,
        sender,
        isTyping,
      });
    }
  }

  // 상담 종료
  endConsult() {
    if (this.sessionId) {
      this.socket?.emit('end-consult', this.sessionId);
    }
  }

  // 대기 중인 세션 목록 요청
  getWaitingSessions() {
    this.socket?.emit('get-waiting-sessions');
  }

  // 완료된 세션 목록 요청
  getCompletedSessions() {
    this.socket?.emit('get-completed-sessions');
  }

  // 이벤트 리스너
  onSessionCreated(callback: (sessionId: string) => void) {
    this.socket?.off('session-created'); // 기존 리스너 제거
    this.socket?.on('session-created', (sessionId: string) => {
      this.sessionId = sessionId;
      callback(sessionId);
    });
  }

  onWaitingSessions(
    callback: (
      sessions: Array<{
        sessionId: string;
        userName: string;
        status: 'waiting' | 'connected';
        createdAt: Date;
      }>,
    ) => void,
  ) {
    this.socket?.off('waiting-sessions'); // 기존 리스너 제거
    this.socket?.on('waiting-sessions', callback);
  }

  onSessionsUpdated(
    callback: (
      sessions: Array<{
        sessionId: string;
        userName: string;
        status: 'waiting' | 'connected';
        createdAt: Date;
      }>,
    ) => void,
  ) {
    this.socket?.off('sessions-updated'); // 기존 리스너 제거
    this.socket?.on('sessions-updated', callback);
  }

  onConsultantConnected(callback: () => void) {
    this.socket?.off('consultant-connected'); // 기존 리스너 제거
    this.socket?.on('consultant-connected', callback);
  }

  onMessage(
    callback: (data: {
      message: string;
      sender: string;
      timestamp: Date;
    }) => void,
  ) {
    this.socket?.off('receive-message'); // 기존 리스너 제거
    this.socket?.on('receive-message', callback);
  }

  onConsultEnded(callback: () => void) {
    this.socket?.off('consult-ended'); // 기존 리스너 제거
    this.socket?.on('consult-ended', callback);
  }

  onTyping(callback: (data: { sender: string; isTyping: boolean }) => void) {
    this.socket?.off('typing'); // 기존 리스너 제거
    this.socket?.on('typing', callback);
  }

  onCompletedSessions(
    callback: (
      sessions: Array<{
        sessionId: string;
        userName: string;
        completedAt: Date;
      }>,
    ) => void,
  ) {
    this.socket?.off('completed-sessions'); // 기존 리스너 제거
    this.socket?.on('completed-sessions', callback);
  }

  onCompletedSessionsUpdated(
    callback: (
      sessions: Array<{
        sessionId: string;
        userName: string;
        completedAt: Date;
      }>,
    ) => void,
  ) {
    this.socket?.off('completed-sessions-updated'); // 기존 리스너 제거
    this.socket?.on('completed-sessions-updated', callback);
  }

  getSessionId() {
    return this.sessionId;
  }

  setSessionId(sessionId: string) {
    this.sessionId = sessionId;
  }
}

export default new SocketService();
