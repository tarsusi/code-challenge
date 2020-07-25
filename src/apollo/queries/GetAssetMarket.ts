import { gql } from '@apollo/client';

export const GET_ASSET_MARKET = gql`
  query GetAssetMarket($assetName: String!) {
    assets(filter: { assetName: { _eq: $assetName } }, page: { limit: 1 }) {
      assetName
      markets {
        id
        marketType
        exchangeSymbol
        baseSymbol
        quoteSymbol
        ticker {
          percentChange
          highPrice
          lowPrice
          lastPrice
        }
      }
    }
  }
`;
