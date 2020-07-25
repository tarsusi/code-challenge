import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import './main.scss';
import AssetList from '../../components/asset-list/AssetList';
import { GET_ASSETS } from '../../apollo/queries/GetAssets';
import AppInput from '../../components/app-input/AppInput';

const SEARCH_DEBOUNCE_TIME = 500;
const supportedLimits = [25, 50, 75, 100];

let debounceTimeout: NodeJS.Timeout;

const Main: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [limit, setLimit] = useState(supportedLimits[0]);

  const { loading, data } = useQuery(GET_ASSETS, {
    variables: {
      assetName: `%${searchQuery}%`,
      limit,
    },
  });

  const onChange = (value: string) => {
    if (debounceTimeout) clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(function () {
      setSearchQuery(value);
    }, SEARCH_DEBOUNCE_TIME);
  };

  return (
    <div className="main-container">
      <div className="main-container__header">
        <div className="main-container__header__title">Cryptocurrency Market</div>
        <div className="main-container__header__search">
          <AppInput onChange={onChange} />
        </div>
      </div>
      <div className="main-container__body">{loading ? <p>Loading...</p> : <AssetList list={data.assets} />}</div>
      <div className="main-container__limits">
        View:
        {supportedLimits.map((limitValue) => (
          <div
            key={limitValue}
            onClick={() => setLimit(limitValue)}
            className={`limit-value ${limit === limitValue ? 'active' : ''}`}
          >
            {limitValue}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
