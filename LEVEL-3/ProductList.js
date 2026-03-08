import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductList(){

const [products,setProducts] = useState([]);
const [search,setSearch] = useState("");
const [category,setCategory] = useState("");

// fetch products
useEffect(()=>{
axios.get("http://localhost:5000/api/products")
.then(res=>setProducts(res.data))
.catch(err=>console.log(err));
},[]);

// Add to Cart function
const addToCart = (product) => {

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push(product);

localStorage.setItem("cart", JSON.stringify(cart));

alert(product.name + " added to cart!");

};

// filtering products
const filteredProducts = products.filter(product =>
product.name.toLowerCase().includes(search.toLowerCase()) &&
(category === "" || product.category === category)
);

return(

<div style={{padding:"20px"}}>

<h2>Products</h2>

{/* Search bar */}
<input
type="text"
placeholder="Search products..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
style={{
padding:"10px",
width:"300px",
borderRadius:"5px",
border:"1px solid gray",
marginBottom:"10px"
}}
/>

<br/>

{/* Category filter */}
<select
value={category}
onChange={(e)=>setCategory(e.target.value)}
style={{
padding:"8px",
marginBottom:"20px"
}}

>

<option value="">All Categories</option>
<option value="Electronics">Electronics</option>
<option value="Fashion">Fashion</option>
</select>

{/* Products list */}
{filteredProducts.map(product => (

<div
className="product"
key={product._id}
style={{
border:"1px solid #ccc",
padding:"10px",
marginBottom:"10px",
borderRadius:"6px"
}}
>

<h3>{product.name}</h3>

<p className="price">Price: ₹{product.price}</p>

<p>{product.description}</p>

<button
onClick={()=>addToCart(product)}
style={{
background:"#87cefa",
border:"none",
padding:"8px 12px",
borderRadius:"5px",
cursor:"pointer"
}}

>

Add to Cart </button>

</div>

))}

</div>

);

}

export default ProductList;
