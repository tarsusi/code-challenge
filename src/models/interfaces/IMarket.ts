import { ITicker } from './ITicker';

export interface IMarket {
  marketType?: string;
  marketSymbol?: string;
  baseSymbol?: string;
  quoteSymbol?: string;
  ticker?: ITicker;
}
