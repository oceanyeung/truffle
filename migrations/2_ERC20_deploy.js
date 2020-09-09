const erc20 = artifacts.require("ERC20");

module.exports = async (deployer, network, accounts) => {
  await deployer.deploy(erc20);
  let erc = await erc20.deployed();
  await erc.mint(accounts[1], 100);

  // await erc.balanceOf(accounts[1]).then(bal => {
  //   if (bal != 100) {
  //     console.log("ERROR: Balance is not correct: " + bal);
  //   } else {
  //     console.log("Balance is correct");
  //   }
  // });
};

