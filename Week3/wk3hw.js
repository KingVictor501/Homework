//1
let pizzaToppings = ["sausage", "chicken", "peppers", "mushrooms"];

//2
let greetCustomer() {
  console.log("Welcome to Pizza House our toppings are ${pizzaToppings}")
}

//3
let getPizzaOrder(size crust ...toppings) {
  console.log(`One ${size} ${crust} crust pizza with ${toppings.join(", ")} coming up!`);)
};

//4
let preparePizza(size, crust, toppings) {
  console.log("Cooking pizza");
  return {
  size,
  crust,
  toppings,
};
};

//5
