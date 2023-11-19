export const ADDRESS = "0x0EE6b775b4a52210B34aC16AB1e888c81e3D42Ab";

export const ABI = [
  {
    type: "constructor",
    name: "__init__",
    inputs: [
      {
        name: "root",
        type: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "verify",
    inputs: [
      {
        name: "proof",
        type: "uint256[4]",
      },
      {
        name: "leaf",
        type: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "multi_verify",
    inputs: [
      {
        name: "proof",
        type: "uint256[5]",
      },
      {
        name: "proof_flags",
        type: "bool[6]",
      },
      {
        name: "leaves",
        type: "uint256[2]",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "MerkleProofInvalidMultiproof",
    inputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "Checker",
    inputs: [
      {
        name: "res",
        type: "uint256",
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "MemoryBuffer",
    inputs: [
      {
        name: "offset",
        type: "uint256",
        indexed: false,
      },
      {
        name: "len",
        type: "uint256",
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "MemoryBufferWriter",
    inputs: [
      {
        name: "buf",
        type: "tuple",
        components: [
          {
            name: "offset",
            type: "uint256",
          },
          {
            name: "len",
            type: "uint256",
          },
        ],
        indexed: false,
      },
      {
        name: "cur",
        type: "tuple",
        components: [
          {
            name: "cur",
            type: "uint256",
          },
          {
            name: "len",
            type: "uint256",
          },
        ],
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "MemoryBufferReader",
    inputs: [
      {
        name: "buf",
        type: "tuple",
        components: [
          {
            name: "offset",
            type: "uint256",
          },
          {
            name: "len",
            type: "uint256",
          },
        ],
        indexed: false,
      },
      {
        name: "cur",
        type: "tuple",
        components: [
          {
            name: "cur",
            type: "uint256",
          },
          {
            name: "len",
            type: "uint256",
          },
        ],
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Context",
    inputs: [],
    anonymous: false,
  },
] as const;
