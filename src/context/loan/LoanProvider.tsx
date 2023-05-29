import { FC, PropsWithChildren, useMemo, useReducer } from "react";
import { LoanContext, loanReducer } from "./";

export interface LoanState {
  propertyValue: number;
  downPaymentPercentage: number;
  loanTerm: number;
}

const MONTHLY_INTEREST_RATE = 0.001;

const LOAN_INITIAL_STATE: LoanState = {
  propertyValue: 0,
  downPaymentPercentage: 10,
  loanTerm: 20,
};

export const LoanProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(loanReducer, LOAN_INITIAL_STATE);

  const { downPaymentPercentage, loanTerm, propertyValue } = state;

  const downPayment: number = useMemo(
    () => (propertyValue * downPaymentPercentage) / 100,
    [propertyValue, downPaymentPercentage],
  );

  const loanAmount: number = useMemo(
    () => propertyValue - downPayment,
    [propertyValue, downPayment],
  );

  const monthlyPayment: number = useMemo(() => {
    const monthlyLoanTerm = loanTerm * 12;
    return (
      (loanAmount * MONTHLY_INTEREST_RATE) /
      (1 - Math.pow(1 + MONTHLY_INTEREST_RATE, -monthlyLoanTerm))
    );
  }, [loanAmount, loanTerm]);

  const monthlyIncome: number = useMemo(
    () => monthlyPayment * 2.5,
    [monthlyPayment],
  );

  const setPropertyValue = (propertyValue: number) => {
    dispatch({
      type: "[Loan] - SetPropertyValue",
      payload: propertyValue,
    });
  };

  const setDownPaymentPercentage = (downPaymentPercentage: number) => {
    dispatch({
      type: "[Loan] - SetDownPaymentPercentage",
      payload: downPaymentPercentage,
    });
  };

  const setLoanTerm = (loanTerm: number) => {
    dispatch({
      type: "[Loan] - SetLoanTerm",
      payload: loanTerm,
    });
  };

  return (
    <LoanContext.Provider
      value={{
        /** Properties */
        ...state,
        monthlyIncome,
        monthlyPayment,
        downPayment,
        loanAmount,

        /** Methods */
        setPropertyValue,
        setDownPaymentPercentage,
        setLoanTerm,
      }}
    >
      {children}
    </LoanContext.Provider>
  );
};