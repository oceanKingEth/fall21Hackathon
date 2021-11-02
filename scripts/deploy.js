async function main() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");

    // Start deployment, returning a promise that resolves to a contract object
    const hello_world = await HelloWorld.deploy("Hello World!");
    console.log("Contract deployed to address:", hello_world.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });



    // contract deployed to 0x3515DBF68D276ec4e65BA74347A11651F125EaAa