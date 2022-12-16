const OUTPUT = {
  start: "다리 건너기 게임을 시작합니다.\n",
};

const INPUT_QUERY = {
  bridge_size: '다리의 길이를 입력해주세요.\n',
  moving_space: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n'
}

const PREFIX = '[ERROR]'
const ERROR = {
  not_number : `${PREFIX} 숫자를 입력해주세요`,
  out_of_range: `${PREFIX} 다리 길이는 3~20 사이의 숫자여야 합니다.`,
  blank: `${PREFIX} 숫자 사이에 공백이 있습니다.`,
  not_up_or_down: `${PREFIX} U나 D만 올 수 있습니다.`
}

const STATE = {
  stop: '실패',
  move: '이동',
  success: '성공',
}

module.exports = { OUTPUT, INPUT_QUERY, ERROR, STATE };
