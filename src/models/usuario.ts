import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';
import Cartao from './cartao';

interface UsuarioAttributes {
  id: number;
  nome: string;
  email: string;
}

interface UsuarioCreationAttributes extends Optional<UsuarioAttributes, 'id'> {}

class Usuario extends Model<UsuarioAttributes, UsuarioCreationAttributes> implements UsuarioAttributes {
  public id!: number;
  public nome!: string;
  public email!: string;
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
  },
  {
    sequelize,
    tableName: 'usuarios',
    timestamps: false,
  }
);

// Definição da relação
Usuario.hasMany(Cartao, { foreignKey: 'usuario_id' });
Cartao.belongsTo(Usuario, { foreignKey: 'usuario_id' });

export default Usuario;
