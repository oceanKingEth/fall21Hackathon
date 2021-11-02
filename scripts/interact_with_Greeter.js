// interact_with_Greeter.js

const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;


const contract = require("../artifacts/contracts/Greeter.sol/Greeter.json");

// console.log(JSON.stringify(contract.abi));

// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(network = "ropsten", API_KEY);

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract
const greeterContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);


async function main() {
    const greeting = await greeterContract.greet();
    console.log("The greeting is: " + greeting);

    // console.log("Setting the Greeting...");
    // const tx = await greeterContract.setGreeting("getting the hang of this");
    // await tx.wait();
}
main();



