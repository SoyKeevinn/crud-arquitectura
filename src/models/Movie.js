import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const movie = sequelize.define(
    "movies",
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name_movie: {
            type: DataTypes.STRING(100),
        },
        anio: {
            type: DataTypes.INTEGER,
        },
    },
    {
      timestamps: false,
    }
)