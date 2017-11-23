class Chain {
	constructor(Block) {
		this.block = new Block(0,"22/12/2017","Genesis Block","0");
		this.chain = [this.createGenesisBlock()];
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
		this.chain.push(newBlock)
	}

	isChainValid() {
		for (let i = 1; i < this.chain.length; i++) {
			const currentBlock = this.chain[i];
			const previousBlock = this.chain[i -1];
			if(currentBlock.previousHash !== previousBlock.hash) {
				return false
			}
			if(currentBlock.hash !== currentBlock.calculateHash()) {
				return false;
			}
		}
		return true

	}
}

module.exports = Chain;