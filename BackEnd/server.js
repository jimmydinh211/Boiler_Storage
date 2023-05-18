/* Initialize server and require important packages for program */
require("dotenv").config();
const dotenv=require('dotenv');
const express = require("express");
const cors = require("cors");
const authRoute = require("./routes/authRoutes");
const db = require("./config/db");


const app = express();

// Middleware 
app.use(express.static('public'))
app.use(express.json())


app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);

app.use(authRoute);

const port = 8080;
app.listen(port, () => console.log(`Listenting on port ${port}...`));

db()