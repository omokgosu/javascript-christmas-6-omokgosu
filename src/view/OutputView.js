import { Console } from '@woowacourse/mission-utils';
import { MESSAGE , COUNT } from "../constants/constants.js";

const OutputView = {
    printPreview: (day) => {
        Console.print(MESSAGE.PREVIEW(day));
    },
    printMenu(menu) {
        Console.print(MESSAGE.ORDER_MENU);
        menu.forEach((menu) => {
            const [ name , count ] = menu;
            Console.print(`${name} ${COUNT(count)}`)
        })
    }
    // ...
}

export default OutputView;
