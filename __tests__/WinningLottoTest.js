import { isFromOneToFortyFive, isNotNumber, isOnlyNumber, isThereOverlapNumber } from "../src/valid/input-winning-number-valid";

describe('로또 성공 숫자 입력 예외 테스트', () => {
    test('로또 성공 번호 중 숫자가 아닌 경우', () => {
        expect(() => {
            isNotNumber(["1", "a", "2"]);
        }).toThrow('[ERROR]');
    });

    test('로또 성공 번호 중 숫자만 있는 경우', () => {
        expect(() => {
            isOnlyNumber(["1", "2", "3"]);
        }).not.toThrow();
    });

    test('로또 성공 번호가 1부터 45인 경우', () => {
        expect(() => {
            isFromOneToFortyFive(["1", "46", "3", "5", "7", "9"]);
        }).toThrow('[ERROR]');
    });

    test('로또 성공 번호 중 중복 숫자가 있는 경우', () => {
        expect(() => {
            isThereOverlapNumber(["4", "4", "6", "7", "8", "9"]);
        }).toThrow('[ERROR]');
    });
});