const vendingMachine = artifacts.require("vendingMachine");

module.exports = function (deployer) {
    deployer.deploy(vendingMachine);
};
