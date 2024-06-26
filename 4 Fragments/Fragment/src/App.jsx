import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import './App.css'

function App() {
  // let foodItems = []

  let foodItems =  [
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Strawberries",
    "Blueberries",
    "Watermelon",
    "Pineapple",
    "Kiwi",
    "Mango",
    "Peach",
    "Plum",
    "Cherry",
    "Pear",
    "Apricot",
    "Coconut",
    "Avocado",
    "Lemon",
    "Lime",
    "Pomegranate",
    "Raspberry",
    "Blackberry",
    "Cantaloupe",
    "Honeydew",
    "Fig",
    "Guava",
    "Lychee",
    "Passion Fruit",
    "Dragon Fruit",
    "Star Fruit",
    "Persimmon",
    "Kiwi",
    "Cucumber",
    "Tomato",
    "Carrot",
    "Broccoli",
    "Cauliflower",
    "Spinach",
    "Lettuce",
    "Kale",
    "Cabbage",
    "Bell Pepper",
    "Potato",
    "Sweet Potato",
    "Onion",
    "Garlic",
    "Ginger",
    "Radish",
    "Turnip",
    "Beetroot",
    "Zucchini",
    "Eggplant",
    "Celery",
    "Parsley",
    "Cilantro",
    "Basil",
    "Mint",
    "Thyme",
    "Rosemary",
    "Sage",
    "Oregano",
    "Dill",
    "Chives",
    "Bay Leaf",
    "Cinnamon",
    "Nutmeg",
    "Vanilla",
    "Cocoa",
    "Coffee",
    "Tea",
    "Milk",
    "Butter",
    "Cheese",
    "Yogurt",
    "Cream",
    "Eggs",
    "Bread",
    "Bagel",
    "Croissant",
    "Muffin",
    "Pancake",
    "Waffle",
    "Cereal",
    "Oatmeal",
    "Granola",
    "Rice",
    "Pasta",
    "Quinoa",
    "Barley",
    "Couscous",
    "Lentils",
    "Beans",
    "Chickpeas",
    "Tofu",
    "Tempeh",
    "Seitan",
    "Fish",
    "Shrimp",
    "Crab",
    "Lobster",
    "Clams",
    "Mussels",
    "Squid",
    "Octopus",
    "Scallops",
    "Chicken",
    "Turkey",
    "Duck",
    "Beef",
    "Pork",
    "Lamb",
    "Venison",
    "Bison",
    "Goat"
  ];

  return (
    <>
      <h1 className="heading">Healthy Food</h1>
      <ErrorMessage items = {foodItems}></ErrorMessage>
      <FoodItems items = {foodItems}></FoodItems>
    </>
  );
}

export default App;
