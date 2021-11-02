// interact_with_GLDToken.js

const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;


const contract = require("../artifacts/contracts/GLDToken.sol/GLDToken.json");

// console.log(JSON.stringify(contract.abi));

// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(network = "ropsten", API_KEY);

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract
const gldtokenContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);


async function main() {
    const totalSupply = await gldtokenContract.totalSupply();
    console.log("The entire total complete suppply is: " + totalSupply);
    const transfer = await gldtokenContract.transfer("0x07200421C2aC708A125587b542ecD13d0F55E082", "100000000000000000000");
    console.log("transferring...");
    const balanceOf = await gldtokenContract.balanceOf("0x07200421C2aC708A125587b542ecD13d0F55E082");
    console.log("new balance is..: " + balanceOf);



    // console.log("Setting the Greeting...");
    // const tx = await greeterContract.setGreeting("getting the hang of this");
    // await tx.wait();
}
main();
