import React, { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider";
import { RemoveRedEye } from "@material-ui/icons";

function CheckoutFavs(props) {
  const [{ basket }, dispatch] = useStateValue();
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(basket));
  }, [basket]);
  const [favorites, setFavorites] = useState([]);
  const getArray = JSON.parse(localStorage.getItem("favs") || "0");

  useEffect(() => {
    if (getArray !== 0) {
      setFavorites([...getArray]);
    }
  }, []);

  const removeFromBasket = () => {
    // passes the id to the reducer to remove the id from basket and return the state and the remaining basket items

    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id,
    });
  };

  return (
    <div className="checkout-works-div">
      <div
        onClick={() => {
          props.viewThisProject(props.id);
        }}
      >
        <img src={props.img} alt="" className="works-img" />
        <div className="overlay">
          <RemoveRedEye titleAccess="VIEW PROJECT" />
        </div>
      </div>
      <article className="work-info">
        <div className="category-div">
          <p>{props.category}</p>
          <div></div>
        </div>
        <div className="checkoutFavs-remove-btn">
          <button
            onClick={() => {
              removeFromBasket();
              props.onRemoveFav(props.id);
            }}
          >
            Remove
          </button>
        </div>
      </article>
    </div>
  );
}

export default CheckoutFavs;
