import * as css from '../styles/tips.css';

interface Props {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export default function TipsCard({ id, title, description, imageUrl }: Props) {
  return (
    <div className={css.card}>
      <span className={css.numberBadge}>0{id}</span>
      <h3 className={css.title}>{title}</h3>
      <p className={css.description}>{description}</p>
      <img src={imageUrl} alt={title} className={css.image} />
    </div>
  );
}
