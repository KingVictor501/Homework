//1
let pizzaToppings = ["sausage", "chicken", "peppers", "mushrooms"];

//2
function greetCustomer() {
  console.log("Welcome to Pizza House our toppings are ${pizzaToppings}")
}

//3

function getPizzaOrder(size, crust, ...toppings) {
 console.log(toppings)
let message = `One ${size} ${crust} crust pizza with `;
for (let topping of toppings) {
console.log(topping);
message += `${topping}, `;
}
console.log(message)
};

getPizzaOrder("large", "hand-tossed", "sausage", "peppers");

//4
function preparePizza([size, crust, ...toppings]) {
  console.log("...Cooking pizza...");
  return {
  size,
  crust,
  toppings,
};
};

//5

