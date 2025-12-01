
export interface RightItem {
  id: string;
  title: string;
  description: string;
  details: string[];
  link?: string;
  category: RightsCategory;
  iconKey: 'medical' | 'briefcase' | 'family' | 'ribbon' | 'home' | 'shield' | 'candle' | 'brain' | 'document' | 'coins' | 'wheelchair' | 'gift';
}

export enum RightsCategory {
  HOSTAGES = 'שורדי שבי ומשפחותיהם',
  VICTIM = 'שיקום וזכויות הנפגע',
  FAMILY = 'משפחות שכולות והנצחה',
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
