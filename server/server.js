const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();
connectDB();

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', eventRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
