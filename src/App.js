import "./App.css";
import { useState } from "react";
import MenuContainer from "./components/MenuContainer";
import CartContainer from "./components/CartContainer";

function App() {
  const [products, setProdutcs] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.0,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca-Cola",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "Milkshake",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [userInput, setUserInput] = useState("");

  function showProducts(input) {
    setFilteredProducts(
      products.filter(
        (item) =>
          item.category.toLowerCase() === input.toLowerCase() ||
          item.name.toLowerCase() === input.toLowerCase()
      )
    );
    return input;
  }

  function handleClick(productId) {
    for (let i = 0; i < currentSale.length; i++) {
      if (productId === currentSale[i]) {
        return;
      }
    }
    setCurrentSale([...currentSale, productId]);
  }

  function removeAll() {
    setCurrentSale([]);
    setProdutcs(products);
  }

  function removeItem(item) {
    setCurrentSale(currentSale.filter((att) => att.name !== item));
  }

  return (
    <div className="App">
      <div className="App-header">
        <header className="header">
          <div className="Tittle">
            <h1>Burguer</h1>
            <h2>Kenzie</h2>
          </div>
          <div className="pesquisa">
            <input
              type="text"
              placeholder="Pesquisar"
              value={userInput}
              onChange={(event) => setUserInput(event.target.value)}
            />
            <button onClick={() => showProducts(userInput)}>Pesquisar</button>
          </div>
        </header>
        <main className="mainView">
          {filteredProducts[0] === undefined ? (
            <MenuContainer products={products} handleClick={handleClick} />
          ) : (
            <MenuContainer
              products={filteredProducts}
              handleClick={handleClick}
            />
          )}
          <CartContainer
            products={currentSale}
            removeAll={removeAll}
            removeItem={removeItem}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
