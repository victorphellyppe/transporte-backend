import express from 'express';
import cors from 'cors';
import * as swaggerUi from 'swagger-ui-express';
import * as dotenv from 'dotenv';
import cartaoRoutes from './routes/cartao.routes';
import swaggerDocument from './swagger.json';
import usuarioRoutes from './routes/usuario.routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Rota para documentação Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rotas da API
app.use("/api/cartoes", cartaoRoutes);
app.use('/api/usuarios', usuarioRoutes); // Define o prefixo das rotas

export default app;
