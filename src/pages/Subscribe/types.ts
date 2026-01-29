export type SortTarget = 'price' | 'monthlyPrice' | 'benefits';
export type CategoryType = 'OTT' | 'MUSIC' | 'NEWS' | 'EDUCATION' | 'SHOPPING';

export interface Subscribe {
  id: number;
  name: string;
  price: number;
  monthlyPrice: number; // 월 구독료
  category: CategoryType;
  benefits: string[];
  description: string;
  badges: string[];
}
