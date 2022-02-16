const NFTIndexer = artifacts.require("./NFTIndexer.sol");
const fs = require('fs')

module.exports = async (deployer, network) => {
  
  await deployer.deploy(NFTIndexer, { gas: 5000000 });
  const contract = await NFTIndexer.deployed();
  
  let configs = JSON.parse(fs.readFileSync(process.env.CONFIG).toString())
  console.log('Saving address in config file..')
  configs.contract_address = contract.address
  fs.writeFileSync(process.env.CONFIG, JSON.stringify(configs, null, 4))
  console.log('--')
};
