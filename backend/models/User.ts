import Sequelize, { DataTypes } from "sequelize";
import sequelize from "../database/index";

interface UserModel {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  emailConfirmed: boolean;
  isAdmin: boolean;
}

interface UserInstance extends UserModel, Sequelize.Model<UserModel, any> {}

const User = sequelize.define<UserInstance>("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstname: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  emailConfirmed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default User;
