async function main() {
    const Greeter = await ethers.getContractFactory("Greeter");

    // Start deployment, returning a promise that resolves to a contract object
    const greeter = await Greeter.deploy("Hello World!");
    console.log("Contract deployed to address:", greeter.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

    // deployed to ropsten: 0xCf39d8De16a9A08cf715a70B12C92d1998C29b8D


