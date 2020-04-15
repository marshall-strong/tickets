const genPasswordDigest = require('../utilities/bcrypt_utils');

const organizationSeeds = {
  model: 'Organization',
  documents: [
    {
      handle: "acme.org",
      name: "ACME",
      motto: "That's all folks!"
    }
  ]
};



const userSeeds = {
  model: 'User',
  documents: [
    {
      _id: "000000000000000000000000",
      firstName: "Michael",
      lastName: "Jordan",
      email: "michael@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },d
    {
      _id: "111111111111111111111111",
      firstName: "Hayden",
      lastName: "Linder",
      email: "hayden@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "222222222222222222222222",
      firstName: "Brad",
      lastName: "Nelson",
      email: "brad@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "333333333333333333333333",
      firstName: "Joe",
      lastName: "Johnston",
      email: "joe@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "444444444444444444444444",
      firstName: "Marshall",
      lastName: "Strong",
      email: "marshall@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },

    {
      _id: "000000000000000000000001",
      firstName: "Bugs",
      lastName: "Bunny",
      email: "bugs@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "000000000000000000000002",
      firstName: "Daffy",
      lastName: "Duck",
      email: "daffy@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "000000000000000000000003",
      firstName: "Porky",
      lastName: "Pig",
      email: "porky@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "000000000000000000000004",
      firstName: "Speedy",
      lastName: "Gonzales",
      email: "speedy@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "000000000000000000000005",
      firstName: "Yosemite",
      lastName: "Sam",
      email: "sam@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "000000000000000000000006",
      firstName: "Lola",
      lastName: "Bunny",
      email: "lola@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "000000000000000000000007",
      firstName: "Tasmanian",
      lastName: "Devil",
      email: "taz@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "000000000000000000000008",
      firstName: "Marvin the",
      lastName: "Martian",
      email: "marvin@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "000000000000000000000009",
      firstName: "Sylvester the",
      lastName: "Cat",
      email: "sylvester@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "000000000000000000000010",
      firstName: "Tweety",
      lastName: "Bird",
      email: "tweety@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "000000000000000000000011",
      firstName: "Foghorn",
      lastName: "Leghorn",
      email: "foghorn@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "000000000000000000000012",
      firstName: "Pepé",
      lastName: "Le Pew",
      email: "pepe@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "000000000000000000000013",
      firstName: "Granny",
      lastName: "Webster",
      email: "granny@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "000000000000000000000014",
      firstName: "Elmer",
      lastName: "Fudd",
      email: "elmer@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "000000000000000000000015",
      firstName: "Wile E.",
      lastName: "Coyote",
      email: "wilee@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "000000000000000000000016",
      firstName: "Road",
      lastName: "Runner",
      email: "rr@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    }
  ]
};



const ticketSeeds = {
  model: 'Ticket',
  documents: [
    {
      _id: "5e88f42a3064bd3629c353ff",
      title: "Place a cat in every household",
      body: "Cats will make life better for all of humanity",
      status: "Planned",
      priority: "CATastrophic",
      creator: "000000000000000000000000",
      owner: "000000000000000000000000",
      subscribed: [
        "111111111111111111111111",
        "222222222222222222222222",
        "333333333333333333333333",
        "444444444444444444444444",
      ],
      lastUpdateSeenBy: [
        "000000000000000000000000"
      ],
    },
    {
      _id: "5e88f42a3064bd3629c35400",
      title: "Finish MERN project",
      body: "We need to finish this app so that we can move on",
      status: "Planned",
      priority: "CATastrophic",
      creator: "111111111111111111111111",
      owner: "111111111111111111111111",
      subscribed: [
        "000000000000000000000000",
        "111111111111111111111111",
        "222222222222222222222222",
        "333333333333333333333333",
        "444444444444444444444444",
      ],
      lastUpdateSeenBy: [
        "111111111111111111111111"
      ],
    },
  ]
};



const commentSeeds = {
  model: 'Comment',
  documents: [
    {
      body: "I think I'm actually more of a dog person...",
      author: "444444444444444444444444",
      ticket: "5e88f42a3064bd3629c353ff"
    },
    {
      body: "FIONA 4 EVER!!!",
      author: "333333333333333333333333",
      ticket: "5e88f42a3064bd3629c353ff"
    },
    {
      body: "I'll get to work right meow",
      author: "222222222222222222222222",
      ticket: "5e88f42a3064bd3629c353ff"
    },
    {
      body: "cats are purrrrrfect companions",
      author: "000000000000000000000000",
      ticket: "5e88f42a3064bd3629c353ff"
    },

    {
      body: "Does this mean I can't play video games today?",
      author: "333333333333333333333333",
      ticket: "5e88f42a3064bd3629c35400"
    },
    {
      body: "ugh, fine. I GUESS I'll get out of bed...",
      author: "222222222222222222222222",
      ticket: "5e88f42a3064bd3629c35400"
    },
    {
      body: "Marshall, I need 100% of your attention on this",
      author: "111111111111111111111111",
      ticket: "5e88f42a3064bd3629c35400"
    },
    {
      body: "meow",
      author: "444444444444444444444444",
      ticket: "5e88f42a3064bd3629c35400"
    },
    {
      body: "guys, FOCUS, please",
      author: "111111111111111111111111",
      ticket: "5e88f42a3064bd3629c35400"
    },
  ]
};


const tagSeeds = {
  model: 'Tag',
  documents: [
    {
      name: "CRITICAL",
      orgHandle: "acme.org"
    },
    {
      name: "FEATURE_REQUEST",
      orgHandle: "acme.org"
    },
    {
      name: "BUG",
      orgHandle: "acme.org"
    },
    {
      name: "BACKLOG",
      orgHandle: "acme.org"
    },
    {
      name: "SPARKLY",
      orgHandle: "acme.org"
    },
    {
      name: "ILLEAGAL",
      orgHandle: "acme.org"
    },
    {
      name: "DON'T_TELL_MY_MOM",
      orgHandle: "acme.org"
    },
  ]
};


// Data array containing seed data - documents organized by Model
const dbSeedData = [
  organizationSeeds,
  userSeeds,
  ticketSeeds,
  commentSeeds,
  tagSeeds
];


module.exports = dbSeedData;
