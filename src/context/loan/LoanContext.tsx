import { createContext } from "react";

interface ContextProps {
  propertyValue: number;
  downPaymentPercentage: number;
  loanTerm: number;

  monthlyIncome: number;
  monthlyPayment: number;
  downPayment: number;
  loanAmount: number;

  setPropertyValue: (propertyValue: number) => void;
  setDownPaymentPercentage: (downPaymentPercentage: number) => void;
  setLoanTerm: (loanTerm: number) => void;
}

export const LoanContext = createContext({} as ContextProps);