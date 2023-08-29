import React, {  useEffect, useState } from 'react'
import CartCard from './CartCard';
import "./Cart.css"
import { actions } from '../../redux/reducer';
import { useDispatch, useSelector } from 'react-redux';



function Cart() {
  
  // getting states and functions to maintain cart
  const dispatch = useDispatch()

  const cart = useSelector((state)=> state.cart)

  const [total, setTotal] = useState(0)
  

  // function to increase count of items
  const increaseCount = (id) => {

    dispatch(actions.incCount({id}))

}
  

  //function to decrease count of items
  const decreaseCount = async(id) => {
    dispatch(actions.decCount({id}))
   }

  //function to remove items from cart
  const removeProduct = async(id) => { 
    dispatch(actions.removeFromCart({id}))
    
  }

  // getting cart info at initial render
  useEffect(() => {
    var sum = 0
    cart.forEach((i)=>{
    sum+= i.price* i.count
    })
    setTotal(sum)
    // getTotalPrice()
    
  }, [cart])

  return (

    // cart page
    <div className="cart-page">
      <h2 className="cart-page__title">Shopping Cart</h2>
      <div className="cart-page__cart-items">
        {cart.map((cartItem) => (
          
              <CartCard product={cartItem} count={cartItem.count} increaseCount={increaseCount} decreaseCount={decreaseCount} removeProduct={removeProduct} />
          
        ))}
      </div>
      <div className="cart-page__total">
        <h3>Total: {parseInt(total)}</h3>
       
      </div>
    </div>
  )
}

export default Cart