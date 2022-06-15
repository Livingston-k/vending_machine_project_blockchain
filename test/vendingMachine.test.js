const VendingMachcine = artifacts.require("VendingMachcine")

contract("VendingMachcine", (accounts) => {
    before(async () => {
        instance = await VendingMachcine.deployed()
    })
    it('Confirm that the initial vending mschine balance is 100', async () => {
        let balance = await instance.getVendingMachineBalance()
        assert.equal(balance, 100, "The initial balance should be atleast 100 donuts")

    });
})

