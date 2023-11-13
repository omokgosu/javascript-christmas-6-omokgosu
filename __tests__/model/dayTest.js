import { MissionUtils } from "@woowacourse/mission-utils";
import Day from '../../src/model/Day.js';
import App from "../../src/App";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();

  return logSpy;
};

describe('Day 클래스 테스트', () => {
  describe('날짜 예외 테스트', () => {
    test('날짜가 1 미만인 경우 예외 테스트' ,async () => {
      // given
      const INVALID_DATE_MESSAGE = '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.';
      const INPUTS_TO_END = ['1', '해산물파스타-2'];
      const logSpy = getLogSpy();
      mockQuestions(['0', ...INPUTS_TO_END]);

      // when
      const app = new App();
      await app.run();

      // then
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INVALID_DATE_MESSAGE));
    });

    test('날짜가 31 초과인 경우 예외 테스트', async () => {
      // given
      const INVALID_DATE_MESSAGE = '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.';
      const INPUTS_TO_END = ['1', '해산물파스타-2'];
      const logSpy = getLogSpy();
      mockQuestions(['32', ...INPUTS_TO_END]);

      // when
      const app = new App();
      await app.run();

      // then
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INVALID_DATE_MESSAGE));
    });

    test('날짜가 주말이 입력된 경우 WEEKEND 반환', async () => {
      // given
      const day = new Day();
      const weekend = 2;

      // when
      const dayType = day.getDayType(weekend);

      // then
      expect(dayType).toBe('WEEKEND');
    });

    test('날짜가 평일이 입력된 경우 WEEKDAY 반환', async () => {
      // given
      const day = new Day();
      const weekend = 6;

      // when
      const dayType = day.getDayType(weekend);

      // then
      expect(dayType).toBe('WEEKDAY');
    });
  });
});