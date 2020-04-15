const genPasswordDigest = require('../utilities/bcrypt_utils');

const organizationSeeds = {
  model: 'Organization',
  documents: [
    {
      handle: "acme.org",
      name: "ACME",
      motto: "That's all folks!"
    },
    {
      handle: "cats4humanity.org",
      name: "Cats For Humanity",
      motto: "That's all folks!"
    }
  ]
};



const userSeeds = {
  model: 'User',
  documents: [
    {
      // _id: "000000000000000000000000",
      firstName: "Demo",
      lastName: "User",
      email: "user@cats4humanity.org",
      orgHandle: "cats4humanity.org",
      password: genPasswordDigest("password")
    },
    {
      // _id: "000000000000000000001000",
      firstName: "Michael",
      lastName: "Jordan",
      email: "michael@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "111111111111111111111111",
      firstName: "Hayden",
      lastName: "Linder",
      email: "hayden@cats4humanity.org",
      orgHandle: "cats4humanity.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "222222222222222222222222",
      firstName: "Brad",
      lastName: "Nelson",
      email: "brad@cats4humanity.org",
      orgHandle: "cats4humanity.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "333333333333333333333333",
      firstName: "Joe",
      lastName: "Johnston",
      email: "joe@cats4humanity.org",
      orgHandle: "cats4humanity.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "444444444444444444444444",
      firstName: "Marshall",
      lastName: "Strong",
      email: "marshall@cats4humanity.org",
      orgHandle: "cats4humanity.org",
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
      _id: "100000000000000000000000",
      title: "Destroy the planet Earth",
      body: "At last, after 2,000 years of work, the aludium pu-36 explosive space modulator is within my grasp! My dream will finally come true!",
      status: "Planned",
      priority: "CATastrophic",
      creator: "000000000000000000000008",
      owner: "000000000000000000000008",
      subscribed: [
        "000000000000000000000008",
        "000000000000000000000001",
        "000000000000000000000002",
      ],
      lastUpdateSeenBy: [
        "000000000000000000000008"
      ],
    },
    {
      _id: "100000000000000000000001",
      title: "Catch Road Runner using ACME Jet Bike Kit",
      body: "Like a motorcycle, only without the wheels.",
      status: "Closed",
      priority: "High",
      creator: "000000000000000000000015",
      owner: "000000000000000000000015",
      subscribed: [
        "000000000000000000000015",
        "000000000000000000000016",
      ],
      lastUpdateSeenBy: [
        "000000000000000000000016"
      ],
    },
    {
      _id: "100000000000000000000002",
      title: "Catch Road Runner using ACME Dehydrated Boulder Kit",
      body: "Instant Boulders: Just add water",
      status: "Planned",
      priority: "High",
      creator: "000000000000000000000015",
      owner: "000000000000000000000015",
      subscribed: [
        "000000000000000000000015",
        "000000000000000000000016",
      ],
      lastUpdateSeenBy: [
        "000000000000000000000015"
      ],
    },
    {
      _id: "100000000000000000000003",
      title: "Catch Road Runner using ACME Giant Rubber Band",
      body: "Contents: One (1) Giant Rubber Band (for tripping Road Runners)",
      status: "Closed",
      priority: "High",
      creator: "000000000000000000000015",
      owner: "000000000000000000000015",
      subscribed: [
        "000000000000000000000015",
        "000000000000000000000016",
      ],
      lastUpdateSeenBy: [
        "000000000000000000000016"
      ],
    },
    {
      _id: "100000000000000000000004",
      title: "Catch Road Runner using ACME Earthquake Pills",
      body: "Why wait? Make your own earthquakes -- loads of fun! (DISCLAIMER: no effect on Road Runners...)",
      status: "Closed",
      priority: "High",
      creator: "000000000000000000000015",
      owner: "000000000000000000000015",
      subscribed: [
        "000000000000000000000015",
        "000000000000000000000016",
      ],
      lastUpdateSeenBy: [
        "000000000000000000000016"
      ],
    },

    
  ]
};



const commentSeeds = {
  model: 'Comment',
  documents: [
    {
      body: "Oh, drat these computers. They're so naughty and complex, I could pinch them.",
      author: "000000000000000000000002",
      ticket: "100000000000000000000000"
    },
    {
      body: "Hey, nice lookin' toy you got there kiddo. What else did your daddy get you for Christmas?",
      author: "000000000000000000000002",
      ticket: "100000000000000000000000"
    },
    {
      body: "Please sir, do not interrupt my chain of thought. I'm a busy Martian.",
      author: "000000000000000000000008",
      ticket: "100000000000000000000000"
    },
    {
      body: "Ehhhh pardon me Doc, but could you rent me a U-Drive flying saucer? I've gotta get back to the Earth.",
      author: "000000000000000000000001",
      ticket: "100000000000000000000000"
    },
    {
      body: "The Earth? Oh, the Earth will be destroyed in just a few moments.",
      author: "000000000000000000000008",
      ticket: "100000000000000000000000"
    },
    {
      body: "Ehhhh pardon me again Doc, but just what did you mean by that crack about the Earth being gone?",
      author: "000000000000000000000001",
      ticket: "100000000000000000000000"
    },
    {
      body: "Oh, I'm going to blow it up. It obstructs my view of Venus.",
      author: "000000000000000000000008",
      ticket: "100000000000000000000000"
    },

    {
      body: "Beep beep!",
      author: "000000000000000000000016",
      ticket: "100000000000000000000001"
    },

    {
      body: "Beep beep!",
      author: "000000000000000000000016",
      ticket: "100000000000000000000002"
    },

    {
      body: "Beep beep!",
      author: "000000000000000000000016",
      ticket: "100000000000000000000003"
    },

    {
      body: "Beep beep!",
      author: "000000000000000000000016",
      ticket: "100000000000000000000004"
    },
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
