const VendingMachcine = artifacts.require("VendingMachcine")

contract("VendingMachcine", (accounts) => {

    before(async () => {
        instance = await VendingMachcine.deployed()
    })

    it('Confirm that the initial vending mschine balance is 100', async () => {
        let balance = await instance.getVendingMachineBalance()
        assert.equal(balance, 100, "The initial balance should be atleast 100 donuts")
    });

    it('Ensure that balace can be updated by restocking', async () => {
        await instance.restock(100)
        let balance = await instance.getVendingMachineBalance();
        assert.equal(balance, 200, "The balance should be 200 after restocking")
    });

    it('Ensure the pachase can be well performed', async () => {
        await instance.puchase(1, { from: accounts[0], value: web3.utils.toWei("3", 'ether') })
        let balance = await instance.getVendingMachineBalance();
        assert.equal(balance, 199, "The balance should be 199 after purchasing")
    });

});

