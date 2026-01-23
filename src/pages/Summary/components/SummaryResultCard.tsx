import bottomImage from '@/pages/Summary/assets/bottom.png';
import * as s from '@/pages/Summary/style/SummaryResultCard.css';
import ActionItem from './atoms/ActionItem';
import Badge from './atoms/Badge';

// 개별 핵심 조치 아이템의 타입
interface CoreAction {
  id: number;
  icon: string;
  title: string;
  description: string;
}

// SummaryResultCard가 받을 전체 데이터의 타입
interface SummaryResultData {
  category: string; // 배지에 들어갈 텍스트 (예: '품질')
  summary: string; // 메인 요약 문구
  coreActions: CoreAction[]; // 핵심 조치 리스트 객체 배열
}

const colors: ('orange' | 'blue' | 'pink')[] = ['orange', 'blue', 'pink'];

export default function SummaryResultCard({
  category,
  summary,
  coreActions,
}: SummaryResultData) {
  return (
    <div className={s.CardContainer}>
      <div className={s.header}>
        <Badge category={category} />
        <p>이번 상담의 결과 ✨</p>
      </div>

      <div className={s.content}>
        <h2 className={s.summaryWrapper}>
          <span className={s.summaryTitle}>{summary}</span>
        </h2>
        <p className={s.actionTitle}>처리된 핵심 조치</p>
        {coreActions.map((action, index) => (
          <div key={action.id} className={s.actionList}>
            <ActionItem action={action} variant={colors[index % 3]} />
          </div>
        ))}
      </div>

      <div className={s.imgWrapper}>
        <img src={bottomImage} alt="character" className={s.bottomImg} />
      </div>
    </div>
  );
}
