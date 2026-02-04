// This code will display a message in the console every 2 seconds
setInterval(() => {
    console.log("This message is displayed every 2 seconds");
}, 2000);
// Clear the interval after 10 seconds
setTimeout(() => {
    clearInterval(setInterval(() => {
        console.log("This message is displayed every 2 seconds");
    }, 2000));
}, 10000);