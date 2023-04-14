type AllowedPunctuation = "." | ",";

export const isDigit = function (c: string): boolean {
  return /[\d]/.test(c);
};

export const isNumeric = function (c: string): boolean {
  return /[\d-.]/.test(c);
};

export const onlyDigits = function (val: number | string): string {
  return String(val).split("").filter(isDigit).join("");
};

export const onlyNumeric = function (val: number | string): string {
  return String(val).split("").filter(isNumeric).join("");
};

export const sepK = function (
  src: string | number,
  sep: AllowedPunctuation
): string {
  let isNeg: boolean = false;
  let dec: string = sep === "," ? "." : ",";
  let splitNum: string[] = src.toString().trim().split(dec);
  let num: string = splitNum[0];
  // handle neg sign
  if (num[0] === "-") {
    isNeg = true;
    num = num.slice(1).trim();
  }
  let numArr: string[] = [];
  while (num.length > 3) {
    numArr.unshift(num.slice(-3));
    num = num.slice(0, -3);
  }
  if (num.length) {
    numArr.unshift(num);
  }
  return (
    (isNeg ? "-" : "") +
    numArr.join(sep) +
    (splitNum[1] && splitNum[1].length ? dec + splitNum[1] : "")
  );
};
