const LeonToken = artifacts.require("./LeonToken")

let leon;
let accounts;

before(async () => {
  accounts = await web3.eth.getAccounts();
  leon = await LeonToken.deployed();
});

describe ('LeonToken', async () => {
  it('Initializes the contract with the correct name and symbol', async () => {
    let name = await leon.name();
    assert.equal(name, 'LeonToken', 'Has incorrect name');
    let symbol = await leon.symbol();
    assert.equal(symbol, "LKT", 'Has incorrect symbol');
  });

  it('Allocates initial supply upon deployment', async () => {
    let totalSupply = await leon.totalSupply();
    assert.equal(totalSupply, 1000000, "Total supply should be 1M")
  });

  it('Gives the number of tokens allocated to the owner', async () => {
    let balance = await leon.balanceOf(accounts[0]);
    //balance = web3.utils.fromWei(balance, 'ether')
    assert.equal(balance, 1000000, 'Balance should be 1M tokens for contract creator')
  });
});
