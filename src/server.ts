import express from 'express';
import sequelize from './config/db'; // Importação correta
import usuarioRoutes from './routes/usuario.routes';
import './models'; // Garante que as associações dos models sejam carregadas

const app = express();

app.use(express.json());

// Definindo a rota dos usuários
app.use('/api/usuarios', usuarioRoutes);

// Sincronizar o banco de dados (opcional)
sequelize.sync()
  .then(() => {
    console.log('Banco de dados sincronizado!');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  })
  .catch((err) => {
    console.error('Erro ao sincronizar o banco:', err);
  });
