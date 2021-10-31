function CartProduct({ removeItem, item }) {
  return (
    <div className="productCart">
      <div className="imgbox">
        <img src={item.img} alt="" />
      </div>
      <div>
        <h3>{item.name}</h3>
        <p>{item.category}</p>
      </div>
      <button onClick={removeItem}>remover</button>
    </div>
  );
}

export default CartProduct;
