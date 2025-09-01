/**
 * You are given an array prices where prices[i] is the price of a given stock on the i-th day.
 * You want to maximize your profit by choosing a single day to buy one stock and
 * choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve. If you cannot achieve any profit, return 0.

* prices = [7, 1, 5, 3, 6, 4] => output:5
        Explanation:
        Buy on day 2 (price = 1)
        Sell on day 5 (price = 6)
        Profit = 6 - 1 = 5


 *prices = [7, 6, 4, 3, 1] => ouput :0
    Explanation:
    In this case, no transaction is possible to make a profit, so return 0.
 */

const maxProfitBruteForce = (prices) => {
  let maxProfit = 0;
  let buy, sell;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const profit = prices[j] - prices[i];
      if (profit >= maxProfit) {
        maxProfit = profit;
        buy = i + 1;
        sell = j + 1;
      }
    }
  }

  return { maxProfit, buy, sell };
};

console.log(maxProfitBruteForce([7, 1, 5, 3, 6, 4]));
console.log(maxProfitBruteForce([7, 6, 4, 3, 1]));
