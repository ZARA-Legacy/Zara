import { DataTypes, Model } from "sequelize";
import sequelize from '../database/index';

class Help extends Model {
  public question!: string;
  public answer!: string;
}

Help.init(
  {
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "help",
    tableName: "help",
  }
);

export default Help;
