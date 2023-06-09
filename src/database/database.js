import  Sequelize  from "sequelize";

export const sequelize = new Sequelize("peliculas", "postgres", "3919",{
    host: "127.0.0.1",
    dialect: "postgres",
    port: "5454"
});