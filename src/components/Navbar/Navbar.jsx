import React, { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import "./Navbar.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { UserContext } from '../../UserContext';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/reducer';



function Navbar() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [sort, setSort] = useState(false)



  //add items to cart function
  const handleAdd = async (id, price, imageUrl, name) => {

    dispatch(actions.addToCart({ id, price, imageUrl, name, count: 1 }))

    alert("item added to cart")
  }



  return (
    <UserContext.Provider value={{ sort, handleAdd }}>

      <div className='navbar'>
        <div className='left-nav'>
          <h2 onClick={() => navigate("/")}><StorefrontIcon /> BuyBusy</h2>
          <div>
            {/* {<input type="search" name="" id="search" onChange={(e)=>{setInput(e.target.value)}} placeholder='Search Products' />} */}
          </div>
        </div>
        <div >{<h2 className='displayName'>Welcome user</h2>}</div>
        <div className='right-nav'>
          <div>
            <NavLink to={"/cart"}><ShoppingCartIcon /></NavLink>
          </div>
          <div>
            {sort?  <h3 onClick={()=>setSort(!sort)}>unsort</h3>: <h3 onClick={()=>setSort(!sort)}>sort</h3>}
            

          </div>

        </div>
      </div>
      <Outlet />
    </UserContext.Provider>
  )
}

export default Navbar