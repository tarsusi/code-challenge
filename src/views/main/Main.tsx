import React from 'react';
import { gql, useQuery } from '@apollo/client';

import './main.css';

const GET_MARKET = gql`
  query PageAssets {
    assets(sort: [{ marketCapRank: ASC }], page: { limit: 25 }) {
      id
      assetName
      assetSymbol
      marketCap
      markets {
        marketSymbol
        baseSymbol
        exchangeSymbol
        ticker {
          lastPrice
          highPrice
          lowPrice
          percentChange
        }
      }
    }
  }
`;

const Main: React.FC = () => {
  const { loading, data } = useQuery(GET_MARKET);
  return loading ? <p>Loading...</p> : <div>{JSON.stringify(data)}</div>;
};

export default Main;
