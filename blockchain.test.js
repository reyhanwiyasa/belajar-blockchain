const Blockchain = require("./blockchain");
const Block = require("./block");

describe("blockchain test", () => {
  let blockchain, newChain;
  beforeEach(() => {
    blockchain = new Blockchain();
    newChain = new Blockchain();
  });

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
    beforeEach(() => {
      blockchain.addBlock({ data: "Bears" });
      blockchain.addBlock({ data: "Beets" });
      blockchain.addBlock({ data: "Battlestar" });
    });
    describe("when the chain does not start with genesis block", () => {
      it("returns false", () => {
        blockchain.chain[0] = { data: "fake-genesis" };
        expect(Blockchain.isValidChain(blockchain.chain)).toBe(false);
      });
    });

    describe("when the chain starts with genesis block and has multiple block", () => {
      describe("and a lastHash reference has changed", () => {
        it("returns false", () => {
          blockchain.chain[2].lastHash = "broken-lastHash";
          expect(Blockchain.isValidChain(blockchain.chain)).toBe(false);
        });
      });

      describe("and the chain contains a block with an invalid field", () => {
        it("returns false", () => {
          blockchain.chain[2].data = "broken-data";
          expect(Blockchain.isValidChain(blockchain.chain)).toBe(false);
        });
      });

      describe("and all the blocks are valid", () => {
        it("returns true", () => {
          expect(Blockchain.isValidChain(blockchain.chain)).toBe(true);
        });
      });
    });
  });

  describe("replaceChain()", () => {});
});
