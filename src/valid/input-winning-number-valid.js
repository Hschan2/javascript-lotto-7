import { ERROR_MESSAGES } from "../constant/message";
import OPTIONS from "../constant/option";

export const isNotNumber = (numbers) => {
    numbers.forEach(number => {
        if (isNaN(number.toString())) throw new Error(`${ERROR_MESSAGES.prefix} ${ERROR_MESSAGES.invalidNumber}`);
    })
}

export const isOnlyNumber = (numbers) => {
    const numericRegex = /^[0-9]+$/;
    for (const number of numbers) {
        if (!numericRegex.test(number)) {
            throw new Error(`${ERROR_MESSAGES.prefix} ${ERROR_MESSAGES.invalidOnlyNumber}`);
        }
    }
}

export const isFromOneToFortyFive = (numbers) => {
    for (const number of numbers) {
        if (Number(number) > OPTIONS.maxRandomNumber || Number(number) < OPTIONS.minRandomNumber) {
            throw new Error(`${ERROR_MESSAGES.prefix} ${ERROR_MESSAGES.invalidBetweenOneAndFortyFive}`);
        }
    }
}

export const isThereOverlapNumber = (numbers) => {
    if (numbers.length !== new Set(numbers).size) throw new Error(`${ERROR_MESSAGES.prefix} ${ERROR_MESSAGES.invalidNotOverlap}`);
}

const inputWinningNumberAllCheck = (numbers) => {
    isNotNumber(numbers);
    isOnlyNumber(numbers);
    isFromOneToFortyFive(numbers);
    isThereOverlapNumber(numbers);
}

export default inputWinningNumberAllCheck;