import { ethers } from "ethers";
const POOL_ABI = [
  "function getUserAccountData(address user) view returns (uint256 totalCollateralBase, uint256 totalDebtBase, uint256 availableBorrowsBase, uint256 currentLiquidationThreshold, uint256 ltv, uint256 healthFactor)",
];
const AAVE_POOL = "0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2";
export const getUserHealth = async (userAddress, provider) => {
  const pool = new ethers.Contract(AAVE_POOL, POOL_ABI, provider);
  const data = await pool.getUserAccountData(userAddress);
  return {
    totalCollateral: ethers.formatUnits(data.totalCollateralBase, 8),
    totalDebt: ethers.formatUnits(data.totalDebtBase, 8),
    availableBorrows: ethers.formatUnits(data.availableBorrowsBase, 8),
    healthFactor: ethers.formatUnits(data.healthFactor, 18),
  };
};
