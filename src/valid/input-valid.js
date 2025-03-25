import Lotto from "../Lotto";
import InputView from "../view/input-view"
import inputBonusNumberValidation from "./input-bonus-number-valid";
import userInputAllCheck from "./input-user-number-valid";

const inputValid = {
    async validLottoAmount() {
        const getLottoAmount = await InputView.readLottoAmount();
        userInputAllCheck(getLottoAmount);
        return getLottoAmount;
    },

    async validLottoNumbers() {
        const getLottoNumbers = await InputView.readLottoNumbers();
        const checkLottoNumbers = new Lotto(getLottoNumbers);
        return checkLottoNumbers.getNumber();
    },

    async validBonusNumber(lottoNumber) {
        const getBonusNumber = await InputView.readBonusNumber();
        inputBonusNumberValidation(getBonusNumber, lottoNumber);
        return getBonusNumber;
    }
}

export default inputValid;