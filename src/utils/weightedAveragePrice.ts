import { IMarket } from '../models/interfaces/IMarket';

/**
 *
 * @description How is it computed?
 * First filter markets having no analytics information, i.e ticker. Then first
 * calculate total base volume, which is base asset volume traded in past 24 hours(
 * according to API documentation).
 * By using total base volume, for each market find corresponding weighted proportions
 * in all markets. For each market I assume that the average of all trades is the average
 * of low price and high price in last 24 hours. By multiplying the average amount of
 * each market with its weights, summing them, the weighted average price is calculated.
 */

export const weightedAveragePrice = (markets: IMarket[]) => {
  let marketsHavingTicker = markets.filter(({ ticker }) => !!ticker);

  const totalBaseVolume = marketsHavingTicker.reduce((acc, { ticker }) => {
    let tickerBaseVolume = parseFloat(ticker?.baseVolume as string) || 0;
    return acc + tickerBaseVolume;
  }, 0);

  return marketsHavingTicker.reduce((acc, { ticker }) => {
    const averagePrice = ticker ? (parseFloat(ticker.lowPrice) + parseFloat(ticker.highPrice)) / 2 : 0;

    return acc + averagePrice * (parseFloat(ticker?.baseVolume as string) / totalBaseVolume) * 100;
  }, 0);
};
