// types/counsel.ts
export interface CounselItem {
  id: string;
  date: string; // '2026-01-15'
  content: string;
  summarized: boolean;
}

export type CounselSortType = 'latest' | 'oldest';

export const COUNSEL_SORT_OPTIONS = [
  { value: 'latest', label: '최신순' },
  { value: 'oldest', label: '오래된순' },
];
