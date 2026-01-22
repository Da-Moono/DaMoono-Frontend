import * as css from '../styles/Menu.css';

const menus = [
  { label: '모바일 요금제 보기', icon: '📱' },
  { label: '요금제 비교해서 보기', icon: '📊' },
];

export function MenuSection() {
  return (
    <section className={css.menuSection}>
      <h3 className={css.menuTitle}>메뉴</h3>
      <ul className={css.menuList}>
        {menus.map((menu) => (
          <li key={menu.label} className={css.menuItem}>
            <span className={css.menuLeft}>
              <span className={css.icon}>{menu.icon}</span>
              {menu.label}
            </span>
            <span className={css.arrow}>›</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
