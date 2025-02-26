import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('transporte_db', 'postgres', '#V1c70r@JC3', {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dialect: 'postgres',
});

export default sequelize;
