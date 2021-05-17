require('dotenv').config();

const express = require('express');
const app = express();

//database configuration
require('../config/database');

//bodyparser configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//routes
app.use('/recipe', require('../api/routes/recipeRoutes'));
app.use('/user', require('../api/routes/userRoutes'));

app.listen(process.env.PORT, console.log(`Server is Running at PORT ${process.env.PORT}`));