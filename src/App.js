import React, { useEffect } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import { useDispatch } from 'react-redux'

import { actions } from './redux/reducer'

function App() {

  const dispatch = useDispatch()

  // fetching data from api and setting the state
  useEffect(() => {
    const fetchProducts = async () => {
    const res = await fetch("https://my-json-server.typicode.com/rushibelkunde/ecom-app/products")
    const data = await res.json()
    
      dispatch(actions.initializeProducts(data))
    }

    fetchProducts()
  }, [])


  // Routes 
  const router = createBrowserRouter([
    {
      path: "/", element: <Navbar />, children: [
        { path: "/", element: <Home /> },
        { path: "/cart", element: <Cart /> },
      ]
    }
  ], {
    basename: "/buy-busy"
  })


  return (

    <RouterProvider router={router} basename={"/buy-busy"}>

    </RouterProvider>
  )
}

export default App