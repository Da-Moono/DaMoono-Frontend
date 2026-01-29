import CautionIcon from '@/pages/Summary/assets/caution.svg';
import WarningIcon from '@/pages/Summary/assets/warning.svg';
import * as s from '@/pages/Summary/style/WarningCard.css';

interface WarningData {
  notices: notice[];
}

interface notice {
  id: number;
  title: string;
  text: string;
}

export default function WarningCard({ notices }: WarningData) {
  return (
    <div className={s.CardContainer}>
      <div className={s.header}>
        <img src={CautionIcon} alt="주의사항" />
        <p>필수 확인 및 주의사항</p>
      </div>

      <div className={s.content}>
        {notices.map((notice) => (
          <div key={notice.id} className={s.warningItem}>
            <img src={WarningIcon} className={s.imgItem} alt="warning" />
            <div className={s.textWrapper}>
              <p className={s.warningTitle}>{notice.title}</p>
              <p className={s.warningText}>
                <br />
                {notice.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
