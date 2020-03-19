const genHashedPassword = require('../bcrypt_utils');

const userSeeds = {
    "model": "User",
    "documents": [
        {
            "firstName": "Hayden",
            "lastName": "Linder",
            "email": "hayden@cats4humanity.org",
            "orgHandle": "cats4humanity.org",
            "password": "password"
        },
        {
            "firstName": "Brad",
            "lastName": "Nelson",
            "email": "brad@cats4humanity.org",
            "orgHandle": "cats4humanity.org",
            "password": "password"
        },
        {
            "firstName": "Joe",
            "lastName": "Johnston",
            "email": "joe@cats4humanity.org",
            "orgHandle": "cats4humanity.org",
            "password": "password"
        },
        {
            "firstName": "Marshall",
            "lastName": "Strong",
            "email": "marshall@cats4humanity.org",
            "orgHandle": "cats4humanity.org",
            "password": "password"
        },
        {
            "firstName": "Demo",
            "lastName": "User",
            "email": "user@cats4humanity.org",
            "orgHandle": "cats4humanity.org",
            "password": "password"
        },
        {
            "firstName": "Seeded",
            "lastName": "User",
            "email": "seeded-user@cats4humanity.org",
            "orgHandle": "cats4humanity.org",
            "password": "password"
        },
        {
            "firstName": "ACME",
            "lastName": "User",
            "email": "email@address",
            "orgHandle": "address",
            "password": "password"
        },
        {
            "firstName": "gmail",
            "lastName": "User",
            "email": "user@gmail.com",
            "orgHandle": "gmail.com",
            "password": "password"
        },
        {
            "firstName": "Carlos",
            "lastName": "Garcia",
            "email": "carlos@appacademy.io",
            "orgHandle": "appacademy.io",
            "password": "password"
        },
        {
            "firstName": "Julia",
            "lastName": "Wang",
            "email": "julia@appacademy.io",
            "orgHandle": "appacademy.io",
            "password": "password"
        },
        {
            "firstName": "Mike",
            "lastName": "Madsen",
            "email": "mike@appacademy.io",
            "orgHandle": "appacademy.io",
            "password": "password"
        },
    ]
};

let userSeedsHashed = Object.assign({}, userSeeds);

userSeedsHashed.documents.map(
    document => { 
        document.password = genHashedPassword(document.password)
     }
)

module.exports = userSeedsHashed;
