import React, { useContext } from "react";
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { Button } from "react-bootstrap";
import {observer} from 'mobx-react-lite'
import { useNavigate } from "react-router-dom";

const NavBar = observer( () => {
  const { user } = useContext(Context);
  const navigate = useNavigate()

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>

      <NavLink style={{ color: "white", fontWeight: "bold" }} to={SHOP_ROUTE}>
        BuyDeVice
      </NavLink>
{user.isAuth ?
      <Nav className="ms-auto" style={{ color: "white", font: '' }}>
        <Button variant={"outline-light"}  onClick={() => navigate(ADMIN_ROUTE)} >Админ панель</Button>
        <Button variant={"outline-light"} className="ms-3" onClick={() => logOut()}>Выйти</Button>
      </Nav>
:
      <Nav className="ms-auto" style={{ color: "white", font: '' }}>
        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)} >Авторизация</Button>
      </Nav>
}
</Container>

    </Navbar>
  );
});

export default NavBar;