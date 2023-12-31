import { 
  END_D_DAY_EVENT_DAY, 
  START_EVENT_DAY,
  D_DAY_EVENT_PRICE,
  DAY_PRICE, 
  SERVICE_PRICE,
  STAR_DAY,
  EVENT_PRICE,
  SALE_PRICE
} from "./constants/constants.js";
import { MENU } from "./constants/menu.js";

import Day from "./model/Day.js";
import Menu from "./model/Menu.js";
import OutputView from "./view/OutputView.js";

class App {
  #benefits

  constructor() {
    this.#benefits = {};
  }

  async run() {
    const day = await this.createDay();
    const menu = await this.createMenu();

    const inputDay = day.getDay();
    const inputMenu = menu.getMenu();
    const dayType = day.getDayType(inputDay);
    const totalPrice = menu.calcTotalPrice(inputMenu);
    
    if (totalPrice > EVENT_PRICE) {
      this.setEventInfo(inputDay , dayType , inputMenu , totalPrice);
    }
    
    OutputView.printPreview(inputDay);
    OutputView.printMenu(inputMenu);
    OutputView.printTotalPrice(totalPrice);
    OutputView.printServiceMenu(totalPrice);
    OutputView.printBenefits(this.#benefits);
    OutputView.printBenefitsPrice(this.#benefits);
    OutputView.printSalePrice(totalPrice , this.#benefits);
    OutputView.printBadge(this.#benefits);
  }

  async createDay() {
    const day = new Day();
    await day.setDay();
    return day;
  }

  async createMenu() {
    const menu = new Menu();
    await menu.setMenu();
    return menu;
  }

  setEventInfo(day , dayType , menu , totalPrice) {
    this.setDdaySale(day);
    this.setDayTypeSale(dayType,menu);
    this.setSpecialSale(day);
    this.setServiceMenuSale(totalPrice);
  }

  setDdaySale(day) {
    if (START_EVENT_DAY <= day && day <= END_D_DAY_EVENT_DAY) {
      const key = 'D_DAY';

      if (!(key in this.#benefits)){
        this.#benefits[key] = 0;
      }

      this.#benefits[key] = D_DAY_EVENT_PRICE + ((day - START_EVENT_DAY) * DAY_PRICE);
    }
  }

  setDayTypeSale(dayType,menu) {
    const key = dayType;
    
    if (key === 'WEEKEND') {
      this.setWeekendSale(key , menu); 
    }

    if (key === 'WEEKDAY') {
      this.setWeekDaySale(key , menu);
    }
  }

  setWeekDaySale(key,menu) {
    let salePrice = 0;

    menu.forEach((menu) => {
      const [ name , count ] = menu;

      if (MENU[name].type === '디저트') {
        salePrice += SALE_PRICE * count;
      }
    })

    if (!(key in this.#benefits) && salePrice > 0) {
      this.#benefits[key] = salePrice;
    }
  }

  setWeekendSale(key,menu) {
    let salePrice = 0;

    menu.forEach((menu) => {
      const [ name , count ] = menu;

      if (MENU[name].type === '메인') {
        salePrice += SALE_PRICE * count;
      }
    })

    if (!(key in this.#benefits) && salePrice > 0) {
      this.#benefits[key] = salePrice;
    }
  }

  setSpecialSale(day) {
    if (STAR_DAY.includes(day)) {
      const key = 'SPECIAL';

      if (!(key in this.#benefits)) {
        this.#benefits[key] = 1000;
      }
    }
  }

  setServiceMenuSale(totalPrice) {
    if (totalPrice > SERVICE_PRICE) {
      const key = 'PRESENT';

      if (!(key in this.#benefits)) {
        this.#benefits[key] = 0;
      }

      this.#benefits[key] = MENU['샴페인'].price;
    }
  }

}

export default App;
