import express from 'express';
import sequelize from './config/db'; // Conexão com o banco de dados
import app from './app'; // Importando o app.ts

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
