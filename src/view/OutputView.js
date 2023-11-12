import { Console } from '@woowacourse/mission-utils';
import { 
    MESSAGE,
    COUNT,
    PRICE,
    SERVICE_MENU,
    SERVICE_PRICE
} from "../constants/constants.js";

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
    },
    printTotalPrice(price) {
        Console.print(MESSAGE.TOTAL_PRICE);
        Console.print(PRICE(price.toLocaleString()))
    },
    printServiceMenu(price) {
        let service = MESSAGE.NO;

        if (price > SERVICE_PRICE) {
            service = SERVICE_MENU;
        }

        Console.print(MESSAGE.SERVICE_MENU);
        Console.print(service);
    }
    // ...
}

export default OutputView;
