async function main() {
    const GLDToken = await ethers.getContractFactory("GLDToken");

    // Start deployment, returning a promise that resolves to a contract object
    const gldtoken = await GLDToken.deploy("1000000000000000000000");
    console.log("Contract deployed to address:", gldtoken.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

    // deployed to ropsten 0x769C8Bc9C5e3cEc443E411513d29B715Cd4D4af5