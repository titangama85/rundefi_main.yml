export const calcMinAmountOut = (amountOut, slippageBps) => {
  const slippage = BigInt(slippageBps);
  const amount = BigInt(amountOut);
  return (amount * (10000n - slippage)) / 10000n;
};
export const calcPriceImpact = (expectedPrice, actualPrice) => {
  return (((expectedPrice - actualPrice) / expectedPrice) * 100).toFixed(4);
};
