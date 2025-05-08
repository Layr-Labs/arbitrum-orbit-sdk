import { zeroAddress, parseGwei } from 'viem';

export const defaults = {
  nativeToken: zeroAddress,
  deployFactoriesToL2: true,
  maxFeePerGasForRetryables: parseGwei(String('0.1')),
  batchPosterManager: zeroAddress,
  feeTokenPricer: zeroAddress,
  // Zero address leads to a dummy manager being created in the constructor
  eigenDACertVerifier: zeroAddress,
};
