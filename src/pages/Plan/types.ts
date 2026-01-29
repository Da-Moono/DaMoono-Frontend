export type SortTarget =
  | 'price'
  | 'dataAmountMb'
  | 'voiceMinutes'
  | 'overageSpeedMbps'
  | 'smsIncluded';
export type NetworkType = 'LTE' | '5G';
export type OTTType =
  | 'NETFLIX'
  | 'YOUTUBE_PREMIUM'
  | 'DISNEY+'
  | 'WAVVE'
  | 'TVING'
  | 'MILLIE';

export interface Plan {
  id: number;
  name: string;
  price: number;
  dataAmountMb: number;
  overageSpeedMbps: number | null;
  voiceMinutes: number;
  smsIncluded: number;
  networkType: NetworkType;
  subscriptionServices: OTTType[];
  badges: string[];
}
