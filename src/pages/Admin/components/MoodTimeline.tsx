import { motion } from 'framer-motion';
import { useState } from 'react';
import * as s from '@/pages/Admin/style/MoodTimeline.css';

// 감정별 이모지 매핑
const MOOD_EMOJI: Record<string, string> = {
  분노: '😡',
  짜증: '😫',
  불안: '😰',
  실망: '😞',
  긴박: '🚨',
  '단순 문의': '🧐',
  '확인 중': '⏳',
  만족: '😊',
  안심: '😌',
  감사: '💚',
  기대: '✨',
};

interface MoodPoint {
  mood: string;
  reason: string;
}

interface MoodTimelineProps {
  phases: {
    start: MoodPoint;
    middle: MoodPoint;
    end: MoodPoint;
  };
}

const getMoodGroup = (mood: string): 'negative' | 'neutral' | 'positive' => {
  if (['분노', '짜증', '불안', '실망', '긴박'].includes(mood))
    return 'negative';
  if (['단순 문의', '확인 중'].includes(mood)) return 'neutral';
  return 'positive';
};

export default function MoodTimeline({ phases }: MoodTimelineProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const data = [
    { label: '시작', ...phases.start },
    { label: '중간', ...phases.middle },
    { label: '종료', ...phases.end },
  ];

  return (
    <div className={s.container}>
      <h3 className={s.title}>고객 감정 흐름</h3>

      <div className={s.timelineWrapper}>
        <div className={s.mainLine} />

        {data.map((item, index) => {
          const group = getMoodGroup(item.mood);
          const isDimmed = hoveredIndex !== null && hoveredIndex !== index;
          const isFocused = hoveredIndex === index;

          return (
            <motion.div
              key={item.label}
              className={s.pointContainer({ dimmed: isDimmed })}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              // 전체 scale은 제거하거나 아주 미세하게만 줍니다.
            >
              <div className={s.moodBadge}>
                {/* 이모지만 위로 올라감 */}
                <span className={s.emoji({ focused: isFocused })}>
                  {MOOD_EMOJI[item.mood]}
                </span>

                {/* 원은 선 위에 고정되어 크기만 커짐 */}
                <div className={s.circle({ group, focused: isFocused })} />
              </div>

              <div className={s.textSection({ focused: isFocused })}>
                <p className={s.moodLabel({ group })}>[{item.mood}]</p>
                <p className={s.reasonText}>{item.reason}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
