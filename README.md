# Simple NFT indexer contract

Use it to retrieve the list of the owned nfts by a single address

## Steps to deploy on mumbai

First copy the `configs/ganache.json` in `configs/network.json` and fill it with real values. Let's say we're deploying on mumbai.

Assuming you've `ganache`, `truffle` and `yarn` in your enviornment:

```
yarn
yarn deploy mumbai
```

Now you should see the `contract_address` field automatically filled in your configuration. For me was: `0x9f9C4ED4e015df9f997b29DAfe82B3245562A368`.

## Working in Ganache

Open a terminal and run: 
```
yarn ganache
```

It will create a new ganache instance using the mnemonic contained in your `configs/ganache.json` file.

Then you can do your changes and deploy with:
```
yarn deploy ganache
```

## Test it

Now you can run the only test we created using:

```
yarn test:owned mumbai
```

Result should be something like:

```
Trying retrieving NFTs from contract...
[
  '1',   '8',   '12',  '15',  '18',  '21',  '24',  '26',
  '30',  '32',  '36',  '39',  '42',  '46',  '49',  '54',
  '57',  '60',  '63',  '66',  '69',  '72',  '76',  '77',
  '83',  '86',  '90',  '93',  '96',  '99',  '102', '105',
  '108', '111', '114', '117', '123', '130', '137', '140',
  '143', '146', '150', '154', '157', '160', '163', '166',
  '168', '170', '174', '178', '181', '184', '187', '190',
  '193', '195', '198', '202', '204', '207', '210', '212',
  '216', '219', '222', '225', '232', '235', '241', '244',
  '247', '250', '253', '256', '261', '263', '266', '269',
  '272', '276', '279', '282', '288', '291', '298', '299',
  '300', '303', '305', '308', '312'
]
```