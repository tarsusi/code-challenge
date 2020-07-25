import React from 'react';

import { IAssetSummaryProps } from '../../models/interfaces/IAssetSummaryProps';
import { currencyFormatter } from '../../utils/currencyFormatter';

import { weightedAveragePrice } from '../../utils/weightedAveragePrice';
import { useHistory } from 'react-router-dom';

import './asset-summary.scss';

const AssetSummary: React.FC<IAssetSummaryProps> = ({ asset: { id, name, symbol, marketCap, markets } }) => {
  const history = useHistory();

  return (
    <div className="asset-summary-container" key={id} onClick={() => history.push(`/markets/${name}`)}>
      <div className="name" title={name}>
        {name}
      </div>
      <div className="pair">{`${symbol}/USD`}</div>
      <div className="market-cap">{currencyFormatter(marketCap)}</div>
      <div className="average-last-price">{currencyFormatter(weightedAveragePrice(markets))}</div>
    </div>
  );
};

export default AssetSummary;
