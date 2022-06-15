const VendingMachcine = artifacts.require("VendingMachcine");

module.exports = function (deployer) {
    deployer.deploy(VendingMachcine);
};
