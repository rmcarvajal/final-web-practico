export type Tool = {
  id: number;
  name: string;
  maxLoanDays: number;
};

export type LoanRequest = {
  id: number;
  purpose: string;
  days: number;
  tool: Tool;
};

