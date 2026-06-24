import { ethers } from "ethers";
export const getProvider = (rpc) => new ethers.JsonRpcProvider(rpc);
export const getSigner = (privateKey, rpc) => new ethers.Wallet(privateKey, getProvider(rpc));
export const getBalance = async (address, provider) => {
  const balance = await provider.getBalance(address);
  return ethers.formatEther(balance);
};
