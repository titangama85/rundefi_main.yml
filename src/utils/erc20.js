import { ethers } from "ethers";
const ERC20_ABI = [
  "function balanceOf(address) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function symbol() view returns (string)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function allowance(address owner, address spender) view returns (uint256)",
];
export const getTokenContract = (address, signerOrProvider) =>
  new ethers.Contract(address, ERC20_ABI, signerOrProvider);
export const getTokenBalance = async (tokenAddress, walletAddress, provider) => {
  const contract = getTokenContract(tokenAddress, provider);
  const [balance, decimals, symbol] = await Promise.all([
    contract.balanceOf(walletAddress),
    contract.decimals(),
    contract.symbol(),
  ]);
  return { balance: ethers.formatUnits(balance, decimals), symbol };
};
