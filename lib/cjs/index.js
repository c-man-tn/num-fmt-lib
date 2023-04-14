"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sepK = exports.onlyNumeric = exports.onlyDigits = exports.isNumeric = exports.isDigit = void 0;
const isDigit = function (c) {
    return /[\d]/.test(c);
};
exports.isDigit = isDigit;
const isNumeric = function (c) {
    return /[\d-.]/.test(c);
};
exports.isNumeric = isNumeric;
const onlyDigits = function (val) {
    return String(val).split("").filter(exports.isDigit).join("");
};
exports.onlyDigits = onlyDigits;
const onlyNumeric = function (val) {
    return String(val).split("").filter(exports.isNumeric).join("");
};
exports.onlyNumeric = onlyNumeric;
const sepK = function (src, sep) {
    let isNeg = false;
    let dec = sep === "," ? "." : ",";
    let splitNum = src.toString().trim().split(dec);
    let num = splitNum[0];
    // handle neg sign
    if (num[0] === "-") {
        isNeg = true;
        num = num.slice(1).trim();
    }
    let numArr = [];
    while (num.length > 3) {
        numArr.unshift(num.slice(-3));
        num = num.slice(0, -3);
    }
    if (num.length) {
        numArr.unshift(num);
    }
    return ((isNeg ? "-" : "") +
        numArr.join(sep) +
        (splitNum[1] && splitNum[1].length ? dec + splitNum[1] : ""));
};
exports.sepK = sepK;
