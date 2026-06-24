import { getUserHealth } from "../contracts/aaveV3.js";
export const checkLiquidationRisk = async (addresses, provider) => {
  const results = await Promise.all(
    addresses.map(async (addr) => {
      const health = await getUserHealth(addr, provider);
      return { address: addr, healthFactor: parseFloat(health.healthFactor), atRisk: parseFloat(health.healthFactor) < 1.1 };
    })
  );
  return results.filter(r => r.atRisk);
};
