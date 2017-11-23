const SHA256 = require('crypto-js/sha256');

class Block{
	constructor(index, timestamp, data, previousHash = '') {
		this.index = index;
		this.timestamp = timestamp;
		this.data = data;
		this.previousHash = previousHash;
		this.hash = this.calculateHash()
	}

	calculateHash() {
		return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
	}
}

class Chain {
	constructor() {
		this.chain = [this.createGenesisBlock()];
	}

	createGenesisBlock() {
		return new Block(0,"22/12/2017","Genesis Block","0");
	}

	getLatestBlock() {
		return this.chain[this.chain.length - 1];
	}

	addBlock(newBlock) {
		newBlock.previousHash = this.getLatestBlock().hash;
		newBlock.hash = newBlock.calculateHash();
		this.chain.push(newBlock)
	}

	isChainValid() {
		for (let i = 1; i < this.chain.length; i++) {
			const currentBlock = this.chain[i];
			const previousBlock = this.chain[i -1];
			if(currentBlock.hash !== currentBlock.calculateHash()) {
				return false;
			}
			if(currentBlock.previousHash !== previousBlock.hash) {
				return false
			}
		}
		return true

	}
}

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
