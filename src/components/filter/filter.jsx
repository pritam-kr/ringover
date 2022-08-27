import * as FaIcons from "react-icons/fa";
import { useProductContext } from "../../context/productContext";
import "./filter.css";
export const Filter = () => {
  const { state, getUniqueColor, getUniqueType, getUniqueRating } = useProductContext();

  const colorFilterHandler = (color) => {
    console.log(color);
  };


  const priceFilter = (price) => {

  }

  return (
    <>
      <header className="filter-header">
        <h2 className="headings">Filter</h2>{" "}
        <span>
          <FaIcons.FaFilter className="icons filter-icon" />
        </span>
      </header>
      <div className="filters-container">
        <div className="filter-box">
          <h2 className="headings subheading filter-title ">Cost</h2>
          <div style={{ margin: "1rem 0" }}>
             <div>
                <label className="lists filter-label"><input type="radio" name="price"/> 121 to 400 INR</label>
                <label className="lists filter-label"><input type="radio" name="price"/> 400 to 700 INR</label>
                <label className="lists filter-label"><input type="radio" name="price"/> 700 + INR</label>
             </div>
          </div>
        </div>

        <div className="filter-box">
          <h2 className="headings subheading filter-title ">Colors</h2>
          <div style={{ margin: "1rem 0" }}>
            {getUniqueColor.map((eachColor, i) => {
              return eachColor === "other" ? (
                <img
                  onClick={() => colorFilterHandler(eachColor)}
                  className="lists filter-colors"
                  key={i}
                  src={
                    "https://res.cloudinary.com/dhqxln7zi/image/upload/v1661613650/pp_ivrmpm.jpg"
                  }
                  alt={eachColor}
                />
              ) : (
                <li
                  onClick={() => colorFilterHandler(eachColor)}
                  className="lists filter-colors"
                  key={i}
                  style={{ backgroundColor: eachColor }}
                ></li>
              );
            })}
          </div>
        </div>

        <div className="filter-box">
          <h2 className="headings subheading filter-title ">Type</h2>

          <div style={{ margin: "1rem 0" }}>

            {
                getUniqueType?.map((eachType, i) => <label className="lists filter-label" key={i}>
                <input type="checkbox" className="input-checkbox"/> <span>{eachType}</span>
                </label>)
            }
          </div>

        </div>
        <div className="filter-box">
          <h2 className="headings subheading filter-title ">Rating</h2>
          <div style={{ margin: "1rem 0" }}>
            {
                getUniqueRating.map((eachRate, i) => <label className="lists filter-label" key={i}>
                <input type="radio" className="input-rating" name="rating" value={eachRate}/> <span>{eachRate}</span> <span><FaIcons.FaStar className="star-icon"/></span>
                </label>)
            }
          </div>
        </div>
      </div>
    </>
  );
};
