const str = "THE SKY IS BLUE";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}

console.log("Reversed: " + reversed);

const skyIndex = str.indexOf("SKY");
const kIndex = skyIndex + 1; 
console.log("K from SKY: " + str[kIndex]);