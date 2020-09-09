const erc20 = artifacts.require("ERC20");

console.log("TESTING");
contract("ERC20", accounts => {
    it("Balance should be 100", async () => {
        await erc20.deployed()
            .then(async instance => instance.balanceOf(accounts[1]))
            .then(balance => {
                assert.equal(
                    balance.valueOf(),
                    100,
                    "Balance wasn't 100"
                )
            });
    });
});