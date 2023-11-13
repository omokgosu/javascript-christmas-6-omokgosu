import { Console } from "@woowacourse/mission-utils";
import { USER_INPUT } from "../constants/constants.js";

const InputView = {
  getInputDay: async() => {
    const input = await Console.readLineAsync(USER_INPUT.DAY);
    return Number(input);
  },
  getInputMenu: async() => {
    const menu = await Console.readLineAsync(USER_INPUT.MENU);
		return menu;
  }
}

export default InputView;
