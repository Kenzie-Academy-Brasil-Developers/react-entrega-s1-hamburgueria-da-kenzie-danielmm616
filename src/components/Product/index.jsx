import "./styles.css";

function Product({ handleClick, item }) {
  return (
    <div className="productBox">
      {/* <img src={item.name} alt="" /> */}
      <img src={item.img} alt="" />
      <h3>{item.name}</h3>
      <p>{item.category}</p>
      <h4>R$ {item.price}</h4>
      <button onClick={handleClick}>Adicionar</button>
    </div>
  );
}

export default Product;
