const { makeBridge } = require("../BridgeMaker");
const { generate } = require("../BridgeRandomNumberGenerator");
const { STATE } = require("../Constants");
const InputView = require("../View/InputView");
const Bridge = require("./Bridge");
const BridgeGame = require("./BridgeGame");

class Controller {
  #size;
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  readBridgeSize() {
    InputView.readBridgeSize((size) => {
      this.#size = size;
      this.bridge = new Bridge(makeBridge(this.#size, generate));
      this.readMoving();
    });
  }

  readMoving() {
    InputView.readMoving((space) => {
      this.decideMoveOrStop(this.bridge.getState(space), space);
    });
  }

  decideMoveOrStop(state, space) {
    if (state === STATE.move) {
      this.bridgeGame.move(space);
      this.readMoving();
    }
    if (state === STATE.stop) {
      this.bridgeGame.stop(space);
    }
  }
}

module.exports = Controller;
