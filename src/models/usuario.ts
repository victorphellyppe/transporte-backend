import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';
import Cartao from './cartao';

interface UsuarioAttributes {
  id: number;
  nome: string;
  email: string;
  cartao_id?: number; // Adicionando o campo cartao_id, que pode ser nulo ou fornecido
}

interface UsuarioCreationAttributes extends Optional<UsuarioAttributes, 'id'> {}

class Usuario extends Model<UsuarioAttributes, UsuarioCreationAttributes> implements UsuarioAttributes {
  public id!: number;
  public nome!: string;
  public email!: string;
  public cartao_id?: number; // Adicionando o campo cartao_id
}

Usuario.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    cartao_id: {
      type: DataTypes.INTEGER,
      allowNull: true, // O campo cartao_id pode ser nulo
    },
  },
  {
    sequelize,
    tableName: 'usuarios',
    timestamps: false,
  }
);

// Definição da relação: Um usuário pode ter um cartão
Usuario.belongsTo(Cartao, { foreignKey: 'cartao_id' }); // Relacionamento com Cartao

Cartao.hasMany(Usuario, { foreignKey: 'cartao_id' }); // Um cartão pode estar associado a vários usuários

export default Usuario;
