/* Initialize server and require important packages for program */

require("dotenv").config();
const dotenv=require('dotenv');
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const authRoute = require("./Routes/auth");
const session = require("express-session");
const passportStrategy = require("./passport");
const app = express();

app.use(session({
	secret: 'trial',
	resave: false,
	saveUninitialized: true,
	cookie: { secure: true }
 }));
 

app.use(passport.initialize());
app.use(passport.session());

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);

app.use("/auth", authRoute);

const port = 8080;
app.listen(port, () => console.log(`Listenting on port ${port}...`));