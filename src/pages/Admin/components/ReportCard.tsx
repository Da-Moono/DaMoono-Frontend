import * as s from '@/pages/Admin/style/ReportCard.css';
import Badge from '@/pages/Summary/components/atoms/Badge';

interface ReportCardProps {
  data?: {
    category: string;
    outcome: { value: string; reason: string };
    re_contact: { value: string; reason: string };
  };
  user?: string;
}

export default function ReportCard({ data, user }: ReportCardProps) {
  if (!data) return null;
  console.log(user);
  return (
    <div className={s.CardContainer}>
      <div className={s.header}>
        <Badge category={data.category} />
        <p>{user} 고객 상담 요약</p>
      </div>

      <div className={s.content}>
        <h2 className={s.summaryWrapper}>
          <span className={s.summaryTitle}>상담 품질 요약 (AI 성적표)</span>
        </h2>

        <div className={s.infoSection}>
          {/* 처리 결과 섹션 - 가독성 개선 핵심 */}
          <div className={s.infoGroup}>
            <div className={s.labelWrapper}>
              <span className={s.label}>처리 결과</span>
              <span className={s.statusBadge({ type: 'outcome' })}>
                {data.outcome.value}
              </span>
            </div>
            <p className={s.reasonBox}>{data.outcome.reason}</p>
          </div>

          {/* 재문의 가능성 섹션 */}
          <div className={s.infoGroup}>
            <div className={s.labelWrapper}>
              <span className={s.label}>재문의 가능성</span>
              <span className={s.statusBadge({ type: 're_contact' })}>
                {data.re_contact.value}
              </span>
            </div>
            <p className={s.reasonBox}>{data.re_contact.reason}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
