import { 
  START_EVENT_DAY,
  END_EVENT_DAY,
  ERROR_MESSAGE
} from "../constants/constants.js";

const Validate = {
  dayValidate: (day) => {
    if (day < START_EVENT_DAY || day > END_EVENT_DAY) {
      throw ERROR_MESSAGE.DAY;
    }
  }
}

export default Validate;
