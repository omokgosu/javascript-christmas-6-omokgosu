import { Console } from "@woowacourse/mission-utils";
import { COMMA, END_EVENT_DAY, ERROR_MESSAGE, HIGHPOON, MAX_MENU, START_EVENT_DAY, USER_INPUT } from "../constants/constants.js";

import InputView from "../view/InputView.js";
import { MENU } from "../constants/menu.js";

class Menu {
  #menu;

  constructor() {
    this.#menu = this.#setMenu();
  }

  async #setMenu() {
    while (!this.#menu) {
      let menu = await InputView.getInputMenu(USER_INPUT.MENU);
      menu = this.#transMenu(menu);
      
      try {
        this.#menuValidate(menu);
        this.#menu = menu;
      } catch(error) {
        Console.print(error);
        this.#menu = null;
      }
    }
  }

  #transMenu(input) {
    return input.split(COMMA).map((menu) => menu.split(HIGHPOON)).map((menu) => { 
      menu[1] = Number(menu[1]); 
      return menu;
    });
  }

  #menuValidate(menu) {
    const name = menu.map((menu) => menu[0]);
    const count = menu.map((menu) => menu[1]);
    
    this.#menuNameValidate(name);
    this.#menuCountValidate(count);
  }

  #menuNameValidate(name) {
    name.forEach((name) => {
      if (name in MENU) {
        throw ERROR_MESSAGE.MENU;
      }
    })
  }

  #menuCountValidate(count) {
    let sum = 0;

    count.forEach((number) => {
      if (Number.isInteger(number) || number < START_EVENT_DAY || number > END_EVENT_DAY) {
        throw ERROR_MESSAGE.MENU;
      }

      sum += number;
    })

    if (sum > MAX_MENU) {
      throw ERROR_MESSAGE.MENU;
    }
  }
}

export default Menu;
