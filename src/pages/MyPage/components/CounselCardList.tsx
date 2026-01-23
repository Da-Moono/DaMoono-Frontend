import * as css from '../styles/Counsel.css';
import type { CounselItem } from '../types/counsel';
import { CounselCard } from './CounselCard';

interface CounselCardListProps {
  items: CounselItem[];
}

export function CounselCardList({ items }: CounselCardListProps) {
  const grouped = items.reduce<Record<string, CounselItem[]>>((acc, cur) => {
    acc[cur.date] = acc[cur.date] ?? [];
    acc[cur.date].push(cur);
    return acc;
  }, {});

  return (
    <div className={css.list}>
      {Object.entries(grouped).map(([date, list]) => (
        <section key={date} className={css.section}>
          <h4 className={css.date}>{date}</h4>

          {list.map((item) => (
            <CounselCard
              key={item.id}
              content={item.content}
              summarized={item.summarized}
              onSummarize={() => {
                console.log('요약하기:', item.id);
              }}
            />
          ))}
        </section>
      ))}
    </div>
  );
}
