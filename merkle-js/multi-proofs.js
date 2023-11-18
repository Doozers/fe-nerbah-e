import { StandardMerkleTree } from "@openzeppelin/merkle-tree";
import fs from "fs";

// scenario 1
const values = [
    ["0x1111111111111111111111111111111111111111", "1"],
    ["0x2222222222222222222222222222222222222222", "2"],
    ["0x3222222222222222222222222222222222222222", "3"],
    ["0x4222222222222222222222222222222222222222", "4"],
    ["0x5222222222222222222222222222222222222222", "5"],
    ["0x6222222222222222222222222222222222222222", "6"],
    ["0x7222222222222222222222222222222222222222", "7"],
    ["0x8222222222222222222222222222222222222222", "8"],
    ["0x9222222222222222222222222222222222222222", "9"],
    ["0x0222222222222222222222222222222222222222", "0"]
];

const tree = StandardMerkleTree.of(values, ["address", "uint256"]);

let to_prove = [];

for (const [i, v] of tree.entries()) {
    if (v[0] === '0x6222222222222222222222222222222222222222' || v[0] === '0x2222222222222222222222222222222222222222') {
        to_prove.push(i);
        console.log('Value:', v);
    }
}

console.log('Proofs:', tree.getMultiProof(to_prove));

console.log('Merkle Root:', tree.root);

fs.writeFileSync("tree.json", JSON.stringify(tree.dump()));

import { StandardMerkleTree } from "@openzeppelin/merkle-tree";
import fs from "fs";