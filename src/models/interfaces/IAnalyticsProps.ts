export interface IAnalyticsProps {
  value: string;
  label: string;
  numeric?: boolean;
  currency?: string;
  percentChange?: 'increase' | 'decrease' | '';
}
