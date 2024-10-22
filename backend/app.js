const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./models');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const cpuRoutes = require('./routes/cpuRoutes');
const socketRoutes = require('./routes/socketRoutes');

app.use('/cpuRoutes', cpuRoutes);
app.use('/socketRoutes', socketRoutes);

sequelize
  .authenticate()
  .then(() => console.log('Database connected.'))
  .catch((err) => console.log('Error: ' + err));

sequelize.sync({ force: false }).then(() => {
  console.log('Database & tables created!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'An internal server error occurred' });
  });
  
