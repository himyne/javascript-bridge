const { makeBridge } = require("../BridgeMaker");
const { generate } = require("../BridgeRandomNumberGenerator");
const { STATE } = require("../Constants");
const InputView = require("../View/InputView");
const OutputView = require("../View/OutputView");
const Bridge = require("./Bridge");
const BridgeGame = require("./BridgeGame");

class Controller {

  constructor() {
    OutputView.printStart();
    this.bridgeGame = new BridgeGame();
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
      
    })
  }

  decideMoveOrStop(state, space) {
    if (state === STATE.move) this.handleMove(space);
    if (state === STATE.stop) this.handleStop(space);
    if (state === STATE.success) this.handleSuccess(space, state);
  }

  handleMove(space) {
    this.bridgeGame.move(space);
    this.showResult();
    this.readMoving();
  }

  handleStop(space) {
    this.bridgeGame.stop(space);
    this.showResult();
    this.readGameCommand();
  }

  handleSuccess(space, state) {
    this.bridgeGame.move(space);
    OutputView.printMap(this.bridgeGame.getMap())
    OutputView.printResult(this.bridgeGame.getMap(), state);
  }

  showResult(){
    OutputView.printMap(this.bridgeGame.getMap());
  }
}

module.exports = Controller;
