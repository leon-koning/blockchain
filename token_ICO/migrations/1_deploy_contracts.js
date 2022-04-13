const LeonToken = artifacts.require("./LeonToken.sol");

module.exports = function (deployer) {
  deployer.deploy(LeonToken, 1000000);
};
