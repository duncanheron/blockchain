class Chain {
	constructor(Block) {
		this.block = new Block(0,"22/12/2017","Genesis Block","0");
		this.chain = [this.createGenesisBlock()];
		this.difficulty = 0;
	}

	createGenesisBlock() {
		return this.block;
	}

	getLatestBlock() {
		return this.chain[this.chain.length - 1];
	}

	addBlock(newBlock) {
		newBlock.previousHash = this.getLatestBlock().hash;
		newBlock.hash = newBlock.calculateHash();
		// newBlock.mineBlock(this.difficulty);
		this.chain.push(newBlock);
	}

	isChainValid() {
		for (let i = 1; i < this.chain.length; i++) {
			const currentBlock = this.chain[i];
			const previousBlock = this.chain[i -1];
			// console.log(currentBlock.hash);
			// console.log(currentBlock.calculateHash());
			if(currentBlock.hash !== currentBlock.calculateHash()) {
				// console.log('1');
				return false;
			}
			if(currentBlock.hash !== currentBlock.calculateHash()) {
				// console.log('2');
				return false;
			}
		}
		return true;

	}
}

module.exports = Chain;