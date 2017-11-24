const Block = require('./Classes/Block');
const Chain = require('./Classes/Chain');

let duncanCoin = new Chain(Block);
duncanCoin.addBlock(
	new Block(1, "09/01/2018", {amount: 5})
);
duncanCoin.addBlock(
	new Block(2, "11/03/2018", {amount: 500})
);
duncanCoin.addBlock(
	new Block(3, "10/05/2018", {amount: 5000})
);
console.log(duncanCoin.isChainValid());
console.log(duncanCoin);
console.log(duncanCoin.isChainValid());