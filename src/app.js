require('dotenv').config();
const express = require('express');
const app = express();
const db = require('../models');
const PORT = process.env.PORT || 3000;

const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');
const commentRoutes = require('./routes/comment.routes');
const tagRoutes = require('./routes/tag.routes');

// -- Esto es para la documentación de Swagger, hay que instalar swagger-ui-express y yamljs para poder usarlo --
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use(express.json());
app.use('/assets', express.static('assets'));
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);
app.use('/tags', tagRoutes);
app.use('/users', userRoutes);

//  -- Esto es para poder acceder a la documentación desde una ruta -- 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, async () => {
  await db.sequelize.sync();
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
})
