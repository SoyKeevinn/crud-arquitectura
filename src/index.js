import app from "./app.js"
import { sequelize } from "./database/database.js";

async function main() {
    try {
        await sequelize.sync({ force: false });

        app.listen(4000);

        console.log("el servidor esta escuchando", 4000);
    } catch (error) {
        console.log("No se pudo conectar a la base de datos", error);
    }
}

main()