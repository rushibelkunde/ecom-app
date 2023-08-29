import React, {useContext, useState} from 'react'
import ItemCard from './ItemCard/ItemCard'
import "./Home.css"
// import FilterComponent from './FilterComponent/FilterComponent'
import { UserContext } from '../../UserContext'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../redux/reducer'

function Home() {

  const {handleAdd, sort} = useContext(UserContext)

  const dispatch = useDispatch()

  // states
  const [name, setName] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDes] = useState("")

  const products = useSelector((state)=> state.products)

  const array = [...products]

  // sorting products
  if(sort){
    array.sort((a,b)=> a.price> b.price? 1 : -1)
  }
 
  
  
  // add product
  const addProduct = (price, imageUrl, name, description)=>{
    const id = Date.now().toString().slice(8)
    dispatch(actions.addProduct({id, price, imageUrl, name, description}))

    //async api POST request
    const asyncAddProduct = async () => {
      const res = await fetch(`https://my-json-server.typicode.com/rushibelkunde/ecom-app/products`, {
        method: "POST",
        body: JSON.stringify({
          id, name, description, price, imageUrl
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
      const data = await res.json()
      console.log("Product added", data)
    }

    asyncAddProduct()
    alert("product added")
  }
  
    
  return (
    <>
    {/* Product add Form */}
    <div className='items-container'>
    <div className="item-card" style={{height: 200}}>
      <div className="item-details">
      <input type="text" className="item-name" onChange={(e)=> setImageUrl(e.target.value)} placeholder='Image Url' />
       <input className="item-name" type="text" onChange={(e)=> setName(e.target.value)} placeholder='Name'required/>
       <input className="item-price" type="number" onChange={(e)=> setPrice(e.target.value)} placeholder='Price' required/>
        <input className="item-description" type="text" onChange={(e)=> setDes(e.target.value)} placeholder='Description' required/> 
        <button className="add-to-cart-btn" onClick={()=>addProduct(price, imageUrl, name, description)}>Add Product</button>
      </div>
    </div>
    {/* All Products List */}
      {array.map((item)=>(
         <ItemCard key={item.id} id={item.id}  name={item.name}  imageUrl={item.imageUrl} price={item.price}  description={item.description} handleAdd={handleAdd}/>
      )
      )
      
    }
    </div>
    </>
  )
}

export default Home