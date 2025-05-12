import { zeroAddress, parseGwei } from 'viem';

export const defaults = {
  nativeToken: zeroAddress,
  deployFactoriesToL2: true,
  maxFeePerGasForRetryables: parseGwei(String('0.1')),
  batchPosterManager: zeroAddress,
  feeTokenPricer: zeroAddress,
  // Zero address leads to no cert verifier address being inserted into sequencer inbox storage, so verification will
  // be a noop
  eigenDACertVerifier: zeroAddress,
};
