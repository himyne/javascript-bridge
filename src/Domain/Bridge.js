const { makeBridge } = require("../BridgeMaker");
const { generate } = require("../BridgeRandomNumberGenerator");
const InputView = require("../View/InputView");

class Bridge {
  #size;

  readBridgeSize() {
    InputView.readBridgeSize((size) => {
      this.#size = size;
      this.readMoving();
    })
  }

  makeAnswerBridge() {
    const answerBridge = makeBridge(this.#size, generate)
    return answerBridge;
  }
  
  readMoving() {
    InputView.readMoving((space) => {
      console.log(space)
    })
  }
}

module.exports = Bridge;