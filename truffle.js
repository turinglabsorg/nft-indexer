const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config()

module.exports = {
  contracts_directory: "./contracts/",
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: process.env.SCAN_KEY,
    polygonscan: process.env.SCAN_KEY
  },
  networks: {
    ganache: {
      host: "localhost",
      port: 8545,
      gasPrice: "150000000000",
      network_id: "*", // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, process.env.PROVIDER),
      network_id: 4,
      confirmations: 2,
      gasPrice: "10000000000",
      timeoutBlocks: 200,
      skipDryRun: true
    },
    ethereum: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, process.env.PROVIDER),
      network_id: 1,
      confirmations: 2,
      timeoutBlocks: 200,
      gas: 3000000,
      gasPrice: "100000000000",
      skipDryRun: true
    },
    mumbai: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, process.env.PROVIDER),
      network_id: 80001,
      confirmations: 2,
      gasPrice: "10000000000",
      timeoutBlocks: 200,
      skipDryRun: true
    },
    polygon: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, process.env.PROVIDER),
      network_id: 137,
      confirmations: 2,
      timeoutBlocks: 200,
      gas: 3000000,
      gasPrice: "100000000000",
      skipDryRun: true
    }
  },
  mocha: {
    reporter: "eth-gas-reporter",
    reporterOptions: {
      currency: "USD",
      gasPrice: 2,
    },
  },
  compilers: {
    solc: {
      version: "0.8.6"
    },
  },
};
