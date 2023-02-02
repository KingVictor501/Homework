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
function preparePizza([size, crust, toppings]) {
  console.log("...Cooking pizza...");
  const myPizza = {
    size: "large",
    crust: "hand-tossed",
    toppings: ["chicken", "sausage", "peppers"],
};
return myPizza;
};

//5
function servePizza(myPizza) {
  console.log(`Order up! Here's your ${myPizza[`size`]} ${myPizza[`crust`]} crust pizza with ${myPizza[`toppings`]}.Enjoy!`);
  return myPizza;
  }

console.log(servePizza(preparePizza(getPizzaOrder("large", "hand-tossed", "chicken", "sausage", "peppers"))));
