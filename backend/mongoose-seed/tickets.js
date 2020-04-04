const ticketSeeds = {
    model: 'Ticket',
    documents: [
        {
          _id: "5e88f0a6fa087c34ce3d2fa3",
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
        },
        {
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
        },
    ]
};

module.exports = ticketSeeds;