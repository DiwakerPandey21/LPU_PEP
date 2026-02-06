function discountCalculator(discountPercent) {
  return function (price) {
    let discount = (price * discountPercent) / 100;
    return price - discount;
  };
}

let applyDiscount = discountCalculator(10);

console.log(applyDiscount(100)); 
console.log(applyDiscount(500)); 