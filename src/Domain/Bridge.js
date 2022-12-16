const InputView = require("../View/InputView");

class Bridge {
  #size;

  readBridgeSize() {
    InputView.readBridgeSize((size) => {
      this.#size = size;
    })
  }  
}

module.exports = Bridge;