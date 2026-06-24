import { ethers } from "ethers";
export const listenToTransfers = (tokenAddress, filterAddress, provider, callback) => {
  const abi = ["event Transfer(address indexed from, address indexed to, uint256 value)"];
  const contract = new ethers.Contract(tokenAddress, abi, provider);
  const filter = contract.filters.Transfer(null, filterAddress);
  contract.on(filter, (from, to, value, event) => {
    callback({ from, to, value: value.toString(), txHash: event.log.transactionHash });
  });
  return () => contract.removeAllListeners();
};
