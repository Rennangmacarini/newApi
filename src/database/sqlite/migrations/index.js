const sqliteConnention = require("../../sqlite");


const createUsers = require("./createUsers");

async function migrationsRun(){
    const schemas = [
        createUsers
    ].join('');

    sqliteConnention()
    .then(db => db.exec(schemas))
    .catch(error => console.error(error));
}

module.exports = migrationsRun;