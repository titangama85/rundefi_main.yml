import { ethers } from "ethers";
const POOL_ABI = [
  "function slot0() view returns (uint160 sqrtPriceX96, int24 tick, uint16 observationIndex, uint16 observationCardinality, uint16 observationCardinalityNext, uint8 feeProtocol, bool unlocked)",
  "function liquidity() view returns (uint128)",
  "function fee() view returns (uint24)",
  "function token0() view returns (address)",
  "function token1() view returns (address)",
];
export const getPoolData = async (poolAddress, provider) => {
  const pool = new ethers.Contract(poolAddress, POOL_ABI, provider);
  const [slot0, liquidity, fee, token0, token1] = await Promise.all([
    pool.slot0(), pool.liquidity(), pool.fee(), pool.token0(), pool.token1(),
  ]);
  return { sqrtPriceX96: slot0.sqrtPriceX96.toString(), tick: slot0.tick, liquidity: liquidity.toString(), fee, token0, token1 };
};
