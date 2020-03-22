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
            firstName: "Wiley",
            lastName: "Coyote",
            email: "wc@acme.boom",
            organization: "acme.boom",
            password: genPasswordDigest("password")
        },
        {
            firstName: "Road",
            lastName: "Runner",
            email: "rr@acme.boom",
            organization: "acme.boom",
            password: genPasswordDigest("password")
        },
        {
            firstName: "ACME",
            lastName: "User",
            email: "user@acme.boom",
            organization: "acme.boom",
            password: genPasswordDigest("password")
        },
        {
            firstName: "Gmail",
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
    ]
};

module.exports = userSeeds;