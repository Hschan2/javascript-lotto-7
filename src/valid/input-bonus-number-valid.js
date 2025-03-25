import { ERROR_MESSAGES } from "../constant/message";
import OPTIONS from "../constant/option";

export const isSingleDigit = (number) => {
    if (number.length !== 1) {
        throw new Error(`${ERROR_MESSAGES.prefix} ${ERROR_MESSAGES.invalidSingle}`);
    }
}

export const isNotNumber = (number) => {
    if (isNaN(number.toString())) {
        throw new Error(`${ERROR_MESSAGES.prefix} ${ERROR_MESSAGES.invalidNumber}`);
    }
}

export const isOnlyNumber = (number) => {
    if (!/^[0-9]+$/.test(number)) {
        throw new Error(`${ERROR_MESSAGES.prefix} ${ERROR_MESSAGES.invalidOnlyNumber}`);
    }
}

export const isFromOneToFortyFive = (number) => {
    if (Number(number) > OPTIONS.maxRandomNumber || Number(number) < OPTIONS.minRandomNumber) {
        throw new Error(`${ERROR_MESSAGES.prefix} ${ERROR_MESSAGES.invalidBetweenOneAndFortyFive}`);
    }
}

export const isIncludedLottoNumbers = (number, lottoNumber) => {
    if (lottoNumber.includes(Number(number))) {
        throw new Error(`${ERROR_MESSAGES.prefix} ${ERROR_MESSAGES.invalidNotIncludedLottoNumbers}`);
    }
}

const inputBonusNumberValidation = (numbers, lottoNumber) => {
    isSingleDigit(numbers);
    isNotNumber(numbers);
    isOnlyNumber(numbers);
    isFromOneToFortyFive(numbers);
    isIncludedLottoNumbers(numbers, lottoNumber);
}

export default inputBonusNumberValidation;