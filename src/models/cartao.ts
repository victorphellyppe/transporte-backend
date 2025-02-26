import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

interface CartaoAttributes {
  id: number;
  numero: string;
  saldo: number;
  usuario_id: number;
  dataExpiracao: Date;
}

interface CartaoCreationAttributes extends Optional<CartaoAttributes, 'id'> {}

class Cartao extends Model<CartaoAttributes, CartaoCreationAttributes> implements CartaoAttributes {
  public id!: number;
  public numero!: string;
  public saldo!: number;
  public usuario_id!: number;
  public dataExpiracao!: Date;
}

Cartao.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    numero: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    saldo: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dataExpiracao: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'cartoes',
    timestamps: false,
  }
);

export default Cartao;
