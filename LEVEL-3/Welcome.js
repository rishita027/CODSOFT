import React from "react";
import { Link } from "react-router-dom";

function Welcome(){

return(

<div style={{
textAlign:"center",
padding:"100px",
background:"#ffd6e8",
height:"100vh"
}}>

<h1 style={{color:"#6a0dad"}}>
Welcome to E-Commerce Website
</h1>

<p style={{marginTop:"20px"}}>
Please Login or Register to continue
</p>

<br/>

<Link to="/login">
<button style={{
background:"#87cefa",
padding:"10px 20px",
margin:"10px",
border:"none",
borderRadius:"5px"
}}>
Login
</button>
</Link>

<Link to="/register">
<button style={{
background:"#87cefa",
padding:"10px 20px",
margin:"10px",
border:"none",
borderRadius:"5px"
}}>
Register
</button>
</Link>

</div>

);

}

export default Welcome;