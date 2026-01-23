import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import mic from '@/assets/images/mic.png';
import * as styles from '../style/VoiceRecorder.css.ts';

interface VoiceRecorderProps {
  onTranscript: (text: string) => void;
  isListening: boolean;
  onListeningChange: (listening: boolean) => void;
}

export interface VoiceRecorderRef {
  startRecording: () => boolean;
}

const VoiceRecorder = forwardRef<VoiceRecorderRef, VoiceRecorderProps>(
  ({ onTranscript, isListening, onListeningChange }, ref) => {
    const [displayText, setDisplayText] = useState('');
    const recognitionRef = useRef<SpeechRecognition | null>(null);
    const isActiveRef = useRef(false);
    const silenceTimerRef = useRef<number | null>(null);
    const finalTranscriptRef = useRef('');

    const clearSilenceTimer = useCallback(() => {
      if (silenceTimerRef.current) {
        clearTimeout(silenceTimerRef.current);
        silenceTimerRef.current = null;
      }
    }, []);

    const cleanup = useCallback(() => {
      isActiveRef.current = false;
      onListeningChange(false);
      setDisplayText('');
      finalTranscriptRef.current = '';

      // recognition 인스턴스 완전히 제거
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (_e) {
          // ignore
        }
        recognitionRef.current = null;
      }
    }, [onListeningChange]);

    const handleStop = useCallback(() => {
      clearSilenceTimer();

      // 최종 텍스트가 있으면 전송
      if (finalTranscriptRef.current) {
        onTranscript(finalTranscriptRef.current);
      }

      cleanup();
    }, [clearSilenceTimer, onTranscript, cleanup]);

    const startSilenceTimer = useCallback(() => {
      clearSilenceTimer();
      silenceTimerRef.current = window.setTimeout(() => {
        console.log('3초 침묵 감지, 자동 종료');
        handleStop();
      }, 3000);
    }, [clearSilenceTimer, handleStop]);

    const resetSilenceTimer = useCallback(() => {
      clearSilenceTimer();
      startSilenceTimer();
    }, [clearSilenceTimer, startSilenceTimer]);

    const createRecognition = useCallback(() => {
      if (
        !('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)
      ) {
        return null;
      }

      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();

      recognition.lang = 'ko-KR';
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onstart = () => {
        console.log('Recognition started');
        isActiveRef.current = true;
        startSilenceTimer();
      };

      recognition.onresult = (event) => {
        // 침묵 타이머 리셋
        resetSilenceTimer();

        let interimText = '';
        let finalText = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalText += transcript;
          } else {
            interimText += transcript;
          }
        }

        if (finalText) {
          finalTranscriptRef.current +=
            (finalTranscriptRef.current ? ' ' : '') + finalText;
        }

        // 화면에 표시할 텍스트 (최종 + 중간)
        const displayContent =
          finalTranscriptRef.current + (interimText ? ` ${interimText}` : '');
        setDisplayText(displayContent || '말씀해주세요');
      };

      recognition.onerror = (event) => {
        // abort와 no-speech는 정상적인 상황이므로 무시
        if (event.error === 'aborted' || event.error === 'no-speech') {
          return;
        }
        console.error('음성 인식 오류:', event.error);
        clearSilenceTimer();
        cleanup();
      };

      recognition.onend = () => {
        console.log('Recognition ended');
        clearSilenceTimer();

        // 이미 cleanup 되었으면 무시
        if (!isActiveRef.current) {
          return;
        }

        // 최종 텍스트가 있으면 전송
        if (finalTranscriptRef.current) {
          onTranscript(finalTranscriptRef.current);
        }

        cleanup();
      };

      return recognition;
    }, [
      startSilenceTimer,
      resetSilenceTimer,
      clearSilenceTimer,
      cleanup,
      onTranscript,
    ]);

    const startRecording = useCallback(() => {
      // 이미 실행 중이면 무시
      if (isActiveRef.current) {
        console.log('Already recording');
        return false;
      }

      // 새로운 recognition 인스턴스 생성
      const recognition = createRecognition();

      if (!recognition) {
        alert('이 브라우저는 음성 인식을 지원하지 않습니다.');
        return false;
      }

      try {
        finalTranscriptRef.current = '';
        setDisplayText('말씀해주세요');
        recognitionRef.current = recognition;
        recognition.start();
        onListeningChange(true);
        return true;
      } catch (error) {
        console.error('음성 인식 시작 오류:', error);
        cleanup();
        return false;
      }
    }, [createRecognition, onListeningChange, cleanup]);

    useImperativeHandle(ref, () => ({
      startRecording,
    }));

    // cleanup on unmount
    useEffect(() => {
      return () => {
        clearSilenceTimer();
        if (recognitionRef.current) {
          try {
            recognitionRef.current.abort();
          } catch (_e) {
            // ignore
          }
        }
      };
    }, [clearSilenceTimer]);

    return (
      <>
        {isListening && (
          <div className={styles.recordingOverlay}>
            <div className={styles.recordingContent}>
              <div className={styles.micIconWrapper}>
                <img
                  src={mic}
                  alt="녹음 중"
                  className={styles.recordingMicIcon}
                />
                <div className={styles.pulseRing} />
                <div className={styles.pulseRing2} />
              </div>
              <p className={styles.recordingText}>듣고 있어요...</p>
              <p className={styles.recordingSubText}>
                {displayText || '말씀해주세요'}
              </p>
              <button
                type="button"
                className={styles.stopButton}
                onClick={handleStop}
              >
                녹음 중지
              </button>
            </div>
          </div>
        )}
      </>
    );
  },
);

VoiceRecorder.displayName = 'VoiceRecorder';

export default VoiceRecorder;
