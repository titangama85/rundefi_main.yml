import { ethers } from "ethers";
import { calcMinAmountOut } from "../utils/slippage.js";
const ROUTER_ABI = [
  "function exactInputSingle(tuple(address tokenIn, address tokenOut, uint24 fee, address recipient, uint256 amountIn, uint256 amountOutMinimum, uint160 sqrtPriceLimitX96)) payable returns (uint256 amountOut)",
];
export const swapExactInputSingle = async (params, slippageBps, signer) => {
  const router = new ethers.Contract(params.routerAddress, ROUTER_ABI, signer);
  const minOut = calcMinAmountOut(params.amountOutExpected, slippageBps);
  const tx = await router.exactInputSingle({ ...params, amountOutMinimum: minOut, sqrtPriceLimitX96: 0 });
  return tx.wait();
};
