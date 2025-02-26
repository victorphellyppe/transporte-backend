import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

interface ModalidadeAttributes {
  id: number;
  nome: string;
}

interface ModalidadeCreationAttributes extends Optional<ModalidadeAttributes, 'id'> {}

class Modalidade extends Model<ModalidadeAttributes, ModalidadeCreationAttributes> implements ModalidadeAttributes {
  public id!: number;
  public nome!: string;
}

Modalidade.init(
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
  },
  {
    sequelize,
    tableName: 'modalidades',
    timestamps: false,
  }
);

export default Modalidade;
