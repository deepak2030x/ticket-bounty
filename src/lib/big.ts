import Big from "big.js";

Big.DP = 2; // Set global decimal places to 2
Big.RM = Big.roundHalfEven; // Set global rounding mode to round half even

export const MyBig = Big;
