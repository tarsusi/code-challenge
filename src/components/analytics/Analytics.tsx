import React from 'react';

import { percentageFormatter } from '../../utils/percentageFormatter';
import { IAnalyticsProps } from '../../models/interfaces/IAnalyticsProps';

import './analytics.scss';

const Analytics: React.FC<IAnalyticsProps> = ({ numeric, value, label, currency, percentChange }) => {
  let analyticsValue = value;

  if (numeric) {
    if (percentChange === 'decrease' || percentChange === 'increase') {
      analyticsValue = percentageFormatter(parseFloat(value));
    } else {
      analyticsValue = `${Number(value).toFixed(0)} ${currency}`;
    }
  }

  return (
    <div className={numeric ? 'analytics-container numeric' : 'analytics-container'}>
      <div className={`value ${percentChange}`}>{analyticsValue}</div>
      <div className="label">{label}</div>
    </div>
  );
};

Analytics.defaultProps = {
  numeric: false,
  value: '',
  label: '',
  percentChange: '',
  currency: '',
};

export default Analytics;
