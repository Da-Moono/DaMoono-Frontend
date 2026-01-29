export interface CounselItem {
  id: string;
  date: string;
  content: string;
  summarized: boolean;
}

export type CounselSortType = 'latest' | 'oldest';

export const COUNSEL_SORT_OPTIONS = [
  { value: 'latest', label: '최신순' },
  { value: 'oldest', label: '오래된순' },
];
