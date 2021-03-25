// CONEXION SEQUELITE

const { Sequelize } = require('sequelize');

const db = new Sequelize({
    dialect: 'sqlite',
    // SQLite only
    storage: './config/crud.sqlite'                                  // aqui le decimos donde crear la base de datos
});

// Esto sirve solo para conectar
//db.authenticate().then(() => console.log('Conectado a la BD'));      // el authenticate devulve una promesa y la tenemos q gestionar con then 

db.sync()
    .then(() => console.log('Conectado a la BD'))
    .catch(er => console.log(er.message));

module.exports = db

/* CONEXION A POSTGRES

var sequelize = new Sequelize('crud', 'postgres', '123456', {      --> ('database', 'username', 'password'
    host: 'localhost',
    dialect: 'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
db.sync()
    .then(() => console.log('Conectado a la BD'))
    .catch(er => console.log(er.message));
});

*/

