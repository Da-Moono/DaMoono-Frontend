import * as css from '../styles/Menu.css';

const tabs = ['요금제', '구독', '성향'];

export function MenuTabs() {
  return (
    <div className={css.tabs}>
      {tabs.map((tab) => (
        <button key={tab} className={css.tab}>
          {tab}
        </button>
      ))}
    </div>
  );
}
