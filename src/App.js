import Day from "./model/Day.js";
import Menu from "./model/Menu.js";
import OutputView from "./view/OutputView.js";

class App {
  async run() {
    const day = await this.createDay();
    const menu = await this.createMenu();

    const totalPrice = menu.calcTotalPrice();

    OutputView.printPreview(day.getDay());
    OutputView.printMenu(menu.getMenu());
    OutputView.printTotalPrice(totalPrice);
    OutputView.printServiceMenu(totalPrice);
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
}

export default App;
