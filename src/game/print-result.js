import calculateProfit from "./calculate-profit";
import OutputView from "../view/output-view";

const printLottoResult = (lottoResult, userBuyMoney) => {
    const calculateProfitPer = ((calculateProfit(lottoResult) / userBuyMoney) * 100).toFixed(1);
    printLottoContent(lottoResult, calculateProfitPer);
}

const printLottoContent = (lottoResult, totalPer) => {
    const getLottoResult = OutputView.printLottoGameResult(lottoResult, totalPer);
    OutputView.printResult(getLottoResult);
}

export default printLottoResult;