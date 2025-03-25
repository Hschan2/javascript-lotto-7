import { LOTTO_RESULT_CHECK } from "../constant/winning";
import { hasBonusNumber, countMatchingNumbers } from "./check-lotto-number";
import printLottoResult from "./print-result";

const playLottoGame = (inputNumber, lottoArray, bonusNumber, userBuyMoney) => {
    const checkLottoResult = { ...LOTTO_RESULT_CHECK };

    lottoArray.forEach((numbers) => {
        const lottoCount = countMatchingNumbers(inputNumber, numbers);
        const getBonusNumber = hasBonusNumber(numbers, bonusNumber);

        updateLottoResult(checkLottoResult, lottoCount, getBonusNumber);
    });

    printLottoResult(checkLottoResult, userBuyMoney);
}

const updateLottoResult = (checkLottoResult, lottoCount, bonusNumber) => {
    switch (lottoCount) {
        case 3:
            checkLottoResult.three.count++;
            break;
        case 4:
            checkLottoResult.four.count++;
            break;
        case 5:
            checkLottoResult.five.count++;
            if (bonusNumber) checkLottoResult.fiveBonus.count++;
            break;
        case 6:
            checkLottoResult.six.count++;
            break;
    }
}

export default playLottoGame;