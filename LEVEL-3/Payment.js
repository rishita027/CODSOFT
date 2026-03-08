import React from "react";
import { useNavigate } from "react-router-dom";

function Payment(){

const navigate = useNavigate();

const handleSuccess = () => {

alert("Payment Successful!");

localStorage.removeItem("cart");

navigate("/");

};

return(

<div style={{
textAlign:"center",
padding:"40px"
}}>

<h2 style={{color:"#6a0dad"}}>Scan QR to Pay</h2>

<img
src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=DummyPayment"
alt="QR Code"
/>

<p>Scan this QR code to simulate payment</p>

<button
onClick={handleSuccess}
style={{
background:"#87cefa",
border:"none",
padding:"10px 15px",
borderRadius:"5px",
cursor:"pointer"
}}

>

I Have Paid </button>

</div>

);

}

export default Payment;
