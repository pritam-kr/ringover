import { useParams, useNavigate } from "react-router-dom";
import { Cart } from "../../components";
import { useProductContext } from "../../context/productContext";
import "./singleProduct.css";
import * as FaIcons from "react-icons/fa";

export const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  const {
    state: { allShoses },
  } = useProductContext();
  const { image, name, price, rating, description } =
  allShoses?.find((eachProduct) => eachProduct?.id === Number(id)) || {}


  const backToStore = () => {
    navigate('/store')
  }

  return (
    <div className="container single-product-container">
      <div className="wrapper single-product-wrapper">
        <div className="single-product">

          <p className="btn-back" onClick={() => backToStore()}><FaIcons.FaArrowLeft /></p>

          <div className="single-product-image">
            <img src={image} alt="single_product" />
          </div>

          <div className="single-product-info">
            <h6 className="headings product-title">{name}</h6>
            <h6 className="headings product-title product-price">
              {" "}
              Rs. {price}/-
            </h6>
            <p className="text product-description">{description}</p>
            <p className="product-rating">
              {rating}/5 <FaIcons.FaStar className="star-icon" />
            </p>
          </div>
        </div>
        <div className="single-product-cart">
          <Cart />
        </div>
      </div>
    </div>
  );
};
