import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import DashBoard from '../../pages/Dashboard/Dashboard'
import Inventory from '../../pages/Inventory/Inventory'
import Customers from '../../pages/Customers/Customers'
import Orders from '../../pages/Orders/Orders'


const AppRoutes = () => {
  return (
    
      <Routes>
        <Route path="/" element={<DashBoard/>}></Route>
        <Route path="/Inventory" element={<Inventory/>}></Route>
        <Route path="/Orders" element={<Orders/>}></Route>
        <Route path="/Customers" element={<Customers/>}></Route>
      </Routes>
   
  )
}

export default AppRoutes