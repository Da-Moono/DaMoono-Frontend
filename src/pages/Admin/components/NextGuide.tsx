import * as s from '../style/NextGuide.css';

interface NextInteractionGuideProps {
  guide: string;
}

export default function NextInteractionGuide({
  guide,
}: NextInteractionGuideProps) {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <h3 className={s.title}>💡 상담사 다음 대응 가이드</h3>
      </div>
      <div className={s.content}>
        <p className={s.text}>{guide}</p>
      </div>
    </div>
  );
}
