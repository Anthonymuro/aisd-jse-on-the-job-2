console.log(
  `Welcome to ${PawsClawsPetStore}! we are the best ${storetype} around!`
);
const storename = "PawsClawsPetStore";
const storetype = "Pet Store";
//storename and type
console.log("here are the products we are currently selling:");
const product1 = "dog food";
const product2 = "cat litter";
const product3 = "bird seed";
const product4 = "fish tank";
const product5 = "hamster cage";
//products
console.log(
  `We sell ${product1}, ${product2}, ${product3}, ${product4}, and ${product5}`
);
const product1Price = 20.99;
const product2Price = 15.49;
const product3Price = 12.99;
const product4Price = 89.99;
const product5Price = 35.5;
//prices
console.log(`Each ${product1} costs $${product1Price}`);
const storehours = "Monday-Friday 9am-6pm, Saturday 10am-4pm, Sunday closed";
console.log(`Our store hours are ${storehours}`);
//array of products and prices
let product = [product1, product2, product3, product4, product5];
let prices = [
  product1Price,
  product2Price,
  product3Price,
  product4Price,
  product5Price,
];
//array of products and prices
console.log("Products:", products);
console.log("Prices:", prices);
product.push("pet shampoo");
prices.push(7.99);
console.log("we've added a new product!:", products);
console.log("updated prices:", prices);
//add a new product
product.pop();
prices.pop();
console.log("unfortunately we've sold out of pet shampoo:", products);
console.log("updated prices:", prices);
//remove a product
let featureedProduct = product.slice(0, 3);
console.log("this week, our featured products are:", featureedProduct);
//featured products
let newproduct = "cat toy,dog leash";
let newprices = (3.99, 5.99);
product.concat(newproduct);
prices.concat(newprices);
console.log("we've added new products:", products);
console.log("updated prices:", prices);
console.log("thanks for shopping at PawsClawsPetStore!");
console.log("here are our store hours for reference:", storehours);
