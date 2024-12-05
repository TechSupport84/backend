const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const db = require('./config/db');

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/auth', require('./routes/auth'));
app.use('/courses', require('./routes/course'));
app.use('/progress', require('./routes/progress'));
app.use('/purchase', require('./routes/purchase'));
app.use('/certificate', require('./routes/certificate'));

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
