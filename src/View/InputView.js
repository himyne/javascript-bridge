const { Console } = require("@woowacourse/mission-utils");
const { INPUT_QUERY } = require("../Constants");
const { catchError } = require("../util");
const { checkBridgeSize, checkMovingSpace } = require("../Validation");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(readBridgeSizeCallback) {
    Console.readLine(INPUT_QUERY.bridge_size, (size) => {
      size = catchError(size, checkBridgeSize);
      if (!size) return this.readBridgeSize(readBridgeSizeCallback);
      readBridgeSizeCallback(size);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(readMovingCallback) {
    Console.readLine(INPUT_QUERY.moving_space, (space) => {
      space = catchError(space, checkMovingSpace);
      if (!space) return this.readMoving(readMovingCallback);
      readMovingCallback(space);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(readGameCommandCallback) {
    Console.readLine(INPUT_QUERY.game_restart, (command) => {
      readGameCommandCallback(command)
    })
  },
};

module.exports = InputView;
