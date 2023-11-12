import { Console } from '@woowacourse/mission-utils';
import { 
    MESSAGE,
    COUNT,
    PRICE,
    SERVICE_MENU,
    SERVICE_PRICE,
    ZERO,
    DETAILS
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
    },
    printBenefits(benefits) {
        Console.print(MESSAGE.BENEFITS_DETAILS);

        if (Object.keys(benefits).length === ZERO) {
            return Console.print(MESSAGE.NO);
        }

        for (const key in benefits) {
            const price = benefits[key].toLocaleString();
            Console.print(`${DETAILS[key]}${PRICE(price)}`)
        }
    },
    printBenefitsPrice(benefits) {
        Console.print(MESSAGE.BENEFITS_PRCIE);
        
        if (Object.keys(benefits).legnth === ZERO) {
            return Console.print(PRICE(ZERO));
        }

        let benefitsPrice = 0;

        for (const key in benefits) {
            benefitsPrice += benefits[key];
        }

        return Console.print(`-${PRICE(benefitsPrice.toLocaleString())}`);
    }
}

export default OutputView;
