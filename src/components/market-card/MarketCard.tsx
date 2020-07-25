import React from 'react';
import { IMarketCardProps } from '../../models/interfaces/IMarketCardProps';

import Analytics from '../analytics/Analytics';
import AppDivider from '../app-divider/AppDivider';

import './market-card.scss';

const MarketCard: React.FC<IMarketCardProps> = ({ market }) => {
  const percentChange = parseFloat(market.ticker?.percentChange as string) > 0 ? 'increase' : 'decrease';

  return (
    <div className="market-card-container">
      <div className="market-exchange">{market.exchangeSymbol}</div>
      <div className="market-analytics-container">
        <Analytics value={`${market.baseSymbol}/${market.quoteSymbol}`} label="Pair" />
        <Analytics value={market.marketType as string} label="Type" />
      </div>
      {market.ticker && <AppDivider />}
      {market.ticker && (
        <div className="market-analytics-container">
          <Analytics numeric currency={market.quoteSymbol} value={market.ticker?.lastPrice} label="Last Price" />
          <Analytics
            numeric
            percentChange={percentChange}
            value={market.ticker?.percentChange as string}
            label="24 h Change"
          />
          <Analytics numeric currency={market.quoteSymbol} value={market.ticker?.lowPrice} label="24 h Low" />
          <Analytics numeric currency={market.quoteSymbol} value={market.ticker?.highPrice} label="24 h Hight" />
        </div>
      )}
      {!market.ticker && <div className="warning-container">There is not analytics information about this market</div>}
    </div>
  );
};

export default MarketCard;
