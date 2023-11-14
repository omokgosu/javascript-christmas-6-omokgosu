import { MissionUtils } from "@woowacourse/mission-utils";

import OutputView from "../../src/view/OutputView";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe('outputView 테스트', () => {
  test('혜택 미리보기 안내멘트 출력', () => {
    //given
    const logSpy = getLogSpy();
    
    const day = 27;
    const log = '12월 27일에 우테코 식당에서 받을 이벤트 혜택 미리보기!';
  
    //when
    OutputView.printPreview(day);
    
    //then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });

  test('메뉴 출력', () => {
    //given
    const logSpy = getLogSpy();

    const menu = [['바비큐립',2],['초코케이크',3]];
    const logs = [
      '<주문 메뉴>',
      '바비큐립 2개',
      '초코케이크 3개'
    ];

    //when
    OutputView.printMenu(menu);

    //then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('총 주문 금액 출력', () => {
    //given
    const logSpy = getLogSpy();

    const price = 139754;
    const log = [
      '<할인 전 총주문 금액>',
      '139,754원'
    ];

    //when
    OutputView.printTotalPrice(price);

    //then
    log.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('총 금액에 따른 서비스 메뉴 출력', () => {
    //given
    const logSpy = getLogSpy();

    const totalPriceDown = 110000;
    const totalPriceUp = 130000;

    const logsDown = [
      '<증정 메뉴>',
      '없음'
    ];

    const logsUp = [
      '<증정 메뉴>',
      '샴페인 1개'
    ]

    //when
    OutputView.printServiceMenu(totalPriceDown);
    OutputView.printServiceMenu(totalPriceUp);


    //then
    logsDown.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });

    logsUp.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('혜택 내역 출력', () => {
    //given
    const logSpy = getLogSpy();

    const benefits = {
      D_DAY : 1300,
      WEEKDAY: 2023,
      SPECIAL: 1000,
      PRESENT: 25000
    };
    const logs = [
      '<혜택 내역>',
      '크리스마스 디데이 할인: -1,300원',
      '평일 할인: -2,023원',
      '특별 할인: -1,000원',
      '증정 이벤트: -25,000원'
    ];

    const emptyBenefits = {};
    const emptyLogs = [
      '<혜택 내역>',
      '없음'
    ]

    //when
    OutputView.printBenefits(benefits);
    OutputView.printBenefits(emptyBenefits);


    //then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });

    emptyLogs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('총 혜택 금액 출력', () => {
    //given
    const logSpy = getLogSpy();

    const benefits = {
      D_DAY : 1300,
      WEEKDAY: 2023,
      SPECIAL: 1000,
      PRESENT: 25000
    };
    const logs = [
      '<총혜택 금액>',
      '-29,323원'
    ];

    const emptyBenefits = {};
    const emptyLogs = [
      '<총혜택 금액>',
      '0원'
    ]

    //when
    OutputView.printBenefitsPrice(benefits);
    OutputView.printBenefitsPrice(emptyBenefits);

    //then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });

    emptyLogs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('할인 후 예상 결제 금액 출력', () => {
    //given
    const logSpy = getLogSpy();

    const totalPrice = 140000;
    const benefits = {
      D_DAY : 1300,
      WEEKDAY: 2023,
      SPECIAL: 1000,
      PRESENT: 25000
    };
    const logs = [
      '<할인 후 예상 결제 금액>',
      '135,677원'
    ];

    //when
    OutputView.printSalePrice(totalPrice , benefits);

    //then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('12월 이벤트 배지 출력', () => {
    //given
    const logSpy = getLogSpy();

    const benefitsSanta = {
      D_DAY : 1300,
      WEEKDAY: 2023,
      SPECIAL: 1000,
      PRESENT: 25000,
    };
    const benefitsTree = {
      D_DAY : 3000,
      WEEKDAY: 8092,
      SPECIAL: 1000,
    }
    const benefitsStar = {
      D_DAY: 3000,
      WEEKDAY: 2023,
    }
    const benefitsNo = {
      D_DAY: 3000
    }

    const logsSanta = [
      '<12월 이벤트 배지>',
      '산타'
    ];
    const logsTree = [
      '<12월 이벤트 배지>',
      '트리'
    ]
    const logsStar = [
      '<12월 이벤트 배지>',
      '별'
    ]
    const logsNo = [
      '<12월 이벤트 배지>',
      '없음'
    ]

    //when
    OutputView.printBadge(benefitsSanta);
    OutputView.printBadge(benefitsTree);
    OutputView.printBadge(benefitsStar);
    OutputView.printBadge(benefitsNo);
    

    //then
    logsSanta.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
    logsTree.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
    logsStar.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
    logsNo.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
})
