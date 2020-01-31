module.exports = {
  port: 8555,
  norpc: true,
  deepSkip: true,
  compileCommand: '../node_modules/.bin/truffle compile',
  testCommand:
    'node --max-old-space-size=4096 ../node_modules/.bin/truffle test --network coverage',
  skipFiles: ['imports', 'EventCaller.sol', 'dummyDaiFeed.sol', 'mocks'],
  forceParse: ['imports/ERC1132', 'imports/govblocks-protocol', 'mocks']
};
