import { getTokenBalance } from "./erc20.js";
import { getPrice } from "./price.js";
export const calcPoolTVL = async (poolAddress, tokens, provider) => {
  let totalUSD = 0;
  const breakdown = await Promise.all(
    tokens.map(async ({ address, coingeckoId, decimals }) => {
      const { balance } = await getTokenBalance(address, poolAddress, provider);
      const price = await getPrice(coingeckoId);
      const usd = parseFloat(balance) * (price ?? 0);
      totalUSD += usd;
      return { address, balance, price, usd };
    })
  );
  return { totalUSD, breakdown };
};
