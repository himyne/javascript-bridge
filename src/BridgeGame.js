const MapMaker = require('./MapMaker');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #answerBridgeArray;
  #bridgeIndex;

  constructor(answerBridgeArray) {
    this.mapMaker = new MapMaker();
    this.#answerBridgeArray = answerBridgeArray;
    this.#bridgeIndex = 1;
  }

  decideMoveOrStop(direction) {
    if (direction !== this.#answerBridgeArray[this.#bridgeIndex - 1]) return this.stop(direction);
    if (this.#bridgeIndex === this.#answerBridgeArray.length) {
      this.mapMaker.makeFinalSuccess(direction);
      return '우승';
    }
    return this.move(direction);
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    this.#bridgeIndex += 1;
    this.mapMaker.selectRightBridge(direction);
    return '성공';
  }

  stop(direction) {
    this.mapMaker.selectWrongBridge(direction);
    return '실패';
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
