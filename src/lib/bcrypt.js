const bcryptjs = require("bcryptjs");
const saltRound = 10

function encrypt(text) {
    console.log('encrypt: ', text);
    return bcryptjs.hashSync(text, saltRound)
}

function verify(hash, text) {
    console.log('verify, hash: ', hash, 'text: ', text);

    return bcryptjs.compareSync(text, hash)
}

module.exports = {
    encrypt,
    verify
}