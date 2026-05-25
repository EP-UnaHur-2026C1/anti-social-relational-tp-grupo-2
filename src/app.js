const express = require('express');
const app = express();
const db = require('../models');
const PORT = process.env.PORT || 3000;

const userRoutes = require('./routes/user.routes');

app.use(express.json());

app.use('/users', userRoutes);

app.listen(PORT, async () => {
  await db.sequelize.sync();
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
})