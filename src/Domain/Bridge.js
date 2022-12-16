const { makeBridge } = require("../BridgeMaker");
const { generate } = require("../BridgeRandomNumberGenerator");
const InputView = require("../View/InputView");

class Bridge {
  #size;

  readBridgeSize() {
    InputView.readBridgeSize((size) => {
      this.#size = size;
      this.makeAnswerBridge()
    })
  }

  makeAnswerBridge() {
    const answerBridge = makeBridge(this.#size, generate)
    return answerBridge;
  }
  
}

module.exports = Bridge;