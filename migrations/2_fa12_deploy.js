const FA12 = artifacts.require("FA1-2");
const { MichelsonMap } = require("@taquito/taquito");
const { alice } = require("../scripts/sandbox/accounts");
const carthageAccount = require("../faucet");

const totalSupply = 100000;

const initialStorage = {
  ledger: MichelsonMap.fromLiteral({
    [alice.pkh]: {
      balance: totalSupply,
      allowances: new MichelsonMap()
    }
  }),
  totalSupply
};

module.exports = async (deployer, _network, accounts) => {
  deployer.deploy(FA12, initialStorage);
};
