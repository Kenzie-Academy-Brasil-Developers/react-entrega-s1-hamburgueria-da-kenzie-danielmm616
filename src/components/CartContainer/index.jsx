import CartProduct from "../CartProduct";

function CartContainer({ products, removeItem, removeAll }) {
  return (
    <section className="mainCart">
      <div className="headCart">
        <h1>Carrinho de compras</h1>
      </div>
      <div className="productsCart">
        {products[0] !== undefined ? (
          products.map((item) => (
            <CartProduct item={item} removeItem={() => removeItem(item.name)} />
          ))
        ) : (
          <span id="sacolaVazia">
            <h3>Sua sacola está vazia</h3>
            <p>Adicione itens</p>
          </span>
        )}
        <hr />
        <span>
          <h2>Total</h2>
          <h3>
            R$
            {Math.round(
              products
                .map((item) => item.price)
                .reduce((att, curr) => att + curr, 0)
            )}
            ,00
          </h3>
        </span>
        <button className="removeTudo" onClick={removeAll}>
          Remover todos
        </button>
      </div>
    </section>
  );
}

export default CartContainer;
