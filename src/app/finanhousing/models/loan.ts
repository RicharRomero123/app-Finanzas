export interface Loan {
  id: number;
  userId: number;
  name: string;
  currency: string;
  amount: number;
  initialPayment: number;
  timeFormat: string;
  time: number;
  interestRateType: string;
  rate: number;
  totalGracePeriod: number;
  partialGracePeriod: number;
  futureValue: number;
}
