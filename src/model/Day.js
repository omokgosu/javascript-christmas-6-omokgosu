import { Console } from "@woowacourse/mission-utils";
import { USER_INPUT } from "../constants/constants.js";

import InputView from "../view/InputView.js";
import Validate from "../validate/Validate.js";

class Day {
  #day;

  constructor() {
    this.#day = this.#setDay();
  }

  async #setDay() {
    while(!this.#day){
      const day = await InputView.getInputDay(USER_INPUT.DAY);

      try {
        Validate.dayValidate(day);
        this.#day = day;
      } catch(error) {
        Console.print(error);
      }
    }
  }
}

export default Day;
