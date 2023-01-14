const { Model } = require('objection');

module.exports = class User extends Model {
    static tableName = 'users'
    static idColumn = 'id'
}
