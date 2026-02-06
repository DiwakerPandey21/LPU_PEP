let prices = [100, 200, 300];

let gstPrices = prices.map(price => price + (price * 18) / 100);

console.log(gstPrices);