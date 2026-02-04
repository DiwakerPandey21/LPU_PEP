// Promise.resolve('Hello, World!')
//     .then(result => console.log(result))
//     .catch(error => console.error(error));

function buyMaggie() {
    return new Promise((resolve) => {
        console.log("1. Buying the maggie...");
        setTimeout(() => {
            console.log("2. Maggie got it");
            resolve();
        }, 1000);
    });
}

buyMaggie();