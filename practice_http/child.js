process.on("message", (data) => {
    console.log(data);
    process.exit(0);
});