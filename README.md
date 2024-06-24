Hi, this is me learning blockchain development through a [udemy course](https://www.udemy.com/share/1022Su3@s81Hzg2wSFWWDJpCB5mh33qxZtR0BqzG87Yp2Ode-QzeslVsPT-eVkh5tIDjAJSITw==/). I'm documenting what i learn in this README.

<h2> Day 1</h2>

  Videos watched: 5/138 </br>
  
  I learned the preview of what is a blockchain and cryptocurrencies. Basically, as the name suggests, a blockchain is a series of blocks that are chained (duh?). It enables of a decentralized transaction, which means a trustless system.
  In contrast of what a centralized system is (such as bank where they hold all the authorities for every transaction that happens), a decentralized system means that no single entity holds power on all of the transactions. Instead,
  every single transaction that ever happened is stored in the blockchain. There's also the term  public and private key, where for each transaction that you do will be signed using your private key, and other people can verify that the transaction is valid using their public key. </br>
  
  Many people associates the blockchain and cryptocurrency together, some even assume that they're the same. Cyrptocurrency is a digital value that uses the blockchain for its transactional usage. Every block contains the data of a transaction, the hash for that certain block, and
  the lastHash from the previous block. This ensures that each and every single block is unique. When a new block gets added to the blockchain, the block needs to be validated first. The ones who validates those blocks are called the miners. Validating those blocks require them to solve something
  called Proof of Work, which takes lots of computational gpu and time. But when they do solve it, they'll be rewarded with cryptocurrencies. I still don't know how they got those cryptocurrencies but i think a simple google/chatgpt search will work.

  **Things i've learned:** </br>
  - Blockchain definition
  - How cryptocurrency relates to blockchain
  - What miners do

<h2> Day 2 </h2>
  Videos watched: 11/138 </br>
  
  I did a flash coding of making blocks in the blockchain. I created block in vscode using JS, where the Block class consists of 4 attributes, which is timestamp, lastHash, hash, and data. I also learn how to make the class in TDD style using
  a testing framework called Jest, and I learn how to use the factory design pattern to make an instance without calling the constructor, such as: </br>
  ```
class Block {
  constructor({ timestamp, lastHash, hash, data }) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }

//Here's the factory method
  static genesis() {
    return new this(GENESIS_DATA);
  }
}
  ```

**Things i've learned:** </br>
- Flash coding of making a block
- In JS, to import a class from another file, simply do `const ClassName = require('./filename')`
- Study more about TDD
- TDD in JS is done by using `describe` and `it`, for example:
  ```
  describe("Block", () => {
  const timestamp = "a-date";
  const hash = "foo-hash";
  const lastHash = "bar-hash";
  const data = ["blockchain", "data"];
  const block = new Block({ timestamp, hash, lastHash, data });

  it("has a timestamp, lasthash, hash, and data property", () => {
    expect(block.timestamp).toEqual(timestamp);
    expect(block.hash).toEqual(hash);
    expect(block.lastHash).toEqual(lastHash);
    expect(block.data).toEqual(data);
  });
  ```
- Factory method / design pattern

<h2> Day 3</h2>

Videos watched: 6/138 </br>
I slacked off today, not much of new things that i learned/
**Things i've learned:** </br>
- Create a mineBlock() tests

  
  
