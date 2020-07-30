require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remember smile gloom forget flock slot'; 
let testAccounts = [
"0x1f3c8aeb1cc81a6a683e39f4fdf77af8d57379cefc64c8628df81b8304c75d3b",
"0x39797c5591ceab308429e7941f3deae08035dc1a4126379a7315598fc41f052e",
"0x358a7ca035a1cbeeb927846b5c81073d2ae32d96e383c7ecc8f501a6c902890f",
"0xce3001615283906f4c392f0de2aacb0b5c937d1e3c70a788578f2fe51342a0e7",
"0x3d7d4f5b9a876b5bafe9b9d6bfe3c7ceb4e3d7c6e46cb283a2ba81a03f03beb7",
"0x6b4c85ee28b2ef8b4acc6a60926d2e031a51f00fbff075a2aa9e1f03961411de",
"0xb66aebb9579186c0e9494d460f6560778e2bae7571013be82c615d0ea36917b5",
"0x7faf2fc006c7159b3fa076b094ebb3a9cde1c3afbf9d86b068e820e3a3fff6b2",
"0xe341e88f90af13764cc6d07524e86b6537fa0c49584f5746a8295a18d804c943",
"0xfa3fd7a601a26a5be50314852e39b21db13c1f331f513e2e936b8d71222e1426"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
