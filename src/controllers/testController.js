const bcrypt = require('bcrypt');
const User = require("../database/paymentStation/objectionOrm/models/User");
const { route } = require('express/lib/application');

exports.testAction = async function testAction (req, res, next) {
    route()
    const user = await User.query().findById(1)
    console.log(user)
    let hash = user.password
    console.log(1, hash)
    hash = await hash.replace(/^\$2y(.+)$/i, '$2a$1');
    console.log(2, hash)
    bcrypt.compare("password", hash, function(err, res) {
        console.log(res);
    });

    return res.status(200).send(`REACHED ACTION DISPATCHER`)  
}