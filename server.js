const express = require('express');
const app = express();
require('dotenv').config()
require('./server/config/mongoose.config');
const cors = require('cors');
const cookieParser = require('cookie-parser');
app.use(cookieParser())
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/routes/organizations.routes')(app);
require('./server/routes/categories.routes')(app);

app.listen(process.env.PORT, () => console.log(`Hi ninjas, we are listening to you in the port ${process.env.PORT}`));