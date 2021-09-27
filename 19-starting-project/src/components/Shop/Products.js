import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCT = [
  {
    id: "p1",
    price: 123,
    title: "My First Book",
    description: "The second book i ever wrote",
  },
  {
    id: "p2",
    price: 124,
    title: "My Second Book",
    description: "The second book i ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product, index) => (
          <ProductItem
            key={index}
            id={product.id}
            title={product.title}
            price={product.price}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
