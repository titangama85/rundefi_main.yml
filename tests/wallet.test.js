import { getBalance } from "../src/utils/wallet.js";
import { ethers } from "ethers";
const provider = new ethers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/demo");
test("getBalance returns a valid ETH balance", async () => {
  const balance = await getBalance("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045", provider);
  expect(parseFloat(balance)).toBeGreaterThanOrEqual(0);
});
