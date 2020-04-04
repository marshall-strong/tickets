const ticketSeeds = {
    model: 'Ticket',
    documents: [
        {
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
    ]
};

module.exports = ticketSeeds;