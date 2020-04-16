const genPasswordDigest = require('../utilities/bcrypt_utils');

const organizationSeeds = {
  model: 'Organization',
  documents: [
    {
      handle: "acme.org",
      name: "ACME",
      motto: "That's all folks!"
    },
  ]
};



const userSeeds = {
  model: 'User',
  documents: [

    {
      _id: "5e9781e148949b1f6d884ab0",
      firstName: "Michael",
      lastName: "Jordan",
      email: "michael@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },

    {
      _id: "5e9781e148949b1f6d884ab1",
      firstName: "Bugs",
      lastName: "Bunny",
      email: "bugs@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "5e9781e148949b1f6d884ab2",
      firstName: "Daffy",
      lastName: "Duck",
      email: "daffy@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "5e9781e148949b1f6d884ab3",
      firstName: "Porky",
      lastName: "Pig",
      email: "porky@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "5e9781e148949b1f6d884ab4",
      firstName: "Speedy",
      lastName: "Gonzales",
      email: "speedy@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "5e9781e148949b1f6d884ab5",
      firstName: "Yosemite",
      lastName: "Sam",
      email: "sam@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "5e9781e148949b1f6d884ab6",
      firstName: "Lola",
      lastName: "Bunny",
      email: "lola@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "5e9781e148949b1f6d884ab7",
      firstName: "Tasmanian",
      lastName: "Devil",
      email: "taz@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "5e9781e148949b1f6d884ab8",
      firstName: "Marvin the",
      lastName: "Martian",
      email: "marvin@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "5e9781e148949b1f6d884ab9",
      firstName: "Sylvester the",
      lastName: "Cat",
      email: "sylvester@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "5e9781e148949b1f6d884aba",
      firstName: "Tweety",
      lastName: "Bird",
      email: "tweety@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "5e9781e148949b1f6d884abb",
      firstName: "Foghorn",
      lastName: "Leghorn",
      email: "foghorn@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "5e9781e148949b1f6d884abc",
      firstName: "Pepé",
      lastName: "Le Pew",
      email: "pepe@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "5e9781e148949b1f6d884abd",
      firstName: "Granny",
      lastName: "Webster",
      email: "granny@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "5e9781e148949b1f6d884abe",
      firstName: "Elmer",
      lastName: "Fudd",
      email: "elmer@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "5e9781e148949b1f6d884abf",
      firstName: "Wile E.",
      lastName: "Coyote",
      email: "wilee@acme.org",
      orgHandle: "acme.org",
      password: genPasswordDigest("password")
    },
    {
      _id: "5e9781e148949b1f6d884ac0",
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
      _id: "5e97898fd6de452b68c745a1",
      title: "Challenge Aliens to a Competition",
      body: "These alien pipsqueeks want to take us to their theme park in outer space and make us slaves! Luckily, the rules give us a chance to defend ourselves...",
      status: "In Progress",
      priority: "High",
      creator: "5e9781e148949b1f6d884ab1",
      owner: "5e9781e148949b1f6d884ab2",
      tags: [
        "5e9781e148949b1f6d884ad0",
      ],
      subscribed: [
        "5e9781e148949b1f6d884ab1",
        "5e9781e148949b1f6d884ab2",
        "5e9781e148949b1f6d884ab3",
        "5e9781e148949b1f6d884ab9",
        "5e9781e148949b1f6d884abe",

      ],
      lastUpdateSeenBy: [
        "5e9781e148949b1f6d884ab1",
        "5e9781e148949b1f6d884ab2",
        "5e9781e148949b1f6d884ab3",
        "5e9781e148949b1f6d884ab9",
        "5e9781e148949b1f6d884abe",
      ],
    },
    {
      _id: "5e97898fd6de452b68c745b2",
      title: "Intimidate the Opposition",
      body: "lorem ipsum",
      status: "In Progress",
      priority: "High",
      creator: "5e9781e148949b1f6d884ab1",
      owner: "5e9781e148949b1f6d884ab5",
      tags: [
        "5e9781e148949b1f6d884ad0",
      ],
      subscribed: [
        "5e9781e148949b1f6d884ab1",
      ],
      lastUpdateSeenBy: [

      ],
    },
    {
      _id: "5e97898fd6de452b68c745c3",
      title: "Get Some Help!",
      body: "lorem ipsum",
      status: "In Progress",
      priority: "High",
      creator: "5e9781e148949b1f6d884ab1",
      owner: "5e9781e148949b1f6d884ab3",
      tags: [
        "5e9781e148949b1f6d884ad0",
      ],
      subscribed: [
        "5e9781e148949b1f6d884ab1",
      ],
      lastUpdateSeenBy: [

      ],
    },
    {
      _id: "5e97898fd6de452b68c745d4",
      title: "Clean Basketball Court",
      body: "lorem ipsum",
      status: "In Progress",
      priority: "High",
      creator: "5e9781e148949b1f6d884ab1",
      owner: "5e9781e148949b1f6d884ab7",
      tags: [
        "5e9781e148949b1f6d884ad0",
      ],
      subscribed: [
        "5e9781e148949b1f6d884ab1",
      ],
      lastUpdateSeenBy: [
  
      ],
    },
    {
      _id: "5e978ad78679802d755572e9",
      title: "Obtain Michael's Basketball Gear",
      body: "lorem ipsum",
      status: "In Progress",
      priority: "High",
      creator: "5e9781e148949b1f6d884ab1",
      owner: "5e9781e148949b1f6d884abc",
      tags: [
        "5e9781e148949b1f6d884ad0",
      ],
      subscribed: [
        "5e9781e148949b1f6d884ab1",
      ],
      lastUpdateSeenBy: [
        
      ],
    },
    {
      _id: "5e97898fd6de452b68c745f6",
      title: "Train for the Big Game",
      body: "lorem ipsum",
      status: "In Progress",
      priority: "High",
      creator: "5e9781e148949b1f6d884ab1",
      owner: "5e9781e148949b1f6d884abb",
      tags: [
        "5e9781e148949b1f6d884ad0",
      ],
      subscribed: [
        "5e9781e148949b1f6d884ab1",
      ],
      lastUpdateSeenBy: [
         
      ],
    },
    {
      _id: "5e978ad78679802d755572eb",
      title: "Team Refreshments",
      body: "lorem ipsum",
      status: "In Progress",
      priority: "High",
      creator: "5e9781e148949b1f6d884ab1",
      owner: "5e9781e148949b1f6d884abd",
      tags: [
        "5e9781e148949b1f6d884ad0",
      ],
      subscribed: [
        "5e9781e148949b1f6d884ab1",
      ],
      lastUpdateSeenBy: [
         
      ],
    },
    {
      _id: "5e978ad78679802d755572ec",
      title: "Inspire Team with Michael's Secret Stuff",
      body: "lorem ipsum",
      status: "In Progress",
      priority: "High",
      creator: "5e9781e148949b1f6d884ab1",
      owner: "5e9781e148949b1f6d884ab1",
      tags: [
        "5e9781e148949b1f6d884ad0",
      ],
      subscribed: [
        "5e9781e148949b1f6d884ab1",
      ],
      lastUpdateSeenBy: [
         
      ],
    },
    {
      _id: "5e978ad78679802d755572ed",
      title: "Give the NBA players back their basketball powers",
      body: "lorem ipsum",
      status: "In Progress",
      priority: "High",
      creator: "5e9781e148949b1f6d884ab1",
      owner: "5e9781e148949b1f6d884ab0",
      tags: [
        "5e9781e148949b1f6d884ad0",
      ],
      subscribed: [
        "5e9781e148949b1f6d884ab1",
      ],
      lastUpdateSeenBy: [
       
      ],
    },
    {
      _id: "5e978ad78679802d755572ee",
      title: "Celebrate Our Victory!",
      body: "lorem ipsum",
      status: "In Progress",
      priority: "High",
      creator: "5e9781e148949b1f6d884ab1",
      owner: "5e9781e148949b1f6d884ab6",
      tags: [
        "5e9781e148949b1f6d884ad0",
      ],
      subscribed: [
        "5e9781e148949b1f6d884ab1",
      ],
      lastUpdateSeenBy: [
      
      ],
    },

    {
      _id: "5e978ad78679802d755572ef",
      title: "Destroy the planet Earth",
      body: "At last, after 2,000 years of work, the aludium pu-36 explosive space modulator is within my grasp! My dream will finally come true!",
      status: "Planned",
      priority: "CATastrophic",
      creator: "5e9781e148949b1f6d884ab8",
      owner: "5e9781e148949b1f6d884ab8",
      subscribed: [
        "5e9781e148949b1f6d884ab1",
        "5e9781e148949b1f6d884ab2",
      ],
      lastUpdateSeenBy: [
  
      ],
    },
    {
      _id: "5e978ad78679802d755572f0",
      title: "Catch Road Runner using ACME Jet Bike Kit",
      body: "Like a motorcycle, only without the wheels.",
      status: "Closed",
      priority: "High",
      creator: "5e9781e148949b1f6d884abf",
      owner: "5e9781e148949b1f6d884abf",
      subscribed: [
        "5e9781e148949b1f6d884abf",
      ],
      lastUpdateSeenBy: [
        "5e9781e148949b1f6d884abf",
        "5e9781e148949b1f6d884ac0",
      ],
    },
    {
      _id: "5e978ad78679802d755572f1",
      title: "Catch Road Runner using ACME Dehydrated Boulder Kit",
      body: "Instant Boulders: Just add water",
      status: "Planned",
      priority: "High",
      creator: "5e9781e148949b1f6d884abf",
      owner: "5e9781e148949b1f6d884abf",
      subscribed: [
        "5e9781e148949b1f6d884abf",
        "5e9781e148949b1f6d884ac0",
      ],
      lastUpdateSeenBy: [
        "5e9781e148949b1f6d884abf",
      ],
    },
    {
      _id: "5e978ad78679802d755572f2",
      title: "Catch Road Runner using ACME Giant Rubber Band",
      body: "Contents: One (1) Giant Rubber Band (for tripping Road Runners)",
      status: "In Progress",
      priority: "High",
      creator: "5e9781e148949b1f6d884abf",
      owner: "5e9781e148949b1f6d884abf",
      subscribed: [
        "5e9781e148949b1f6d884abf",
        "5e9781e148949b1f6d884ac0",
      ],
      lastUpdateSeenBy: [
        "5e9781e148949b1f6d884abf",
      ],
    },
    {
      _id: "5e978ad78679802d755572f3",
      title: "Catch Road Runner using ACME Earthquake Pills",
      body: "Why wait? Make your own earthquakes -- loads of fun! (DISCLAIMER: has no effect on Road Runners...)",
      status: "Planned",
      priority: "High",
      creator: "5e9781e148949b1f6d884abf",
      owner: "5e9781e148949b1f6d884abf",
      subscribed: [
        "5e9781e148949b1f6d884abf",
        "5e9781e148949b1f6d884ac0",
      ],
      lastUpdateSeenBy: [
        "5e9781e148949b1f6d884abf",
      ],
    },
    {
      _id: "5e97898fd6de452b68c745e5",
      title: "Hunting Season",
      body: "Be vewy vewy quiet. I'm hunting wabbits! Hahahahahah",
      status: "In Progress",
      priority: "High",
      creator: "5e9781e148949b1f6d884abe",
      owner: "5e9781e148949b1f6d884abe",
      subscribed: [
        "5e9781e148949b1f6d884abe",
        "5e9781e148949b1f6d884ab1",
        "5e9781e148949b1f6d884ab2",
      ],
      lastUpdateSeenBy: [
        "5e9781e148949b1f6d884ab2"
      ],
    },
  ]
};



const commentSeeds = {
  model: 'Comment',
  documents: [

    {
      body: "All right troops. It is for us to choose a battlefield that affords us.",
      author: "5e9781e148949b1f6d884ab1",
      ticket: "5e97898fd6de452b68c745a1",
      createdAt: (Date.now() - 190000000),
      updatedAt: (Date.now() - 190000000)
    },
    {
      body: "Oh, I-I g-got it.",
      author: "5e9781e148949b1f6d884ab3",
      ticket: "5e97898fd6de452b68c745a1",
      createdAt: (Date.now() - 189000000),
      updatedAt: (Date.now() - 189000000)
    },
    {
      body: "Yes, Private Porkster?",
      author: "5e9781e148949b1f6d884ab1",
      ticket: "5e97898fd6de452b68c745a1",
      createdAt: (Date.now() - 188000000),
      updatedAt: (Date.now() - 188000000)
    },
    {
      body: "How about we challenge them to a spelling bee?",
      author: "5e9781e148949b1f6d884ab3",
      ticket: "5e97898fd6de452b68c745a1",
      createdAt: (Date.now() - 187000000),
      updatedAt: (Date.now() - 187000000)
    },
    {
      body: "Say, we could have a bowling tournament...",
      author: "5e9781e148949b1f6d884abe",
      ticket: "5e97898fd6de452b68c745a1",
      createdAt: (Date.now() - 186000000),
      updatedAt: (Date.now() - 186000000)
    },
    {
      body: "Suffering succotash! What's wrong with all of ya? I say we get a ladder, wait til the old lady's out of the room, then grab the little bird.",
      author: "5e9781e148949b1f6d884ab9",
      ticket: "5e97898fd6de452b68c745a1",
      createdAt: (Date.now() - 185000000),
      updatedAt: (Date.now() - 185000000)
    },
    {
      body: "Whoa, whoa. Take a deep breath Sly.",
      author: "5e9781e148949b1f6d884ab1",
      ticket: "5e97898fd6de452b68c745a1",
      createdAt: (Date.now() - 184000000),
      updatedAt: (Date.now() - 184000000)
    },
    {
      body: "Okay, Let's anaylze the competition here. Now, what are looking at here? We got a small race of invading aliens.",
      author: "5e9781e148949b1f6d884ab1",
      ticket: "5e97898fd6de452b68c745a1",
      createdAt: (Date.now() - 183000000),
      updatedAt: (Date.now() - 183000000)
    },
    {
      body: "Small arms, short legs.",
      author: "5e9781e148949b1f6d884ab2",
      ticket: "5e97898fd6de452b68c745a1",
      createdAt: (Date.now() - 182000000),
      updatedAt: (Date.now() - 182000000)
    },
    {
      body: "Not vewy fast...",
      author: "5e9781e148949b1f6d884abe",
      ticket: "5e97898fd6de452b68c745a1",
      createdAt: (Date.now() - 181000000),
      updatedAt: (Date.now() - 181000000)
    },
    {
      body: "Tiny little guys.",
      author: "5e9781e148949b1f6d884ab9",
      ticket: "5e97898fd6de452b68c745a1",
      createdAt: (Date.now() - 180000000),
      updatedAt: (Date.now() - 180000000)
    },
    {
      body: "Can't jump high.",
      author: "5e9781e148949b1f6d884ab3",
      ticket: "5e97898fd6de452b68c745a1",
      createdAt: (Date.now() - 179000000),
      updatedAt: (Date.now() - 179000000)
    },
    {
      body: "Ohhhhhhh!!!!",
      author: "5e9781e148949b1f6d884ab2",
      ticket: "5e97898fd6de452b68c745a1",
      createdAt: (Date.now() - 178900000),
      updatedAt: (Date.now() - 178900000)
    },
    {
      body: "Ohhhhhhh!!!!",
            author: "5e9781e148949b1f6d884abe",
      ticket: "5e97898fd6de452b68c745a1",
      createdAt: (Date.now() - 178800000),
      updatedAt: (Date.now() - 178800000)
    },
    {
      body: "Ohhhhhhh!!!!",
      author: "5e9781e148949b1f6d884ab9",
      ticket: "5e97898fd6de452b68c745a1",
      createdAt: (Date.now() - 178700000),
      updatedAt: (Date.now() - 178700000)
    },
    {
      body: "Ohhhhhhh!!!!",
      author: "5e9781e148949b1f6d884ab3",
      ticket: "5e97898fd6de452b68c745a1",
      createdAt: (Date.now() - 178600000),
      updatedAt: (Date.now() - 178600000)
    },
    {
      body: "Basketball it is then!!",
      author: "5e9781e148949b1f6d884ab1",
      ticket: "5e97898fd6de452b68c745a1",
      createdAt: (Date.now() - 177000000),
      updatedAt: (Date.now() - 177000000)
    },





    {
      body: "Oh, drat these computers. They're so naughty and complex, I could pinch them.",
      author: "5e9781e148949b1f6d884ab8",
      ticket: "5e978ad78679802d755572ef",
      createdAt: (Date.now() - 90000000),
      updatedAt: (Date.now() - 90000000)
    },
    {
      body: "Hey, nice lookin' toy you got there kiddo. What else did your daddy get you for Christmas?",
      author: "5e9781e148949b1f6d884ab2",
      ticket: "5e978ad78679802d755572ef",
      createdAt: (Date.now() - 89000000),
      updatedAt: (Date.now() - 89000000)
    },
    {
      body: "Please sir, do not interrupt my chain of thought. I'm a busy Martian.",
      author: "5e9781e148949b1f6d884ab8",
      ticket: "5e978ad78679802d755572ef",
      createdAt: (Date.now() - 88000000),
      updatedAt: (Date.now() - 88000000)
    },
    {
      body: "Ehhhh pardon me Doc, but could you rent me a U-Drive flying saucer? I've gotta get back to the Earth.",
      author: "5e9781e148949b1f6d884ab1",
      ticket: "5e978ad78679802d755572ef",
      createdAt: (Date.now() - 87000000),
      updatedAt: (Date.now() - 87000000)
    },
    {
      body: "The Earth? Oh, the Earth will be destroyed in just a few moments.",
      author: "5e9781e148949b1f6d884ab8",
      ticket: "5e978ad78679802d755572ef",
      createdAt: (Date.now() - 86000000),
      updatedAt: (Date.now() - 86000000)
    },
    {
      body: "Ehhhh pardon me again Doc, but just what did you mean by that crack about the Earth being gone?",
      author: "5e9781e148949b1f6d884ab1",
      ticket: "5e978ad78679802d755572ef",
      createdAt: (Date.now() - 85000000),
      updatedAt: (Date.now() - 85000000)
    },
    {
      body: "Oh, I'm going to blow it up. It obstructs my view of Venus.",
      author: "5e9781e148949b1f6d884ab8",
      ticket: "5e978ad78679802d755572ef",
      createdAt: (Date.now() - 84000000),
      updatedAt: (Date.now() - 84000000)
    },
    {
      body: "What?!?",
      author: "5e9781e148949b1f6d884ab2",
      ticket: "5e978ad78679802d755572ef",
      createdAt: (Date.now() - 83000000),
      updatedAt: (Date.now() - 83000000)
    },

    {
      body: "Beep beep!",
      author: "5e9781e148949b1f6d884ac0",
      ticket: "5e978ad78679802d755572f0",

    },

    {
      body: "Beep beep!",
      author: "5e9781e148949b1f6d884ac0",
      ticket: "5e978ad78679802d755572f1"
    },

    {
      body: "Beep beep!",
      author: "000000000000000000000016",
      ticket: "5e978ad78679802d755572f2"
    },

    {
      body: "Beep beep!",
      author: "5e9781e148949b1f6d884ac0",
      ticket: "5e978ad78679802d755572f3"
    },
  ]
};


const tagSeeds = {
  model: 'Tag',
  documents: [
    {
      _id: "5e9781e148949b1f6d884ad0",
      name: "SPACE_JAM",
      orgHandle: "acme.org"
    },
    {
      _id: "5e9781e148949b1f6d884ad1",
      name: "MERRY_MELODIES",
      orgHandle: "acme.org"
    },
    {
      _id: "5e9781e148949b1f6d884ad2",
      name: "LOONY_TUNES",
      orgHandle: "acme.org"
    },
    {
      _id: "5e9781e148949b1f6d884ad3",
      name: "CARTOON_NETWORK",
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
  tagSeeds,
];


// const organizationSeedsCATS = {
//   model: 'Organization',
//   documents: [
//     {
//       handle: "cats4humanity.org",
//       name: "Cats For Humanity",
//       motto: "That's all folks!"
//     }
//   ]
// };

// const userSeedsCATS = {
//   model: 'User',
//   documents: [
//     {
//       _id: "000000000000000000000000",
//       firstName: "Demo",
//       lastName: "User",
//       email: "user@cats4humanity.org",
//       orgHandle: "cats4humanity.org",
//       password: genPasswordDigest("password")
//     },
//     {
//       _id: "111111111111111111111111",
//       firstName: "Hayden",
//       lastName: "Linder",
//       email: "hayden@cats4humanity.org",
//       orgHandle: "cats4humanity.org",
//       password: genPasswordDigest("password")
//     },
//     {
//       _id: "222222222222222222222222",
//       firstName: "Brad",
//       lastName: "Nelson",
//       email: "brad@cats4humanity.org",
//       orgHandle: "cats4humanity.org",
//       password: genPasswordDigest("password")
//     },
//     {
//       _id: "333333333333333333333333",
//       firstName: "Joe",
//       lastName: "Johnston",
//       email: "joe@cats4humanity.org",
//       orgHandle: "cats4humanity.org",
//       password: genPasswordDigest("password")
//     },
//     {
//       _id: "444444444444444444444444",
//       firstName: "Marshall",
//       lastName: "Strong",
//       email: "marshall@cats4humanity.org",
//       orgHandle: "cats4humanity.org",
//       password: genPasswordDigest("password")
//     },
//   ]
// };

// const ticketSeedsCATS = {
//   model: 'Ticket',
//   documents: [
//     {
//       _id: "5e88f42a3064bd3629c353ff",
//       title: "Place a cat in every household",
//       body: "Cats will make life better for all of humanity",
//       status: "Planned",
//       priority: "CATastrophic",
//       creator: "000000000000000000000000",
//       owner: "000000000000000000000000",
//       subscribed: [
//         "111111111111111111111111",
//         "222222222222222222222222",
//         "333333333333333333333333",
//         "444444444444444444444444",
//       ],
//       lastUpdateSeenBy: [
//         "000000000000000000000000"
//       ],
//     },
//     {
//       _id: "5e88f42a3064bd3629c35400",
//       title: "Finish MERN project",
//       body: "We need to finish this app so that we can move on",
//       status: "Planned",
//       priority: "CATastrophic",
//       creator: "111111111111111111111111",
//       owner: "111111111111111111111111",
//       subscribed: [
//         "000000000000000000000000",
//         "111111111111111111111111",
//         "222222222222222222222222",
//         "333333333333333333333333",
//         "444444444444444444444444",
//       ],
//       lastUpdateSeenBy: [
//         "111111111111111111111111"
//       ],
//     },
//   ]
// };

// const commentSeedsCATS = {
//   model: 'Comment',
//   documents: [
//     {
//       body: "I think I'm actually more of a dog person...",
//       author: "444444444444444444444444",
//       ticket: "5e88f42a3064bd3629c353ff"
//     },
//     {
//       body: "FIONA 4 EVER!!!",
//       author: "333333333333333333333333",
//       ticket: "5e88f42a3064bd3629c353ff"
//     },
//     {
//       body: "I'll get to work right meow",
//       author: "222222222222222222222222",
//       ticket: "5e88f42a3064bd3629c353ff"
//     },
//     {
//       body: "cats are purrrrrfect companions",
//       author: "000000000000000000000000",
//       ticket: "5e88f42a3064bd3629c353ff"
//     },

//     {
//       body: "Does this mean I can't play video games today?",
//       author: "333333333333333333333333",
//       ticket: "5e88f42a3064bd3629c35400"
//     },
//     {
//       body: "ugh, fine. I GUESS I'll get out of bed...",
//       author: "222222222222222222222222",
//       ticket: "5e88f42a3064bd3629c35400"
//     },
//     {
//       body: "Marshall, I need 100% of your attention on this",
//       author: "111111111111111111111111",
//       ticket: "5e88f42a3064bd3629c35400"
//     },
//     {
//       body: "meow",
//       author: "444444444444444444444444",
//       ticket: "5e88f42a3064bd3629c35400"
//     },
//     {
//       body: "guys, FOCUS, please",
//       author: "111111111111111111111111",
//       ticket: "5e88f42a3064bd3629c35400"
//     },
//   ]
// };

// const tagSeedsCATS = {
//   model: 'Tag',
//   documents: [
//     {
//       name: "CRITICAL",
//       orgHandle: "cats4humanity.org"
//     },
//     {
//       name: "FEATURE_REQUEST",
//       orgHandle: "cats4humanity.org"
//     },
//     {
//       name: "BUG",
//       orgHandle: "cats4humanity.org"
//     },
//     {
//       name: "BACKLOG",
//       orgHandle: "cats4humanity.org"
//     },
//     {
//       name: "SPARKLY",
//       orgHandle: "cats4humanity.org"
//     },
//     {
//       name: "ILLEAGAL",
//       orgHandle: "cats4humanity.org"
//     },
//     {
//       name: "DON'T_TELL_MY_MOM",
//       orgHandle: "cats4humanity.org"
//     },
//   ]
// };

// // Data array containing seed data - documents organized by Model
// const dbSeedData = [
//   organizationSeeds,
//   userSeeds,
//   ticketSeeds,
//   commentSeeds,
//   tagSeeds,
//   organizationSeedsCATS,
//   userSeedsCATS,
//   ticketSeedsCATS,
//   commentSeedsCATS,
//   tagSeedsCATS
// ];


module.exports = dbSeedData;

