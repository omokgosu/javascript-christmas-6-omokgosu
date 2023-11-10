export const USER_INPUT = {
  DATE: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.\n12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  MENU: '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)',
}

export const MESSAGE = {
  PREVIEW: (date) => `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리보기!`,
  ORDER_MENU: '<주문메뉴>\n',
  TOTAL_PRICE: '<할인 전 총주문 금액>\n',
  SERVICE_MENU: '<증정 메뉴>\n',
  BENEFITS_DETAILS: '<혜택 내역>\n',
  BENEFITS_PRCIE: '<총혜택 금액>\n',
  SALE_PRICE: '<할인 후 예상 결제 금액>\n',
  BADGE: '<12월 이벤트 뱃지>\n',
}

export const ERROR_MESSAGE = {
  DATE: '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
  MENU: '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
}

export const DEATILS = {
  D_DAY: `크리스마스 디데이 할인: -`,
  WEEKDAY: `평일 할인: -`,
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

export const EVENT_PRICE = 10000;
export const SERVICE_PRICE = 120000;
export const MAX_MENU = 20;
export const ZERO = 0;
export const START_EVENT_DAY = 1;
export const END_D_DAY_EVENT_DAY = 25;
export const END_EVENT_DAY = 31;

export const WEEKEND = [5,6];