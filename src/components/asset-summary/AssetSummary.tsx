import React from 'react';

import { IAsset } from '../../models/interfaces/IAsset';
import { currencyFormatter } from '../../utils/currencyFormatter';

import './asset-summary.scss';
import { weightedAveragePrice } from '../../utils/weightedAveragePrice';
import { useHistory } from 'react-router-dom';

interface AssetSummaryProps {
  asset: IAsset;
}

const AssetSummary: React.FC<AssetSummaryProps> = ({ asset: { id, name, symbol, marketCap, markets } }) => {
  const history = useHistory();

  return (
    <div className="asset-summary-container" key={id} onClick={() => history.push(`/coin-pairs/${id}`)}>
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
