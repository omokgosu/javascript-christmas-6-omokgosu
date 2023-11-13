import { Console } from "@woowacourse/mission-utils";
import { MENU } from "../constants/menu.js";
import { 
  USER_INPUT,
  ERROR_MESSAGE,
  COMMA,
  HIGHPOON,
  MAX_MENU,
  ZERO
} from "../constants/constants.js";

import InputView from "../view/InputView.js";

class Menu {
  #menu;

  getMenu() {
    return this.#menu;
  }

  async setMenu() {
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

    this.#menuCountValidate(count);
    this.#menuNameValidate(name);
  }

  #menuNameValidate(name) {
    if (name.length !== new Set(name).size) {
      throw ERROR_MESSAGE.MENU;
    }
    
    name.forEach((name) => {
      if (!(name in MENU)) {
        throw ERROR_MESSAGE.MENU;
      }
    })
    
    if (!(name.some((menu) => MENU[menu].type !== '음료'))) {
      throw ERROR_MESSAGE.MENU_DRINK;
    }
  }

  #menuCountValidate(count) {
    let sum = 0;

    count.forEach((number) => {
      if (!Number.isInteger(number) || number === ZERO) {
        throw ERROR_MESSAGE.MENU;
      }

      sum += number;
    })

    if (sum > MAX_MENU) {
      throw ERROR_MESSAGE.MENU_OVER;
    }
  }

  calcTotalPrice(menu) {
    let total = 0;

    menu.forEach((menu) => {
      const [ name , count ] = menu;
      total += MENU[name].price * count;
    })

    return total;
  }
}

export default Menu;
