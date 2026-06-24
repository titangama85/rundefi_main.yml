import { getTokenBalance } from "./erc20.js";
import { getPrice } from "./price.js";
const TOKENS = {
  USDC: { address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", coingeckoId: "usd-coin" },
  WETH: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", coingeckoId: "weth" },
  WBTC: { address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", coingeckoId: "wrapped-bitcoin" },
  ARB:  { address: "0xB50721BCf8d664c30412Cfbc6cf7a15145234ad1", coingeckoId: "arbitrum" },
};
export const getPortfolio = async (walletAddress, provider) => {
  const results = await Promise.all(
    Object.entries(TOKENS).map(async ([symbol, { address, coingeckoId }]) => {
      const { balance } = await getTokenBalance(address, walletAddress, provider);
      const price = await getPrice(coingeckoId);
      return { symbol, balance: parseFloat(balance), price, usdValue: parseFloat(balance) * (price ?? 0) };
    })
  );
  return results;
};
