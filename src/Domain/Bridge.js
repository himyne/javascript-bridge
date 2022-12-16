const InputView = require("../View/InputView");

class Bridge {
  #size;

  readBridgeSize() {
    InputView.readBridgeSize((size) => {
      this.#size = size;
      console.log(this.#size)
    })
  } 
}

module.exports = Bridge;