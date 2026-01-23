import { useState } from 'react';
import * as css from '../styles/MyPage.css';

export type MenuType = '요금제' | '구독' | '성향';

const TAB_LIST: MenuType[] = ['요금제', '구독', '성향'];

const MENU_MAP: Record<MenuType, { label: string; icon: string }[]> = {
  요금제: [
    { label: '모바일 요금제 보기', icon: '📱' },
    { label: '요금제 비교해서 보기', icon: '📊' },
  ],
  구독: [
    { label: '사용중인 구독 서비스 보기', icon: '🧾' },
    { label: '구독 서비스 둘러보기', icon: '✨' },
  ],
  성향: [{ label: '성향 테스트 하러가기', icon: '🧠' }],
};

export function Menu() {
  const [activeTab, setActiveTab] = useState<MenuType>('요금제');

  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2>메뉴</h2>

        <div className={css.tabs}>
          {TAB_LIST.map((tab) => (
            <button
              key={tab}
              className={css.tab({ active: activeTab === tab })}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <ul className={css.menuList}>
          {MENU_MAP[activeTab].map((item) => (
            <li key={item.label} className={css.menuItem}>
              <span className={css.menuLeft}>
                <span className={css.icon}>{item.icon}</span>
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
