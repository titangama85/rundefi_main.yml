export const calcAPY = (apr, compoundFrequency = 365) => {
  return ((1 + apr / compoundFrequency) ** compoundFrequency - 1) * 100;
};
export const calcImpermanentLoss = (priceRatio) => {
  const il = (2 * Math.sqrt(priceRatio) / (1 + priceRatio)) - 1;
  return (il * 100).toFixed(4);
};
export const calcBreakevenDays = (ilPercent, dailyFeeAPR) => {
  return Math.abs(ilPercent) / dailyFeeAPR;
};
