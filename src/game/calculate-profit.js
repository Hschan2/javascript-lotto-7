const calculateProfit = (lottoResult) => {
    return Object.values(lottoResult).reduce((total, { count, winnings }) => total + count * winnings, 0);
}

export default calculateProfit;