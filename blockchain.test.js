const Blockchain = require("./blockchain");
const Block = require("./block");

describe("blockchain test", () => {
  const blockchain = new Blockchain();

  it("it is an `Array` instance", () => {
    expect(blockchain.chain instanceof Array).toBe(true);
  });

  it("the first block is genesis", () => {
    expect(blockchain.chain[0]).toEqual(Block.genesis());
  });

  it("adds a new block to the blockchain", () => {
    const newData = "foo-bar";
    blockchain.addBlock({ data: newData });

    expect(blockchain.chain[blockchain.chain.length - 1].data).toEqual(newData);
  });
});
