const Controller = require("./Domain/BridgeController");

class App {
  play() {
    const controller = new Controller();
    controller.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
