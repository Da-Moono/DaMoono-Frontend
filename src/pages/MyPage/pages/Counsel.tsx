import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import BottomNav from '@/components/BottomNav';
import Header from '@/components/Header';
import Layout from '@/pages/layout/Layout';
import { fetchCounselList } from '@/services/counselApi';
import { CounselCardList } from '../components/CounselCardList';
import * as css from '../styles/Counsel.css';
import type { CounselItem, CounselSortType } from '../types/counsel';
import { COUNSEL_SORT_OPTIONS } from '../types/counsel';

interface CounselApiItem {
  sessionId: string;
  createdAt: string;
  title: string;
  isSummarized: boolean;
}

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
};

export default function Counsel() {
  const [sort, setSort] = useState<CounselSortType>('latest');
  const [items, setItems] = useState<CounselItem[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const navigate = useNavigate();

  // 상담 목록 로드
  useEffect(() => {
    const load = async () => {
      const res = await fetchCounselList({ sort, page: 1, size: 20 });

      const mapped: CounselItem[] = res.items.map((item: CounselApiItem) => ({
        id: item.sessionId,
        date: formatDate(item.createdAt),
        content: item.title,
        summarized: item.isSummarized,
      }));

      setItems(mapped);
      setTotalCount(res.count);
    };

    load();
  }, [sort]);

  // 정렬
  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) =>
      sort === 'latest'
        ? b.date.localeCompare(a.date)
        : a.date.localeCompare(b.date),
    );
  }, [items, sort]);

  const handleSummarize = async (sessionId: string) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;

      const res = await axios.post(
        `${apiUrl}/summary/consults/${sessionId}/user`,
        {},
        { withCredentials: true },
      );
      console.log(res);
      if (res.status === 200 || res.status === 201) {
        // /summary 페이지로 이동
        navigate('/summary', { state: { summaryData: res.data.payload } });
      }
    } catch (e) {
      console.error('요약 생성 실패', e);
      alert('요약 생성에 실패했습니다.');
    }
  };

  return (
    <Layout>
      <Header />
      <main className={css.container}>
        <header className={css.header}>
          <h2 className={css.title}>상담 내역 히스토리</h2>

          <div className={css.headerTop}>
            <p className={css.count}>
              상담 내역 총 <span className={css.strong}>{totalCount}</span>개
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

        {/* CounselCardList에 onSummarize 전달 */}
        <CounselCardList items={sortedItems} onSummarize={handleSummarize} />
      </main>
      <BottomNav />
    </Layout>
  );
}
