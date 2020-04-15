const genPasswordDigest = require('../utilities/bcrypt_utils');
// Bugs Bunny
// Daffy Duck
// Porky Pig
// Speedy Gonzales
// Yosemite Sam
// Lola Bunny
// Tasmanian Devil
// Marvin the Martian
// Sylvester the Cat
// Tweety Bird
// Foghorn Leghorn
// Pepé Le Pew
// Granny Webster
// Elmer Fudd
// Wile E.Coyote
// Road Runner
const userSeeds = {
  model: 'User',
  documents: [
    {
      _id: "000000000000000000000000",
      firstName: "Demo",
      lastName: "User",
      email: "user@cats4humanity.org",
      orgHandle: "cats4humanity.org",
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
    },
   
    // {
    //   _id: "aaaaaaaaaaaaaaaaaaaaaaaa",
    //   firstName: "Wiley",
    //   lastName: "Coyote",
    //   email: "wc@acme.boom",
    //   orgHandle: "acme.boom",
    //   password: genPasswordDigest("password")
    // },
    // {
    //   _id: "bbbbbbbbbbbbbbbbbbbbbbbb",
    //   firstName: "Road",
    //   lastName: "Runner",
    //   email: "rr@acme.boom",
    //   orgHandle: "acme.boom",
    //   password: genPasswordDigest("password")
    // },
    // {
    //   _id: "cccccccccccccccccccccccc",
    //   firstName: "Marvin",
    //   lastName: "The Martian",
    //   email: "mtm@acme.boom",
    //   orgHandle: "acme.boom",
    //   password: genPasswordDigest("password")
    // },
    // // {
    // //   _id: "ccccccccccccccccccccccc1",
    // //   firstName: "Gmail",
    // //   lastName: "User",
    // //   email: "user@gmail.com",
    // //   orgHandle: "gmail.com",
    // //   password: genPasswordDigest("password")
    // // },
    // {
    //   _id: "ccccccccccccccccccccccc2",
    //   firstName: "Baby",
    //   lastName: "Shark",
    //   email: "babyshark@appacademy.io",
    //   orgHandle: "appacademy.io",
    //   password: genPasswordDigest("password")
    // },
    // {
    //   _id: "ccccccccccccccccccccccc3",
    //   firstName: "Mommy",
    //   lastName: "Shark",
    //   email: "mommyshark@appacademy.io",
    //   orgHandle: "appacademy.io",
    //   password: genPasswordDigest("password")
    // },
    // {
    //   _id: "ccccccccccccccccccccccc4",
    //   firstName: "Daddy",
    //   lastName: "Shark",
    //   email: "daddyshark@appacademy.io",
    //   orgHandle: "appacademy.io",
    //   password: genPasswordDigest("password")
    // },
    // {
    //   _id: "ccccccccccccccccccccccc5",
    //   firstName: "Baby",
    //   lastName: "Squid",
    //   email: "babysquid@appacademy.io",
    //   orgHandle: "appacademy.io",
    //   password: genPasswordDigest("password")
    // },
    // {
    //   _id: "ccccccccccccccccccccccc6",
    //   firstName: "Mommy",
    //   lastName: "Squid",
    //   email: "mommysquid@appacademy.io",
    //   orgHandle: "appacademy.io",
    //   password: genPasswordDigest("password")
    // },
    // {
    //   _id: "ccccccccccccccccccccccc7",
    //   firstName: "Daddy",
    //   lastName: "Squid",
    //   email: "daddysquid@appacademy.io",
    //   orgHandle: "appacademy.io",
    //   password: genPasswordDigest("password")
    // },
    // {
    //   _id: "ccccccccccccccccccccccc8",
    //   firstName: "Foo",
    //   lastName: "Bar",
    //   email: "foobar@appacademy.io",
    //   orgHandle: "appacademy.io",
    //   password: genPasswordDigest("password")
    // },
    // {
    //   _id: "999999999999999999999999",
    //   firstName: "Carlos",
    //   lastName: "Garcia",
    //   email: "carlos@appacademy.io",
    //   orgHandle: "appacademy.io",
    //   password: genPasswordDigest("password")
    // }
  ]
};

module.exports = userSeeds;
