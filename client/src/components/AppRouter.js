import React, { useContext } from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import { Context } from '../index'
import Admin from '../pages/Admin'
import {authRoutes, publicRoutes} from '../routes'
import { SHOP_ROUTE } from '../utils/consts'


const AppRouter = () => {

  const {user} = useContext(Context)

  return (
    <Routes>
      
      {user.isAuth && authRoutes.map( ({path, Element}) => 
        <Route key={path} path = {path} element = {<Element />} />
      )} 
      {publicRoutes.map(({path, Element}) => 
        <Route key={path} path = {path} element = {<Element />} />
        
      )}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
    />

    </Routes>
    
  )
}

export default AppRouter