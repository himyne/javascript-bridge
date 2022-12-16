const { ERROR } = require("./Constants");
const UP_OR_DOWN_REGEXP = /[^UD]/g;

const Validation = {
  checkBridgeSize(size) {
    size = size.trim();
    if (isNaN(parseFloat(size))) throw new Error(ERROR.not_number);
    if (size < 3 || size > 20) throw new Error(ERROR.out_of_range);
    if (size.length < 1 || size.length > 2) throw new Error(ERROR.blank);
    return +size;
  },

  checkMovingSpace(space) {
    space = space.trim();
    if (UP_OR_DOWN_REGEXP.test(space)) throw new Error(ERROR.not_up_or_down);
    if (space.length !== 1) throw new Error(ERROR.not_up_or_down);
    return space;
  } 
};

module.exports = Validation;
