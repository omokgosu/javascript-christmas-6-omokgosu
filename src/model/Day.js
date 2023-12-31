import { Console } from "@woowacourse/mission-utils";
import { 
  USER_INPUT,
  START_EVENT_DAY,
  END_EVENT_DAY,
  ERROR_MESSAGE,
  DAY,
  WEEKEND
} from "../constants/constants.js";

import InputView from "../view/InputView.js";

class Day {
  #day;

  getDay() {
    return this.#day;
  }

  async setDay() {
    while(!this.#day){
      const day = await InputView.getInputDay(USER_INPUT.DAY);

      try {
        this.#dayValidate(day);
        this.#day = day;
      } catch(error) {
        Console.print(error);
        this.#day = null;
      }
    }
  }

  #dayValidate(day) {
    if (day < START_EVENT_DAY || day > END_EVENT_DAY) {
      throw ERROR_MESSAGE.DAY;
    }

    if (Number.isNaN(day)) {
      throw ERROR_MESSAGE.DAY;
    }
  }

  getDayType(day) {
    const currentDay = new Date(DAY(day)).getDay();
    return WEEKEND.includes(currentDay) ? 'WEEKEND' : 'WEEKDAY';
  }
}

export default Day;
