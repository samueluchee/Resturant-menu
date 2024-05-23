const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
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
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData; // this is the array of pizza objects
  const pizzasData = pizzas.length; // we needed the length, just to experiment on an empty pizza objects
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzasData > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={crypto.randomUUID()} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our menu, please come back later 😉</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) {
  //   return null;
  // }
  return (
    <li className={pizzaObj.soldOut ? "pizza sold-out" : "pizza"}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : `$${pizzaObj.price}`}</span>
      </div>
    </li>
  );
}

function Footer() {
  const currentHour = new Date().getHours();
  const openHour = 11;
  const closeHour = 20;
  const isOpen = currentHour >= openHour && currentHour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We are currently closed. Check us from {openHour}:00 till {closeHour}
          :00
        </p>
      )}
    </footer>
  );
}

function Order(props) {
  return (
    <div className="order">
      <p>We are Open till {props.closeHour}:00. Come visit or order online</p>
      <button className="btn">Order</button>
    </div>
  );
}

export default App;
