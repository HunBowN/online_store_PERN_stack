import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import {registration, login} from '../http/userApi'
import {observer} from 'mobx-react-lite'
import styles from "../components/NavBar.css";
import {Context} from '../index'

const Auth = observer( () => {
  const {user} = useContext(Context)
  const location = useLocation()
  const navigate = useNavigate()
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    try {

      let data;
    if(isLogin){
       data = await login(email, password)
       alert('Успешный вход!')
    } else {
       data = await registration(email, password)
       alert('Пользователь успешно зарегистрирован!')
    }
    user.setUser(user)
    user.setIsAuth(true)
    navigate(SHOP_ROUTE)
      
    } catch (e) {
      alert(e.response.data.message)
    }
    
    
  }

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Введите email" value={email} onChange={e => setEmail(e.target.value)}/>
          <Form.Control className="mt-3" placeholder="Введите пароль" value={password} onChange={e => setPassword(e.target.value)} type="password" />
          {isLogin ?
          <>
          <Button className="mt-3" variant={"outline-dark"} onClick={click}>
            Войти
          </Button>
        
          <NavLink className="text" to={REGISTRATION_ROUTE}>
            Зарегистрироваться
          </NavLink>
          </>
          :
          <>
          <Button className="mt-3" variant={"outline-dark"} onClick={click}>
          Зарегистрироваться
        </Button>
          {/* <NavLink className="text" to={REGISTRATION_ROUTE}>
          Зарегистрироваться
        </NavLink> */}
        </>
          }
          
          


        </Form>
      </Card>
    </Container>
  );
})

export default Auth;
