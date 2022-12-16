const { STATE } = require("../Constants");

class Bridge {
  #answerBridge;
  #bridgeIndex;

  constructor(answerBridge) {
    this.#answerBridge = answerBridge;
    console.log(this.#answerBridge)
    this.#bridgeIndex = 0;
  }

  getState(space) {
    if (this.#answerBridge[this.#bridgeIndex] !== space) return STATE.stop;
    if (this.#answerBridge[this.#bridgeIndex] === space) {
      this.#bridgeIndex++;
      if (this.#bridgeIndex === this.#answerBridge.length) {
        return STATE.success;
      }
      return STATE.move;
    }
  }
}

module.exports = Bridge;