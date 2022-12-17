const { STATE } = require("../Constants");

class UserState {
  #answerBridge;
  #bridgeIndex;

  constructor(answerBridge) {
    this.#answerBridge = answerBridge;
    this.#bridgeIndex = 0;
  }

  getState(space) {
    if (this.#answerBridge[this.#bridgeIndex] !== space) return STATE.stop;
    if (this.#answerBridge[this.#bridgeIndex] === space) {
      this.#bridgeIndex++;
      if (this.#bridgeIndex === this.#answerBridge.length) return STATE.success;
      return STATE.move;
    }
  }

  initBridgeIndex() {
    this.#bridgeIndex = 0;
  }
}

module.exports = UserState;
