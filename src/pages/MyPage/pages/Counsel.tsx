import { useMemo, useState } from 'react';
import BottomNav from '@/components/BottomNav';
import Header from '@/components/Header';
import Layout from '@/pages/layout/Layout';
import { CounselCardList } from '../components/CounselCardList';
import * as css from '../styles/Counsel.css';
import type { CounselItem, CounselSortType } from '../types/counsel';
import { COUNSEL_SORT_OPTIONS } from '../types/counsel';

const MOCK_DATA: CounselItem[] = [
  {
    id: '1',
    date: '2026.01.15 (목)',
    content:
      '네트워크 품질 측정 티켓 접수 및 단말기 임시 조치 가이드 안내 완료!',
    summarized: true,
  },
  {
    id: '2',
    date: '2026.01.15 (목)',
    content:
      '네트워크 품질 측정 티켓 접수 및 단말기 임시 조치 가이드 안내 완료!',
    summarized: false,
  },
  {
    id: '3',
    date: '2026.01.16 (금)',
    content:
      '네트워크 품질 측정 티켓 접수 및 단말기 임시 조치 가이드 안내 완료!',
    summarized: true,
  },
  {
    id: '4',
    date: '2026.01.22 (목)',
    content:
      '네트워크 품질 측정 티켓 접수 및 단말기 임시 조치 가이드 안내 완료!',
    summarized: false,
  },
  {
    id: '5',
    date: '2026.01.23 (금)',
    content:
      '네트워크 품질 측정 티켓 접수 및 단말기 임시 조치 가이드 안내 완료!',
    summarized: true,
  },
  {
    id: '6',
    date: '2026.01.15 (목)',
    content:
      '네트워크 품질 측정 티켓 접수 및 단말기 임시 조치 가이드 안내 완료!',
    summarized: false,
  },
  {
    id: '7',
    date: '2026.01.16 (금)',
    content:
      '네트워크 품질 측정 티켓 접수 및 단말기 임시 조치 가이드 안내 완료!',
    summarized: true,
  },
];

export default function Counsel() {
  const [sort, setSort] = useState<CounselSortType>('latest');

  const sortedItems = useMemo(() => {
    return [...MOCK_DATA].sort((a, b) => {
      if (sort === 'latest') {
        return b.date.localeCompare(a.date);
      }
      return a.date.localeCompare(b.date);
    });
  }, [sort]);

  return (
    <Layout>
      <Header />
      <main className={css.container}>
        <header className={css.header}>
          <h2 className={css.title}>상담 내역 히스토리</h2>
          <div className={css.headerTop}>
            <p className={css.count}>
              상담 내역 총{' '}
              <span className={css.strong}>{MOCK_DATA.length}</span>개
            </p>
            <select
              className={css.select}
              value={sort}
              onChange={(e) => setSort(e.target.value as CounselSortType)}
            >
              {COUNSEL_SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </header>
        <CounselCardList items={sortedItems} />
      </main>
      <BottomNav />
    </Layout>
  );
}
