import { useNavigate } from 'react-router';
import * as css from '../styles/MyPage.css';

interface TipItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  path: string;
}

const TIPS: TipItem[] = [
  {
    id: 1,
    description: '다무너 이용 가이드',
    title: '무너가 알려주는 꿀팁!',
    imageUrl: 'src/assets/images/tip-moono.png',
    path: '/mypage/tips',
  },
  {
    id: 2,
    description: '상담 챗봇 이용이 처음이시라구요?',
    title: '사용 방법을 한눈에!',
    imageUrl: 'src/assets/images/ai-chat-moono.png',
    path: '/chat/manual',
  },
];

export function TipsSection() {
  const navigate = useNavigate();

  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2>이용 꿀팁</h2>

        <div className={css.cardList}>
          {TIPS.map((tip) => (
            <button
              key={tip.id}
              className={css.card}
              onClick={() => navigate(tip.path)}
            >
              <img src={tip.imageUrl} alt={tip.title} className={css.image} />
              <div className={css.textArea}>
                <p className={css.description}>{tip.description}</p>
                <strong className={css.cardTitle}>{tip.title}</strong>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
