import React from "react";
import { Link } from "react-router-dom";
function Navbar(){
return(

<div style={{
background:"#ffb6d9",
padding:"15px",
display:"flex",
justifyContent:"space-between",
alignItems:"center"
}}>

<h2 style={{color:"#6a0dad"}}>My E-Commerce</h2>

<div>

<Link to="/shop" style={{color:"#0b3d91",marginRight:"20px"}}>Home</Link>
<Link to="/cart" style={{color:"#0b3d91",marginRight:"20px"}}>Cart</Link>
<Link to="/login" style={{color:"#0b3d91"}}>Login</Link>
</div>

</div>

);
}

export default Navbar;