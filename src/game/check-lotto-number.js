export const countMatchingNumbers = (inputNumbers, lottoNumbers) => {
    return inputNumbers.split(',').map(Number).filter(num => lottoNumbers.includes(num)).length;
};

export const hasBonusNumber = (lottoArray, bonusNumber) => lottoArray.includes(bonusNumber);