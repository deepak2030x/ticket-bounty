import { MyBig } from "@/lib/big";

export const dollarToCent = (dollar: string | number) => {
  return MyBig(dollar).times(100).toNumber();
};

export const fromCentToDollar = (cent: number) => {
  return MyBig(cent).div(100).toNumber();
};

export const toCurrencyFromCent = (cent: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    fromCentToDollar(cent),
  );
