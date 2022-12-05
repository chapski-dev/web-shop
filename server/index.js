require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const modules = require('./modules/modules') 
const PORT = process.env.PORT || 5000; // получаем порт из переменных окружения 

const app = express();

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`server started`)); 

  } catch(e) {
    console.log(e);
  }
}
start();