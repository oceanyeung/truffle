const erc20 = artifacts.require("ERC20");

module.exports = async (deployer, network, accounts) => {
  await deployer.deploy(erc20);
  let erc = await erc20.deployed();
  await erc.mint(accounts[1], 100);
};

