import Day from "./model/Day.js";
import Menu from "./model/Menu.js";

class App {
  async run() {
    const day = await this.createDay();
    const menu = await this.createMenu();

    day.printPreview();
    menu.printMenu();
    menu.printTotalPrice();
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
