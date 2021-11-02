async function main() {
    const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
    const web3 = createAlchemyWeb3("https://eth-ropsten.alchemyapi.io/v2/9Q7xSWjqqtBjkKJGivEh18JbbI9QxoTZ");
    const blockNumber = await web3.eth.getBlockNumber();
    console.log("The latest block number is " + blockNumber);
}
main();