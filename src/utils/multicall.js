import { ethers } from "ethers";
const MULTICALL3 = "0xcA11bde05977b3631167028862bE2a173976CA11";
const ABI = ["function aggregate3(tuple(address target, bool allowFailure, bytes callData)[] calls) view returns (tuple(bool success, bytes returnData)[] returnData)"];
export const multicall = async (calls, provider) => {
  const contract = new ethers.Contract(MULTICALL3, ABI, provider);
  const results = await contract.aggregate3(calls);
  return results;
};
