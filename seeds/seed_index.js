const organizationSeeds = require('./organizations');
const userSeeds = require('./users');

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