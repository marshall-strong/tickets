const userSeeds = {
    "model": "User",
    "documents": [
        {
            "firstName": "Hayden",
            "lastName": "Linder",
            "email": "hayden@cats4humanity.org",
            "orgHandle": "cats4humanity.org",
            "password": "$2a$10$7zOMKgSFsf8RMWhF9XIMSe35w5nk93RSpiFINE2zmVqZ7XtzQOzxi"
        },
        {
            "firstName": "Brad",
            "lastName": "Nelson",
            "email": "brad@cats4humanity.org",
            "orgHandle": "cats4humanity.org",
            "password": "$2a$10$7zOMKgSFsf8RMWhF9XIMSe35w5nk93RSpiFINE2zmVqZ7XtzQOzxi"
        },
        {
            "firstName": "Joe",
            "lastName": "Johnston",
            "email": "joe@cats4humanity.org",
            "orgHandle": "cats4humanity.org",
            "password": "$2a$10$7zOMKgSFsf8RMWhF9XIMSe35w5nk93RSpiFINE2zmVqZ7XtzQOzxi"
        },
        {
            "firstName": "Marshall",
            "lastName": "Strong",
            "email": "marshall@cats4humanity.org",
            "orgHandle": "cats4humanity.org",
            "password": "$2a$10$7zOMKgSFsf8RMWhF9XIMSe35w5nk93RSpiFINE2zmVqZ7XtzQOzxi"
        },
        {
            "firstName": "Demo",
            "lastName": "User",
            "email": "user@cats4humanity.org",
            "orgHandle": "cats4humanity.org",
            "password": "$2a$10$7zOMKgSFsf8RMWhF9XIMSe35w5nk93RSpiFINE2zmVqZ7XtzQOzxi"
        },
        {
            "firstName": "ACME",
            "lastName": "User",
            "email": "email@address",
            "orgHandle": "address",
            "password": "$2a$10$7zOMKgSFsf8RMWhF9XIMSe35w5nk93RSpiFINE2zmVqZ7XtzQOzxi"
        },
        {
            "firstName": "gmail",
            "lastName": "User",
            "email": "user@gmail.com",
            "orgHandle": "gmail.com",
            "password": "$2a$10$7zOMKgSFsf8RMWhF9XIMSe35w5nk93RSpiFINE2zmVqZ7XtzQOzxi"
        },
        {
            "firstName": "Carlos",
            "lastName": "Garcia",
            "email": "carlos@appacademy.io",
            "orgHandle": "appacademy.io",
            "password": "$2a$10$7zOMKgSFsf8RMWhF9XIMSe35w5nk93RSpiFINE2zmVqZ7XtzQOzxi"
        },
        {
            "firstName": "Julia",
            "lastName": "Wang",
            "email": "julia@appacademy.io",
            "orgHandle": "appacademy.io",
            "password": "$2a$10$7zOMKgSFsf8RMWhF9XIMSe35w5nk93RSpiFINE2zmVqZ7XtzQOzxi"
        },
        {
            "firstName": "Mike",
            "lastName": "Madsen",
            "email": "mike@appacademy.io",
            "orgHandle": "appacademy.io",
            "password": "$2a$10$7zOMKgSFsf8RMWhF9XIMSe35w5nk93RSpiFINE2zmVqZ7XtzQOzxi"
        },
    ]
};

const db = require('./config/keys').mongoURI;

const Organization = require('');
const User = require('../models/user');

const data = [
    {
        'model': 'User',
        'documents': [
            {
                'name': 'Doc1',
                'value': 200
            },
            {
                'name': 'Doc2',
                'value': 400
            }
        ]
    }
];









seeder.connect(db, () => {
    seeder.loadModels([User]);
    seeder.clearModels([User], () => {
        seeder.populateModels(data, () => {
            seeder.disconnect();
        });
    });
});