import { useProductContext } from "../../context/productContext";
import "./store.css";
 
import { Filter } from "../../components";
export const Store = () => {
  const { state} = useProductContext();

  return (
    <div className="container store-container">
      <section className="wrapper store-wrapper">
        <div className="filter-wrapper">
          <Filter />
        </div>
        <div className="product-wrapper"></div>

        <div className="cart-wrapper"></div>
      </section>
    </div>
  );
};
