import * as css from '../styles/tips.css';

interface Props {
  ids: number[];
  currentIndex: number;
  onChange: (index: number) => void;
}

export default function Indicator({ ids, currentIndex, onChange }: Props) {
  return (
    <div className={css.wrapper}>
      {ids.map((id, idx) => (
        <button
          key={id}
          onClick={() => onChange(idx)}
          className={idx === currentIndex ? css.dot.active : css.dot.inactive}
          aria-label={`${idx + 1}번째 카드`}
        />
      ))}
    </div>
  );
}
