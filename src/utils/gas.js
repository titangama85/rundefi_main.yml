export const getGasData = async (provider) => {
  const feeData = await provider.getFeeData();
  return {
    gasPrice: feeData.gasPrice?.toString(),
    maxFeePerGas: feeData.maxFeePerGas?.toString(),
    maxPriorityFeePerGas: feeData.maxPriorityFeePerGas?.toString(),
  };
};
export const estimateGasCost = (gasLimit, maxFeePerGas) => {
  const cost = BigInt(gasLimit) * BigInt(maxFeePerGas);
  return { wei: cost.toString(), gwei: (Number(cost) / 1e9).toFixed(2), eth: (Number(cost) / 1e18).toFixed(6) };
};
