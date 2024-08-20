const FlashFundsToken = artifacts.require("FlashFundsToken");

module.exports = function(deployer) {
    const initialSupply = 1000000; // 1 million tokens
    deployer.deploy(FlashFundsToken, initialSupply);
};
let token = await FlashFundsToken.deployed();
let accounts = await web3.eth.getAccounts();
let balance = await token.balanceOf(accounts[0]);
console.log(balance.toString());
await token.mint(accounts[1], 1000);
await token.burn(500);
