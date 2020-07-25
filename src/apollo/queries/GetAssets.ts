import { gql } from '@apollo/client';

export const GET_ASSETS = gql`
  query GetAssets($assetName: String!, $limit: Int!) {
    assets(sort: [{ marketCapRank: ASC }], filter: { assetName: { _like: $assetName } }, page: { limit: $limit }) {
      id
      name: assetName
      symbol: assetSymbol
      marketCap
      markets(filter: { quoteSymbol: { _eq: "USD" } }) {
        ticker {
          baseVolume
          highPrice
          lowPrice
        }
      }
    }
  }
`;
