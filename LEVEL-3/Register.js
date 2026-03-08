import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const navigate = useNavigate();

const handleRegister = async () => {

if(!name || !email || !password){
alert("Please fill all fields");
return;
}

try{

const res = await axios.post(
"http://localhost:5000/api/auth/register",
{
name,
email,
password
}
);

alert("Registration successful!");

navigate("/login");

}catch(error){

console.log("Register error:",error);

alert("Registration failed. Please try again.");

}

};

return(

<div style={{
background:"#ffd6e8",
height:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center"
}}>

<div style={{
background:"white",
padding:"30px",
borderRadius:"10px",
width:"320px",
textAlign:"center",
boxShadow:"0 0 10px rgba(0,0,0,0.2)"
}}>

<h2 style={{color:"#6a0dad"}}>Register</h2>

<input
type="text"
placeholder="Enter Name"
value={name}
onChange={(e)=>setName(e.target.value)}
style={{
width:"100%",
padding:"10px",
margin:"10px 0",
border:"1px solid gray",
borderRadius:"5px"
}}
/>

<input
type="email"
placeholder="Enter Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
style={{
width:"100%",
padding:"10px",
margin:"10px 0",
border:"1px solid gray",
borderRadius:"5px"
}}
/>

<input
type="password"
placeholder="Enter Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
style={{
width:"100%",
padding:"10px",
margin:"10px 0",
border:"1px solid gray",
borderRadius:"5px"
}}
/>

<button
onClick={handleRegister}
style={{
background:"#87cefa",
border:"none",
padding:"10px",
width:"100%",
borderRadius:"5px",
cursor:"pointer",
marginTop:"10px"
}}

>

Register </button>

<p style={{marginTop:"15px"}}>
Already have an account?{" "}
<span
style={{color:"blue",cursor:"pointer"}}
onClick={()=>navigate("/login")}
>
Login
</span>
</p>

</div>

</div>

);

}

export default Register;
