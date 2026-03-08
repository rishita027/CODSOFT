const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const Product = require("./models/Product");

const app = express();

app.use(cors());
app.use(express.json());

/* ----------- Seed Demo Products ----------- */
async function seedProducts(){

const count = await Product.countDocuments();

if(count === 0){

const products = [

{ name:"Laptop", price:50000, category:"Electronics", description:"High performance laptop"},
{ name:"Smartphone", price:25000, category:"Electronics", description:"Latest Android smartphone"},
{ name:"Headphones", price:3000, category:"Electronics", description:"Noise cancelling headphones"},
{ name:"Smartwatch", price:8000, category:"Electronics", description:"Fitness smartwatch"},
{ name:"Tablet", price:20000, category:"Electronics", description:"Portable tablet device"},

{ name:"T-Shirt", price:800, category:"Fashion", description:"Comfortable cotton t-shirt"},
{ name:"Jeans", price:1500, category:"Fashion", description:"Blue denim jeans"},
{ name:"Jacket", price:3000, category:"Fashion", description:"Warm winter jacket"},
{ name:"Sneakers", price:2500, category:"Fashion", description:"Stylish sneakers"},
{ name:"Cap", price:400, category:"Fashion", description:"Trendy fashion cap"},

{ name:"Backpack", price:1200, category:"Accessories", description:"Travel backpack"},
{ name:"Sunglasses", price:900, category:"Accessories", description:"UV protection sunglasses"},
{ name:"Wallet", price:600, category:"Accessories", description:"Leather wallet"},
{ name:"Watch", price:3500, category:"Accessories", description:"Classic wrist watch"},
{ name:"Belt", price:500, category:"Accessories", description:"Leather belt"}

];

await Product.insertMany(products);

console.log("15 Demo products inserted");

}

}

/* ----------- MongoDB Atlas Connection ----------- */

mongoose.connect(
"mongodb+srv://admin:admin123@cluster0.8vjhc7u.mongodb.net/ecommerce?retryWrites=true&w=majority"
)
.then(async () => {

console.log("MongoDB Atlas Connected");

await seedProducts();

})
.catch(err => console.log("MongoDB Error:", err));

/* ----------- Routes ----------- */

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

/* ----------- Test Route ----------- */

app.get("/", (req,res)=>{
res.send("Ecommerce API running");
});

/* ----------- Start Server ----------- */

const PORT = 5000;
const path = require("path");

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req,res)=>{
res.sendFile(path.join(__dirname,"../client/build/index.html"));
});

app.listen(PORT, ()=>{
console.log("Server running on port " + PORT);
});