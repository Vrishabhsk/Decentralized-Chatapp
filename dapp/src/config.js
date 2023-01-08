export const CONTRACT_ADDRESS = ""; // insert the contract address obtained from truffle console

export const CONTRACT_ABI = []; // insert the abi gained from ChatDapp.json after deploying

// sample abi is as follows
/* [
  {
    inputs: [
      {
        internalType: "string",
        name: "_id",
        type: "string",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "string",
        name: "_timestamp",
        type: "string",
      },
      {
        internalType: "string",
        name: "_message",
        type: "string",
      },
    ],
    name: "shootMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMessages",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "id",
            type: "string",
          },
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "string",
            name: "message",
            type: "string",
          },
          {
            internalType: "string",
            name: "timestamp",
            type: "string",
          },
        ],
        internalType: "struct ChatDapp.Message[]",
        name: "userMessages",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "getRecipients",
    outputs: [
      {
        internalType: "address[]",
        name: "recps",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
]; */
