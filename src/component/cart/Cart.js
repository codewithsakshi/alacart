import React from "react";
import { connect } from "react-redux";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Card, Grid, Row, Text} from "@nextui-org/react";
import { ACTIONS } from "../../action";
import "./cart.css"
import {CartTotal} from "../CartTotal"

const Cart = ({ cartItems, increase_item_count, decrease_item_count }) => {
  console.log("cartItem::", cartItems);

  return (
    <div className="cart_container">
      <div>
      {cartItems.map((item) => {
        const totalPrice = parseInt(item.price) * parseInt(item.item_count)
        return (
          <div className="cart_item">
            <img src={item.imgurl} className="cart_img"/>
                  <h4 style={{marginTop: "5px"}}>{item.name}</h4>
                  <p>
                  {item.price} X {item.item_count} = {totalPrice} Rs
                  </p>
                  <div className="btns_div">
                  <button
                    className="cart_count_btn"
                    onClick={() => increase_item_count({ id: item.id })}
                  >
                    <FaPlus />
                  </button>
                  <p>{item.item_count}</p>
                  <button
                    className="cart_count_btn"
                    onClick={() => decrease_item_count({ id: item.id })}
                  >
                    <FaMinus />
                  </button>
                  </div>
                </div>
          );
      })}
      </div>
      <CartTotal/>
      </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    increase_item_count: (payload) =>
      dispatch({
        type: ACTIONS.INCREASE_ITEM_COUNT,
        payload: payload
      }),
    decrease_item_count: (payload) =>
      dispatch({
        type: ACTIONS.DECREASE_ITEM_COUNT,
        payload: payload
      })
  };
};
const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
