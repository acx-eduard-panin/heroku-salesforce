const express = require('express');
const path = require('path');
const logger = require('morgan');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerConfig = require('./config/swagger');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 5000;



app.use(express.json({ extended: true }));
app.use(logger('dev'));
const userConfig = {};
userConfig[process.env.user] = process.env.password
app.use('/data', require('./web-service/routes/data'));
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(swaggerConfig)));
app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
