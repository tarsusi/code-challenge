import React from 'react';

import './markets.scss';

import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_ASSET_MARKET } from '../../apollo/queries/GetAssetMarket';
import MarketCard from '../../components/market-card/MarketCard';
import { IMarket } from '../../models/interfaces/IMarket';

const Markets: React.FC = () => {
  const { name: assetName } = useParams();

  const { loading, data } = useQuery(GET_ASSET_MARKET, {
    variables: { assetName },
  });

  return (
    <div className="markets-container">
      <div className="markets-container__header">
        <div className="markets-container__header__title">Cryptocurrency Markets for {assetName}</div>
      </div>
      <div className="markets-container__body">
        {loading ? (
          <p>Loading...</p>
        ) : (
          data.assets &&
          data.assets[0] &&
          data.assets[0].markets.map((market: IMarket) => <MarketCard key={market.id} market={market} />)
        )}
      </div>
    </div>
  );
};

export default Markets;
