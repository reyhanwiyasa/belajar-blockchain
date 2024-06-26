Hi, this is me learning blockchain development through a [udemy course](https://www.udemy.com/share/1022Su3@s81Hzg2wSFWWDJpCB5mh33qxZtR0BqzG87Yp2Ode-QzeslVsPT-eVkh5tIDjAJSITw==/). I'm documenting what i learn in this README.

<h2> Day 1</h2>

Videos watched: 5/138 </br>

I learned the preview of what is a blockchain and cryptocurrencies. Basically, as the name suggests, a blockchain is a series of blocks that are chained (duh?). It enables of a decentralized transaction, which means a trustless system.
In contrast of what a centralized system is (such as bank where they hold all the authorities for every transaction that happens), a decentralized system means that no single entity holds power on all of the transactions. Instead,
every single transaction that ever happened is stored in the blockchain. There's also the term public and private key, where for each transaction that you do will be signed using your private key, and other people can verify that the transaction is valid using their public key. </br>

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

<h2> Day 3 </h2>

Videos watched: 6/138 </br>
I slacked off today, not much of new things that i learned.

**Things i've learned:** </br>
- Create a mineBlock() tests

<h2> Day 4 </h2>
Videos watched: 16/138 </br>
I learned mostly about hashing. In this course (so far), i learned how to use the SHA-256, OR Secure Hash Algorithm to hash the blocks. I also learn the difference of hashing and encrypting, which is hashing is one way, and encrypting is two way (you can decrypt back to original strings). I completed section 1 for the course, 11 or 12 more to go. Wish me luck, me!

**Things i've learned:** </br>
- Hashing function (SHA-256)
- here's the code to hash an object. the `...inputs` mean the function takes an indefinite amount of arguments so it doesn't matter the order of the argument (since we're using sort), and the `.digest` function is used to hash the string
```

const cryptoHash = (...inputs) => {
const hash = crypto.createHash("sha256");

hash.update(inputs.sort().join(" "));

return hash.digest("hex");
};

```

<h2> Day 5 </h2>
Videos watched: 19/138 </br>
Today i created a test for the blockchain class. I haven't implemented it yet though. I learned about chain validation and three requirements for a chain to fulfill to be valid, which basically they need to consist of valid blocks. I have yet to learn for chain replacement, but I hope I'll learn it tomorrow

**Things i've learned:** </br>
- Chain validation

<h2> Day 6 </h2>
Videos watched: 19/138 </br>
Didn't open the video today cuz busy on doing something🫠

<h2> Day 7 </h2>
Videos watched: 19/138 </br>
Same as before day 6,,,,

<h2> Day 8 </h2>
Videos watched: 20/138 </br>
Not many progress done today, but I've implemented the isValidChain() method and now is making the replaceChain() method. The TDD's starting to get difficult but I guess it's easier than not having to do TDD.

<h2> Day 9 </h2>
Videos watched: 21/138 </br>
I've completed section 2 and now am entering the section 3 of the course, which covers about the Proof Of Work and block mining. I kinda get the gist of what miners do, they basically search for a digit called the nonce (usually starting from 0) that if it's added with the block data, will result in a valid hash starting with proper amount of leading zeros (also called the difficulty), which takes a lot of computational work.

**Things i've learned:** </br>
- Proof of Work and their terms (like nonce and difficulty)
