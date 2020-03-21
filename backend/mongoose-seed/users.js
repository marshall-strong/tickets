const genPasswordDigest = require('../utilities/bcrypt_utils');

const userSeeds = {
    model: 'User',
    documents: [
        {
            firstName: "Demo",
            lastName: "User",
            email: "user@cats4humanity.org",
            organization: "cats4humanity.org",
            password: genPasswordDigest("password")
        },
        {
            firstName: "Hayden",
            lastName: "Linder",
            email: "hayden@cats4humanity.org",
            organization: "cats4humanity.org",
            password: genPasswordDigest("password")
        },
        {
            firstName: "Brad",
            lastName: "Nelson",
            email: "brad@cats4humanity.org",
            organization: "cats4humanity.org",
            password: genPasswordDigest("password")
        },
        {
            firstName: "Joe",
            lastName: "Johnston",
            email: "joe@cats4humanity.org",
            organization: "cats4humanity.org",
            password: genPasswordDigest("password")
        },
        {
            firstName: "Marshall",
            lastName: "Strong",
            email: "marshall@cats4humanity.org",
            organization: "cats4humanity.org",
            password: genPasswordDigest("password")
        },
        {
            firstName: "Seeded",
            lastName: "User",
            email: "seeded-user@cats4humanity.org",
            organization: "cats4humanity.org",
            password: genPasswordDigest("password")
        },
        {
            firstName: "ACME",
            lastName: "User",
            email: "email@address",
            organization: "address",
            password: genPasswordDigest("password")
        },
        {
            firstName: "gmail",
            lastName: "User",
            email: "user@gmail.com",
            organization: "gmail.com",
            password: genPasswordDigest("password")
        },
        {
            firstName: "Carlos",
            lastName: "Garcia",
            email: "carlos@appacademy.io",
            organization: "appacademy.io",
            password: genPasswordDigest("password")
        },
        {
            firstName: "Julia",
            lastName: "Wang",
            email: "julia@appacademy.io",
            organization: "appacademy.io",
            password: genPasswordDigest("password")
        },
        {
            firstName: "Mike",
            lastName: "Madsen",
            email: "mike@appacademy.io",
            organization: "appacademy.io",
            password: genPasswordDigest("password")
        },
    ]
};

module.exports = userSeeds;