const { ERROR } = require("./Constants");

const Validation = {
  checkBridgeSize(size) {
    size = size.trim();
    if (isNaN(parseFloat(size))) throw new Error(ERROR.not_number);
    if (size < 3 || size > 20) throw new Error(ERROR.out_of_range);
    if (size.length < 1 || size.length > 2) throw new Error(ERROR.blank);
    return +size;
  },
};

module.exports = Validation;
