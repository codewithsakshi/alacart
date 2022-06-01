import React from "react";
import { connect } from "react-redux";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { ACTIONS } from "../action";

const Cart = ({ cartItems, increase_item_count, decrease_item_count }) => {
  return (
    <Grid.Container gap={2} justify="flex-start">
      {cartItems.map((item) => {
        return (
          <Grid xs={6} sm={3} key={item.id}>
            <Card hoverable clickable>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  objectFit="cover"
                  src={item.imgurl}
                  width="100%"
                  height={140}
                  alt={item.name}
                />
              </Card.Body>
              <Card.Footer justify="flex-start">
                <Row wrap="wrap" justify="space-between">
                  <Text b>{item.name}</Text>
                  <Text css={{ color: "$accents4", fontWeight: "$semibold" }}>
                    {item.price}
                  </Text>
                  <button
                    className="cart_count_btn"
                    onClick={() => increase_item_count({ id: item.id })}
                  >
                    <FaPlus />
                  </button>
                  <Text>{item.item_count}</Text>
                  <button
                    className="cart_count_btn"
                    onClick={() => decrease_item_count({ id: item.id })}
                  >
                    <FaMinus />
                  </button>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        );
      })}
    </Grid.Container>
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
