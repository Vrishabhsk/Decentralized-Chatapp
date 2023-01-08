# Smart Contract and Local Ethereum Chain

The smart contract was built using solidity and tested on Remix IDE. The smart contract is about a chatting application for any users connected to the chain.

## Follow these steps to run this project locally

```
1. Node.JS and Truffle shold be installed globally in your system
2. Install Ganache on your system
3. Set up thw workspace
4. Clone the repo and go to dapp_contract folder
```

## Commands to run after completing above mentioned steps

```
// install packages
npm i (or) yarn install

// compile the project
truffle compile

// migrate the compiled contract
truffle migrate

// following is the truffle console related commands
truffle console // the terminal will shift to a truffle console

chat = await ChatDapp.deployed() // get the deployed contract details
chat.address // will display the address of the deployed contract - needed for react project (different everytime ganache is launched)
```

## Requirements for frontend

Get the contract address from the truffle console and save it. Also visit the build folder after the truffle migrate commands and save the abi for later use in the react app.

## Inject into Metamask

To make realistic transactions you have to inject the accounts from the ganache project into your metamask account. They are done as per the following instructions

```
1. Get the private key of the account
2. Go to metamask and select import account option in the account icon dropdown
3. insert the private key of the account and enjoy 100 eth - just for testing thou
4. Below are the previews for the same
```
![Screenshot from 2023-01-07 14-53-29](https://user-images.githubusercontent.com/71686151/211189820-3ed809e6-7972-469f-b605-3393f67afabb.png)

![Screenshot from 2023-01-07 14-53-32](https://user-images.githubusercontent.com/71686151/211189825-e0c363ae-c59d-4a9d-8d6c-2ee50507b15c.png)

![Screenshot from 2023-01-07 14-53-16](https://user-images.githubusercontent.com/71686151/211189974-8ba33844-4c9a-42b8-9b6b-2ddef4784f35.png)

![Screenshot from 2023-01-07 14-53-23](https://user-images.githubusercontent.com/71686151/211189979-650ba70b-45c8-4c66-90b9-97c914921994.png)
