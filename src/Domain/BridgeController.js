const { makeBridge } = require("../BridgeMaker");
const { generate } = require("../BridgeRandomNumberGenerator");
const { STATE } = require("../Constants");
const InputView = require("../View/InputView");
const OutputView = require("../View/OutputView");
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
    if (state === STATE.move) this.handleMove(space);
    if (state === STATE.stop) this.handleStop(space);
  }

  handleMove(space) {
    this.bridgeGame.move(space);
    this.showResult();
    this.readMoving();
  }

  handleStop(space) {
    this.bridgeGame.stop(space);
    this.showResult();
  }

  showResult(){
    OutputView.printMap(
      this.bridgeGame.getUpperMap(),
      this.bridgeGame.getLowerMap()
    );
  }
}

module.exports = Controller;
