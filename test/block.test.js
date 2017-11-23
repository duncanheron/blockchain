const block = require('../Classes/Block');
const chain = require('../Classes/Chain');

test('block creates', () => {
	let newBlock = new block(2, "10/03/2018", {amount: 500});

	expect(newBlock.data).toEqual({amount: 500});
	expect(newBlock.index).toEqual(2);
	expect(newBlock.timestamp).toEqual("10/03/2018");
	expect(newBlock.hash).toEqual('4699d30f22d6ed0a9afd4bd7cb86899eef6db543bd869548f7ea2223ca823d1a');
});