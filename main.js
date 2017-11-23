const SHA256 = require('crypto-js/sha256');

let duncanCoin = new Chain();
duncanCoin.addBlock(
	new Block(1, "10/01/2018", {amount: 5})
);
duncanCoin.addBlock(
	new Block(2, "10/03/2018", {amount: 500})
);
duncanCoin.addBlock(
	new Block(3, "10/05/2018", {amount: 5000})
);

console.log(duncanCoin.isChainValid());
duncanCoin.chain[2].data = {amount:1000000};
console.log(duncanCoin.isChainValid());