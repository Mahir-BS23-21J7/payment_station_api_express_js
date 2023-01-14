const Knex = require('knex')
const connectionConfig = require('./knexfile')
const { Model } = require('objection')
const User = require('./models/User')
module.exports = async () => {
    try {
        Model.knex(Knex(connectionConfig))       
    } catch (err) {
        console.error('=== OBJECTION/KNEX ERR ===', err.message)
    }
}
