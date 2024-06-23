const Block = require("./block");

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
});
