const fs = require('fs');
const path = require('path');
const axios = require('axios')
require('dotenv').config();
const { Sequelize } = require('sequelize')

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/nuclea`, {
    logging: false,
    native: false
});
//const sequelize = new Sequelize(`postgres://postgres:258563@localhost:5432/nuclea`, {
//    logging: false,
//    native: false
//});


const basename = path.basename(__filename);

const modelDefiners = [];

// adds all models in src/models to the modelDefiners array
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

modelDefiners.forEach(model => model(sequelize));

// capitalize models' names
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => 
    [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// Declare relationships



module.exports = {
    ...sequelize.models,
    conn: sequelize
};
