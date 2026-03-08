import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Register from "./components/Register";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";

function App(){

return(

<Router>

<Navbar/>

<Routes>

<Route path="/" element={<Welcome/>} />
<Route path="/register" element={<Register/>} />
<Route path="/login" element={<Login/>} />
<Route path="/shop" element={<ProductList/>} />
<Route path="/cart" element={<Cart/>} />
<Route path="/checkout" element={<Checkout/>} />
<Route path="/payment" element={<Payment/>} />

</Routes>

<footer
style={{
textAlign:"center",
marginTop:"40px",
padding:"10px",
background:"#ffd6e8"
}}
>
<p>Thank you for shopping – Regards, Rishita</p>
</footer>

</Router>

);

}

export default App;
