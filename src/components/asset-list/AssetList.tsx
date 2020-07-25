import React from 'react';

import AssetSummary from '../asset-summary/AssetSummary';

import './asset-list.scss';
import { AssetListProps } from '../../models/interfaces/IAssetListProps';

const AssetList: React.FC<AssetListProps> = (props) => {
  return (
    <div className="asset-list-container">
      <div className="header">
        <div className="name">Name</div>
        <div className="pair">Pair</div>
        <div className="market-cap">Market Cap</div>
        <div className="average-last-price">Average Last Price</div>
      </div>
      <div className="body">
        {props.list.map((asset) => (
          <AssetSummary asset={asset} key={asset.id} />
        ))}
      </div>
    </div>
  );
};

export default AssetList;
