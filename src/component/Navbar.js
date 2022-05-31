import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Spacer } from "@nextui-org/react";
import { connect } from "react-redux";
import SignUp from "./SignUp";
import { ACTIONS } from "../action";

const Navbar = ({ isLogin, logout }) => {
  const [visible, setVisible] = useState(false);

  const handler = () => {
    setVisible(true);
  };

  const closeHandler = () => {
    setVisible(false);
  };

  const handleLogout = () => {
    logout();
  };

  const subContent = !isLogin ? (
    <ul style={{ display: "flex", justifyContent: "space-between" }}>
      <li>
        <Button onClick={handler}>Signup/Login</Button>
      </li>
    </ul>
  ) : (
    <ul>
      <li>
        <Button auto onClick={handleLogout}>
          Logout
        </Button>
        <Spacer x={0.5} />
        <Link to="/cart">Your Cart</Link>
      </li>
    </ul>
  );

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <h3>
        <Link to="/">Fruit Basket</Link>
      </h3>
      {subContent}
      {!!visible && <SignUp visible={visible} closeHandler={closeHandler} />}
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLoggedIn
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch({ type: ACTIONS.LOGOUT });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
