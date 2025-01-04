import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 8,
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
    <main className="menu">
      <h2>Menu</h2>

      {pizzaCount >0 ? (
        <>
      <p>Authentic Italian cuisine. Creative dishes to choose from. All from our stone oven, all organic, all delicious</p>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
      </>
      ): "We are not having any pizzas today."}
    </main>
  );
}

function Pizza(props) {
  return (
    <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={props.pizzaObj.photo} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <h4>${props.pizzaObj.price}</h4>
        <span>{props.pizzaObj.soldOut ? "Sold" : "Available"}</span>
      </div>
    </li>
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
      {isOpen && pizzaCount>0? (
      <Order closedHour={closedHours} openHours={openHours}/>
    ):<p>We welcome you between {openHours}:00 and {closedHours}:00.</p>}
    </footer>
  );
}
//instead of passing props we directly pass the name of variable in curly braces to directly access the variable without writting props.name
function Order({closedHour,openHours})
{
  return(
    <div className="order">
        <p>We are OPEN from {openHours}:00 to {closedHour}:00. Come visit us or order online!</p> 
        <button className="btn">Order Now</button>
      <p>&copy; {new Date().getFullYear()} React Pizza Shop</p>
      </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
