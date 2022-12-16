const { makeBridge } = require("../BridgeMaker");
const { generate } = require("../BridgeRandomNumberGenerator");
const { STATE, SIGN } = require("../Constants");
const InputView = require("../View/InputView");
const OutputView = require("../View/OutputView");
const Bridge = require("./Bridge");
const BridgeGame = require("./BridgeGame");

class Controller {
  constructor() {
    OutputView.printStart();
    this.bridgeGame = new BridgeGame();
    this.attemptNumber = 1;
  }

  readBridgeSize() {
    InputView.readBridgeSize((size) => {
      this.bridge = new Bridge(makeBridge(size, generate));
      this.readMoving();
    });
  }

  readMoving() {
    InputView.readMoving((space) => {
      this.decideMoveOrStop(this.bridge.getState(space), space);
    });
  }

  readGameCommand() {
    InputView.readGameCommand((command) => {
      command === SIGN.restart ? this.handleRestart() : this.handleQuit();
    });
  }

  decideMoveOrStop(state, space) {
    if (state === STATE.move) this.handleMove(space);
    if (state === STATE.stop) this.handleStop(space);
    if (state === STATE.success) this.handleSuccess(space, state);
  }

  handleMove(space) {
    this.bridgeGame.move(space);
    OutputView.printMap(this.bridgeGame.getMap());
    this.readMoving();
  }

  handleStop(space) {
    this.bridgeGame.stop(space);
    OutputView.printMap(this.bridgeGame.getMap());
    this.readGameCommand();
  }

  handleSuccess(space, state) {
    this.bridgeGame.move(space);
    OutputView.printMap(this.bridgeGame.getMap());
    OutputView.printResult(this.bridgeGame.getMap(), state, this.attemptNumber);
  }

  handleRestart() {
    this.bridgeGame.retry();
    this.attemptNumber += 1;
    this.bridge.setState();
    this.readMoving();
  }

  handleQuit() {
    OutputView.printResult(
      this.bridgeGame.getMap(),
      STATE.stop,
      this.attemptNumber
    );
  }
}

module.exports = Controller;
