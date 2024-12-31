import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photo: "pizzas/focaccia.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photo: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photo: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photo: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photo: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photo: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  const style = { fontSize: "40px", textTransporm: "uppercase" };
  return (
    <header className="header">
      <h1 style={style}>React Pizza Shop</h1>
      <p className="menu">
        Our pizzas are made with love and the finest ingredients.
      </p>
    </header>
  );
}
const pizzaCount=pizzaData.length;
// const pizzaCount=[];
function Menu() {
  return (
    <div className="menu">
      <h2>Menu</h2>
      {pizzaCount >0 && (
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
      )}
    </div>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.pizzaObj.photo} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <h4>${props.pizzaObj.price}</h4>
        <h3>{props.pizzaObj.soldOut ? "Sold" : "Available"}</h3>
      </div>
    </div>
  );
}
function Footer() {
  const now = new Date().getHours();
  console.log(now);
  const openHours=12;
  const closedHours=22;
  const isOpen= now >= openHours && now <= closedHours;
  console.log(isOpen);
  return (
    
    <footer className="footer">
      {isOpen && (
      <div className="order">
        <p>We are OPEN untill {closedHours}:00. Come visit us or order online!</p> 
        <button className="btn">Order Now</button>
      <p>&copy; {new Date().getFullYear()} React Pizza Shop</p>
      </div>
    )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
