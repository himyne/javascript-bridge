const Bridge = require("./Domain/Bridge");
const OutputView = require("./View/OutputView");

class App {
  play() {
    OutputView.printStart();

    const bridge = new Bridge();
    bridge.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
