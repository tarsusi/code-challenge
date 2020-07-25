import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import './main.scss';
import AssetList from '../../components/asset-list/AssetList';
import { GET_ASSETS } from '../../apollo/queries/GetAssets';
import AppInput from '../../components/app-input/AppInput';

const Main: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { loading, data } = useQuery(GET_ASSETS, {
    variables: {
      assetName: `%${searchQuery}%`,
      limit: 25,
    },
  });

  return (
    <div className="main-container">
      <div className="main-container__header">
        <div className="main-container__header__title">Cryptocurrency Market</div>
        <div className="main-container__header__search">
          <AppInput onChange={setSearchQuery} />
        </div>
      </div>
      <div className="main-container__body">{loading ? <p>Loading...</p> : <AssetList list={data.assets} />}</div>
    </div>
  );
};

export default Main;
