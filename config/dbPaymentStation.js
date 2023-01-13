const dotenv = require('dotenv').config();

module.exports = {
    psc_db_host: process.env.PSC_DB_HOST,
    psc_db_port: process.env.PSC_DB_PORT,
    psc_db_user: process.env.PSC_DB_USER,
    psc_db_pass: process.env.PSC_DB_PASS,
    psc_db_name: process.env.PSC_DB_NAME,
};