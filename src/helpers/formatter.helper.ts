/**
 * The function formats a number as a currency value in USD with two decimal places.
 * @param {number} value - a number representing a monetary value in USD.
 * @returns The `money` function returns a formatted string representation of a given number value in
 * USD currency format with two decimal places.
 */
export const money = (value: number): string => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return formatter.format(value);
  };
  
  export const date = (value: string): string => {
    const formatter = new Intl.DateTimeFormat("es-ES", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return formatter.format(new Date(value));
  };
  
  export const percentage = (percentage: number): string => {
    if (percentage === 0) {
      return "0%";
    } else if (percentage > 0 && percentage < 1) {
      return (percentage * 100).toFixed(2) + "%";
    } else {
      return percentage.toFixed(2) + "%";
    }
  };