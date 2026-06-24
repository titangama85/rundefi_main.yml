const COINGECKO_API = "https://api.coingecko.com/api/v3";
export const getPrice = async (tokenId) => {
  const res = await fetch(`${COINGECKO_API}/simple/price?ids=${tokenId}&vs_currencies=usd`);
  const data = await res.json();
  return data[tokenId]?.usd ?? null;
};
export const getPrices = async (tokenIds) => {
  const ids = tokenIds.join(",");
  const res = await fetch(`${COINGECKO_API}/simple/price?ids=${ids}&vs_currencies=usd`);
  return res.json();
};
