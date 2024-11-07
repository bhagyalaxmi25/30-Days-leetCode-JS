async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis))
}
sleep(1000).then(() => {
    console.log('Sleep for 1 second');
});