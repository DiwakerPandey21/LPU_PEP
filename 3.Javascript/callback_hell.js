// Callback Hell - Making Maggie
function buyMaggie(callback) {
    console.log("1. Buying the maggie...");
    setTimeout(() => {
        console.log("2. Maggie got it");
        callback();
    }, 1000);
}

function prepareMaggie(callback) { i
    console.log("3. Starting to prepare the maggie...");
    setTimeout(() => {
        console.log("4. Maggie prepared");
        callback();
    }, 1000);
}

function eatMaggie(callback) {
    console.log("5. Maggie eaten");
    setTimeout(() => {
        console.log("6. Maggie eating done");
        callback();
    }, 1000);
}

// Callback Hell
buyMaggie(() => {
    prepareMaggie(() => {
        eatMaggie(() => {
            console.log("All done!");
        });
    });
});