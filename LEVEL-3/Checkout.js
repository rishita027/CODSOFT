import React from "react";
import { useNavigate } from "react-router-dom";

function Checkout(){

const navigate = useNavigate();

const handlePayment = () => {

alert("Payment Successful!");

localStorage.removeItem("cart");

navigate("/");

};

return(

<div style={{
padding:"40px",
textAlign:"center"
}}>

<h2 style={{color:"#6a0dad"}}>Checkout</h2>

<p>Total payment will be processed.</p>

<button
onClick={handlePayment}
style={{
background:"#87cefa",
border:"none",
padding:"12px 20px",
borderRadius:"6px",
cursor:"pointer",
fontSize:"16px"
}}

>

Pay Now </button>

</div>

);

}

export default Checkout;
