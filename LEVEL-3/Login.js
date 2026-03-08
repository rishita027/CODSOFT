import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const navigate = useNavigate();

const handleLogin = async () => {

try{

const res = await axios.post("http://localhost:5000/api/auth/Login",{
email,
password
});

if(res.data.message === "Login successful"){
alert("Login Successful");
navigate("/shop");
}else{
alert("Invalid email or password");
}

}catch(error){

console.log(error);
alert("Login failed");

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
width:"300px",
textAlign:"center"
}}>

<h2 style={{color:"#6a0dad"}}>Login</h2>

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
onClick={handleLogin}
style={{
background:"#87cefa",
border:"none",
padding:"10px",
width:"100%",
borderRadius:"5px",
cursor:"pointer"
}}
>
Login
</button>

</div>

</div>

);

}

export default Login;