const { SIGN } = require("../Constants");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #map;

  constructor() {
    this.#map = {
      upperMap : [],
      lowerMap : [],
    }
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(space) {
    if (space === SIGN.up) this.selectUpBridge(SIGN.right);
    if (space === SIGN.down) this.selectDownBridge(SIGN.right);
  }

  stop(space) {
    if (space === SIGN.up) this.selectUpBridge(SIGN.wrong);
    if (space === SIGN.down) this.selectDownBridge(SIGN.wrong);
  }

  selectUpBridge(sign) {
    this.#map.upperMap.push(sign);
    this.#map.lowerMap.push(SIGN.blank);
  }

  selectDownBridge(sign) {
    this.#map.upperMap.push(SIGN.blank);
    this.#map.lowerMap.push(sign);
  }

  getMap() {
    return this.#map;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
