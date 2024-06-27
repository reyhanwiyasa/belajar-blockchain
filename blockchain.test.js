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

  describe("isValidChain()", () => {
    describe("when the chain does not start with genesis block", () => {
      it("returns false", () => {
        blockchain.chain[0] = { data: "fake-genesis" };

        expect(Blockchain.isValidChain(blockchain.chain)).toBe(false);
      });
    });
    describe("when the chain starts with genesis block and has multiple block", () => {
      describe("and a lastHash reference has changed", () => {
        it("returns false", () => {});
      });

      describe("and the chain contains a block with an invalid field", () => {
        it("returns false", () => {});
      });
      describe("and all the blocks are valid", () => {
        it("returns true", () => {});
      });
    });
  });
});
