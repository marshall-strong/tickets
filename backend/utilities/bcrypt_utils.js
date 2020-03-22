const bcrypt = require('bcryptjs');

const genPasswordDigest = (plaintextPassword) => {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(plaintextPassword, salt);
    return hash;
};

module.exports = genPasswordDigest;