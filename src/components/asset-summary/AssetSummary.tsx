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
        <div className="label">Name:</div>
        {name}
      </div>
      <div className="pair">
        <div className="label">Pair:</div>
        {`${symbol}/USD`}
      </div>
      <div className="market-cap">
        <div className="label">Market Cap:</div>
        {currencyFormatter(marketCap)}
      </div>
      <div className="average-last-price">
        <div className="label">Average Last Price:</div>
        {currencyFormatter(weightedAveragePrice(markets))}
      </div>
    </div>
  );
};

export default AssetSummary;
