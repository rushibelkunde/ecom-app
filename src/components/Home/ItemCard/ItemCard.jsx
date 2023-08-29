import React, { useState } from 'react';
import './ItemCard.css';
import { useDispatch } from 'react-redux';
import { actions } from '../../../redux/reducer';

const ItemCard = ({ id, name, imageUrl, price, description, handleAdd }) => {

  // edit field states
  const [isEdit, setIsEdit] = useState(false)
  const [ename, setEname] = useState("")
  const [eiamge, setEimage] = useState("")
  const [eprice, setEprice] = useState(0)
  const [edes, setEdis] = useState("")

  const dispatch = useDispatch()


  // Remove Product
  const removeProduct = () => {
    dispatch(actions.removeFromProducts({ id }))
    //api delete request
    const asyncRemoveProduct = async () => {
      const res = await fetch(`https://my-json-server.typicode.com/rushibelkunde/ecom-app/products/${id}`, {
        method: "DELETE",
      })
      const data = await res.json()
      console.log(data)
    }
    asyncRemoveProduct()
    alert("product removed")
  }


  //Update Product
  const updateProduct = () => {
    dispatch(actions.update({ id, name: ename, description: edes, price: eprice, imageUrl: eiamge ? eiamge : imageUrl }))
    setIsEdit(false)

    // api PUT request
    const asyncUpdateProduct = async () => {
      const res = await fetch(`https://my-json-server.typicode.com/rushibelkunde/ecom-app/products/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          id, name: ename, description: edes, price: eprice, imageUrl: eiamge ? eiamge : imageUrl
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
      const data = await res.json()
      console.log("Product Updated", data)
    }

    asyncUpdateProduct()
    alert("product updated")
  }


  return (
    <div className="item-card">

      {isEdit ? <input type="text" className="item-image" onChange={(e) => setEimage(e.target.value)}  /> : <img src={imageUrl} alt={name} width="200px" className="item-image" />}
      <div className="item-details">
        {isEdit ? <input className="item-name" type="text" onChange={(e) => setEname(e.target.value)} /> :
          <h3 className="item-name">{name}</h3>}
        {isEdit ? <input className="item-price" type="number" onChange={(e) => setEprice(e.target.value)} /> :
          <p className="item-price">${price}</p>}
        {isEdit ? <input className="item-description" type="text" onChange={(e) => setEdis(e.target.value)} /> :
          <p className="item-description">{description}</p>}
        <button className="add-to-cart-btn" onClick={() => handleAdd(id, price, imageUrl, name)}>Add to Cart</button>

      </div>
      <div>
        {isEdit ? <button className="" onClick={updateProduct} >save</button> :
          <button className="" onClick={() => setIsEdit(true)}>Edit</button>}
        <button onClick={removeProduct} className="" >Remove</button>

      </div>

    </div>
  );
};

export default ItemCard;
