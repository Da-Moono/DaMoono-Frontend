import { io, type Socket } from 'socket.io-client';

class SocketService {
  private socket: Socket | null = null;
  private sessionId: string | null = null;

  connect() {
    // 이미 연결되어 있으면 재연결하지 않음
    if (this.socket?.connected) {
      console.log('🔌 Socket 이미 연결됨:', this.socket.id);
      return this.socket;
    }

    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
    this.socket = io(apiUrl);

    this.socket.on('connect', () => {
      console.log('🔌 Socket 연결됨:', this.socket?.id);
    });

    this.socket.on('disconnect', () => {
      console.log('🔌 Socket 연결 해제');
    });

    return this.socket;
  }

  disconnect() {
    this.socket?.disconnect();
    this.socket = null;
    this.sessionId = null;
  }

  // 사용자: 상담 시작
  startConsult(userId: string, userName?: string) {
    this.socket?.emit('start-consult', { userId, userName });
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

  // 이벤트 리스너
  onSessionCreated(callback: (sessionId: string) => void) {
    this.socket?.on('session-created', (sessionId: string) => {
      this.sessionId = sessionId;
      callback(sessionId);
    });
  }

  onWaitingSessions(
    callback: (
      sessions: Array<{
        sessionId: string;
        userId: string;
        userName?: string;
        status: 'waiting' | 'connected';
        createdAt: Date;
      }>,
    ) => void,
  ) {
    this.socket?.on('waiting-sessions', callback);
  }

  onSessionsUpdated(
    callback: (
      sessions: Array<{
        sessionId: string;
        userId: string;
        userName?: string;
        status: 'waiting' | 'connected';
        createdAt: Date;
      }>,
    ) => void,
  ) {
    this.socket?.on('sessions-updated', callback);
  }

  onConsultantConnected(callback: () => void) {
    this.socket?.on('consultant-connected', callback);
  }

  onMessage(
    callback: (data: {
      message: string;
      sender: string;
      timestamp: Date;
    }) => void,
  ) {
    this.socket?.on('receive-message', callback);
  }

  onConsultEnded(callback: () => void) {
    this.socket?.on('consult-ended', callback);
  }

  getSessionId() {
    return this.sessionId;
  }
}

export default new SocketService();
