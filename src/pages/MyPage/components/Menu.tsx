import { useState } from 'react';
import { useNavigate } from 'react-router';
import compareIcon from '@/assets/images/mobile-compare-icon.png';
import planIcon from '@/assets/images/mobile-plan-icon.png';
import testIcon from '@/assets/images/personalityTest-icon.png';
import subscribeIcon from '@/assets/images/subscribe-phone-icon.png';
import * as css from '../styles/MyPage.css';

export type MenuType = '요금제' | '구독' | '성향';

type MenuItem = {
  label: string;
  icon: string;
  path: string;
  state?: {
    compare?: boolean;
  };
};

const TAB_LIST: MenuType[] = ['요금제', '구독', '성향'];

const MENU_MAP: Record<MenuType, MenuItem[]> = {
  요금제: [
    {
      label: '모바일 요금제 보기',
      icon: planIcon,
      path: '/plan',
      state: { compare: false },
    },
    {
      label: '요금제 비교해서 보기',
      icon: compareIcon,
      path: '/plan',
      state: { compare: true },
    },
  ],
  구독: [
    {
      label: '사용중인 구독 서비스 보기',
      icon: subscribeIcon,
      path: '/subscribe',
      state: { compare: false },
    },
  ],
  성향: [
    {
      label: '성향 테스트 하러가기',
      icon: testIcon,
      path: '/service-recommendation',
      state: { compare: false },
    },
  ],
};

export function Menu() {
  const [activeTab, setActiveTab] = useState<MenuType>('요금제');
  const navigate = useNavigate();

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
            <li
              key={item.label}
              className={css.menuItem}
              onClick={() => navigate(item.path, { state: item.state })}
              onKeyDown={(e) => {
                if (e.key === 'Enter') navigate(item.path);
              }}
            >
              <span className={css.menuLeft}>
                <span className={css.icon}>
                  {item.icon.startsWith('/') || item.icon.includes('.png') ? (
                    <img src={item.icon} alt="요금제" className={css.iconImg} />
                  ) : (
                    item.icon
                  )}
                </span>
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
