type AllowedPunctuation = "." | ",";
export declare const isDigit: (c: string) => boolean;
export declare const isNumeric: (c: string) => boolean;
export declare const onlyDigits: (val: number | string) => string;
export declare const onlyNumeric: (val: number | string) => string;
export declare const sepK: (src: string | number, sep: AllowedPunctuation) => string;
export {};
