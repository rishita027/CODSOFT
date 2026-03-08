import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart(){

const [cart,setCart] = useState([]);
const navigate = useNavigate();

useEffect(()=>{

const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
setCart(storedCart);

},[]);

// remove item
const removeItem = (index) => {

const updatedCart = [...cart];
updatedCart.splice(index,1);

setCart(updatedCart);
localStorage.setItem("cart",JSON.stringify(updatedCart));

};

// calculate total price
const total = cart.reduce((sum,item)=>sum + item.price,0);

return(

<div style={{padding:"20px"}}>

<h2 style={{color:"#6a0dad"}}>Your Cart</h2>

{cart.length === 0 ? (

<p>No items in cart yet</p>

) : (

<>

{cart.map((item,index)=>(

<div key={index} style={{
border:"1px solid gray",
padding:"10px",
margin:"10px",
borderRadius:"6px"
}}>

<h3>{item.name}</h3>
<p>Price: ₹{item.price}</p>

<button
onClick={()=>removeItem(index)}
style={{
background:"#ff6b6b",
border:"none",
padding:"6px 10px",
borderRadius:"5px",
cursor:"pointer"
}}

>

Remove </button>

</div>

))}

<h3>Total: ₹{total}</h3>

<button
onClick={()=>navigate("/payment")}
style={{
background:"#87cefa",
border:"none",
padding:"10px 15px",
marginTop:"15px",
borderRadius:"5px",
cursor:"pointer"
}}

>

Proceed to Checkout </button>

</>

)}

</div>

);

}

export default Cart;
