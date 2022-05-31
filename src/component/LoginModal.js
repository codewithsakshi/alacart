import React, { useState } from "react";
import { Modal, Input, Spacer, Button, Text } from "@nextui-org/react";
import { connect } from "react-redux";
import { ACTIONS } from "../action";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    //  login(loginData);
  };
  return (
    <Modal closeButton aria-labelledby="modal-title" open="" onClose="">
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Login
        </Text>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            type="email"
            placeholder="Email"
            value={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          />
          <Spacer />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            type="password"
            placeholder="Password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
          <Button type="submit">Login</Button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (payload) => {
      dispatch({
        type: ACTIONS.LOGIN,
        payload: payload
      });
    }
  };
};

export default Login(null, mapDispatchToProps)(Login);
