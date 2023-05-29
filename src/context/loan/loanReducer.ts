import { LoanState } from "./";

type LoanActionType =
  | {
      type: "[Loan] - SetPropertyValue";
      payload: number;
    }
  | {
      type: "[Loan] - SetDownPaymentPercentage";
      payload: number;
    }
  | {
      type: "[Loan] - SetLoanTerm";
      payload: number;
    };

export const loanReducer = (
  state: LoanState,
  action: LoanActionType,
): LoanState => {
  switch (action.type) {
    case "[Loan] - SetPropertyValue":
      return {
        ...state,
        propertyValue: action.payload,
      };
    case "[Loan] - SetDownPaymentPercentage":
      return {
        ...state,
        downPaymentPercentage: action.payload,
      };
    case "[Loan] - SetLoanTerm":
      return {
        ...state,
        loanTerm: action.payload,
      };

    default:
      return state;
  }
};