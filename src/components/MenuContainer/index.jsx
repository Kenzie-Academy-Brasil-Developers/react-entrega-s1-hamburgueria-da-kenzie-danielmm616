import Product from "../Product";

function MenuContainer({ products, handleClick }) {
  return (
    <div className="mainProducts">
      {products.map((item, index) => (
        <Product
          item={item}
          key={index}
          handleClick={() => handleClick(item)}
        />
      ))}
    </div>
  );
}

export default MenuContainer;
