export const USER_INPUT = {
  DAY: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.\n12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  MENU: '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
}

export const MESSAGE = {
  PREVIEW: (date) => `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리보기!`,
  ORDER_MENU: '\n<주문 메뉴>',
  TOTAL_PRICE: '\n<할인 전 총주문 금액>',
  SERVICE_MENU: '\n<증정 메뉴>',
  BENEFITS_DETAILS: '\n<혜택 내역>',
  BENEFITS_PRCIE: '\n<총혜택 금액>',
  SALE_PRICE: '\n<할인 후 예상 결제 금액>',
  BADGE: '\n<12월 이벤트 배지>',
  NO: '없음'
}

export const ERROR_MESSAGE = {
  DAY: '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
  MENU: '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
}

export const DETAILS = {
  D_DAY: `크리스마스 디데이 할인: -`,
  WEEKDAY: `평일 할인: -`,
  WEEKEND: '주말 할인 : -',
  SPECIAL: `특별 할인: -`,
  PRESENT: `증정 이벤트: -`,
}

export const BADGE = {
  STAR: '별',
  TREE: '트리',
  SANTA: '산타',
}

export const COUNT = (count) => `${count}개`
export const PRICE = (price) => `${price}원`;
export const DAY = (day) => `2023-12-${day}`;
export const HIGHPOON = '-';
export const COMMA = ',';
export const SERVICE_MENU = `샴페인 1개`;

export const DAY_PRICE = 100;
export const D_DAY_EVENT_PRICE = 1000;
export const EVENT_PRICE = 10000;
export const SERVICE_PRICE = 120000;
export const MAX_MENU = 20;
export const ZERO = 0;
export const START_EVENT_DAY = 1;
export const END_D_DAY_EVENT_DAY = 25;
export const END_EVENT_DAY = 31;

export const WEEKEND = [5,6];
export const STAR_DAY = [3,10,17,24,25,31];
