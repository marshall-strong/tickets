const express = require("express");
const router = express.Router();
const passport = require('passport');
const validateTicketInput = require('../../validation/ticket')
const Ticket = require('../../models/ticket')

router.get('/?search', (req, res) => {

        debugger
        // if (req.query.owner) {
          if (req.query.ownerInclusion === "is") {
            debugger
            //   Ticket.find({owner: req.query.owner})
            //     .populate("creator", ["starred", "firstName", "lastName", "_id"])
            //     .populate("owner", ["starred", "firstName", "lastName", "_id"])
            //     .populate("updatedBy", ["firstName", "lastName", "_id"])
            //     .populate("lastUpdateSeenBy", ["firstName", "lastName", "_id"])
            //     .populate("subscribed", ["firstName", "lastName", "_id"])
            //     .populate("updatedBy", ["firstName", "lastName", "_id"])
            //     .then(tickets => {
            //       debugger
            //       res.json(tickets);
            //     })
            //     .catch(err =>
            //       res
            //         .status(404)
            //         .json({ noticketsfound: "No tickets found for that search" })
            //     );

            // attempt 3:

            // const query = {}

            // for (let key in req.query) {
            //     query[key] = new RegExp('^' + req.query[key] + '$', 'i')
            // }

            // debugger
            //   Ticket.find(query)
            //       .populate("creator", ["starred", "firstName", "lastName", "_id"])
            //       .populate("owner", ["starred", "firstName", "lastName", "_id"])
            //       .populate("updatedBy", ["firstName", "lastName", "_id"])
            //       .populate("lastUpdateSeenBy", ["firstName", "lastName", "_id"])
            //       .populate("subscribed", ["firstName", "lastName", "_id"])
            //       .populate("updatedBy", ["firstName", "lastName", "_id"])
            //       .then(tickets => {
            //           debugger
            //           res.json(tickets);
            //       })
            //       .catch(err =>
            //           res
            //               .status(404)
            //               .json({ noticketsfound: "No tickets found for that search" })
            //       );

            // attempt 2:

            // const filteredQuery = {}
            // acceptableFields = ['owner', 'creator', 'subscribed']

            // acceptableFields.forEach( field => {
            //     req.query[field] + filteredQuery[field] = req.query[field];
            // });

            // attempt 1:
            // use Object.assign to create filtered query object after destructuring each specific query object and iterating through them

              const priorityQuery = () => {

                switch (req.query.priority) {
                    case 'low':
                        return { priority: 'Low' }
                    case 'medium':
                        return { priority: 'Medium' }
                    case 'high':
                        return { priority: 'High' }
                    case 'catastrophic':
                        return { priority: 'CATastrophic' }
                    default:
                        return {};
                }
              }

              const statusQuery = () => {
                debugger
                switch (req.query.status) {
                    case 'no progress':
                        debugger
                        return { status: 'No Progress' }
                    case 'planned':
                        return { status: 'Planned' }               
                    case 'in progress':
                        return { status: 'In Progress' }               
                    case 'blocked':
                        return { status: 'Blocked' }               
                    case 'closed':
                        return { status: 'Closed' }               
                    default:
                        return {};
                }
              }

              const ownerQuery = req.query.owner ? {owner: req.query.owner} : {}
              const creatorQuery = req.query.creator ? {creator: req.query.creator} : {}
              const subscribedQuery = req.query.subscribed ? {subscribed: req.query.subscribed} : {}
            //   const priorityQuery = req.query.priority ? {priority: 'Low'} : {}
              const filteredQuery = Object.assign({}, { ...ownerQuery, ...creatorQuery, ...subscribedQuery })

              Ticket.find({$and: [filteredQuery, statusQuery]})
                .populate("creator", ["starred", "firstName", "lastName", "_id"])
                .populate("owner", ["starred", "firstName", "lastName", "_id"])
                .populate("updatedBy", ["firstName", "lastName", "_id"])
                .populate("lastUpdateSeenBy", ["firstName", "lastName", "_id"])
                .populate("subscribed", ["firstName", "lastName", "_id"])
                .populate("updatedBy", ["firstName", "lastName", "_id"])
                .then(tickets => {
                  debugger
                  res.json(tickets);
                })
                .catch(err =>
                  res
                    .status(404)
                    .json({ noticketsfound: "No tickets found for that search" })
                );
          } else {

              const ownerQuery = req.query.owner ? { owner: { $nin: req.query.owner } } : {}
              const creatorQuery = req.query.creator ? { creator: { $nin: req.query.creator } } : {}
              const subscribedQuery = req.query.subscribed ? { subscribed: req.query.subscribed } : {}
              const filteredQuery = Object.assign({}, { ...ownerQuery, ...creatorQuery, ...subscribedQuery })

            debugger
              Ticket.find(filteredQuery)
                .populate("creator", ["starred", "firstName", "lastName", "_id"])
                .populate("owner", ["starred", "firstName", "lastName", "_id"])
                .populate("updatedBy", ["firstName", "lastName", "_id"])
                .populate("lastUpdateSeenBy", ["firstName", "lastName", "_id"])
                .populate("subscribed", ["firstName", "lastName", "_id"])
                .populate("updatedBy", ["firstName", "lastName", "_id"])
                .then(tickets => {
                  res.json(tickets);
                })
                .catch(err =>
                  res
                    .status(404)
                    .json({ noticketsfound: "No tickets found for that search" })
                );
          }
        // }

        // if (req.query.creator) {
        //   if (req.query.creatorInclusion === "is") {
        //     debugger
        //       Ticket.find({creator: req.query.creator})
        //         .populate("creator", ["starred", "firstName", "lastName", "_id"])
        //         .populate("owner", ["starred", "firstName", "lastName", "_id"])
        //         .populate("updatedBy", ["firstName", "lastName", "_id"])
        //         .populate("lastUpdateSeenBy", ["firstName", "lastName", "_id"])
        //         .populate("subscribed", ["firstName", "lastName", "_id"])
        //         .populate("updatedBy", ["firstName", "lastName", "_id"])
        //         .then(tickets => {
        //           debugger
        //           res.json(tickets);
        //         })
        //         .catch(err =>
        //           res
        //             .status(404)
        //             .json({ noticketsfound: "No tickets found for that search" })
        //         );
        //   } else {
        //       Ticket.find({creator: { $nin: req.query.creator } })
        //         .populate("creator", ["starred", "firstName", "lastName", "_id"])
        //         .populate("owner", ["starred", "firstName", "lastName", "_id"])
        //         .populate("updatedBy", ["firstName", "lastName", "_id"])
        //         .populate("lastUpdateSeenBy", ["firstName", "lastName", "_id"])
        //         .populate("subscribed", ["firstName", "lastName", "_id"])
        //         .populate("updatedBy", ["firstName", "lastName", "_id"])
        //         .then(tickets => {
        //           res.json(tickets);
        //         })
        //         .catch(err =>
        //           res
        //             .status(404)
        //             .json({ noticketsfound: "No tickets found for that search" })
        //         );
        //   }
        // }

        // if (req.query.subscribed) {
        //   debugger
        //   if (req.query.subscribedInclusion === "all") {
        //       Ticket.find({subscribed: { $all: req.query.subscribed } })
        //         .populate("creator", ["starred", "firstName", "lastName", "_id"])
        //         .populate("owner", ["starred", "firstName", "lastName", "_id"])
        //         .populate("updatedBy", ["firstName", "lastName", "_id"])
        //         .populate("lastUpdateSeenBy", ["firstName", "lastName", "_id"])
        //         .populate("subscribed", ["firstName", "lastName", "_id"])
        //         .populate("updatedBy", ["firstName", "lastName", "_id"])
        //         .then(tickets => {
        //           debugger
        //           res.json(tickets);
        //         })
        //         .catch(err =>
        //           res
        //             .status(404)
        //             .json({ noticketsfound: "No tickets found for that search" })
        //         );
        //   } else if (req.query.subscribedInclusion === "any") {
        //     debugger
        //       Ticket.find({subscribed: { $in: req.query.subscribed } })
        //         .populate("creator", ["starred", "firstName", "lastName", "_id"])
        //         .populate("owner", ["starred", "firstName", "lastName", "_id"])
        //         .populate("updatedBy", ["firstName", "lastName", "_id"])
        //         .populate("lastUpdateSeenBy", ["firstName", "lastName", "_id"])
        //         .populate("subscribed", ["firstName", "lastName", "_id"])
        //         .populate("updatedBy", ["firstName", "lastName", "_id"])
        //         .then(tickets => {
        //           debugger
        //           res.json(tickets);
        //         })
        //         .catch(err =>
        //           res
        //             .status(404)
        //             .json({ noticketsfound: "No tickets found for that search" })
        //         );
        //   } else {
        //     debugger
        //       Ticket.find({subscribed: { $all: req.query.subscribed } })
        //         .populate("creator", ["starred", "firstName", "lastName", "_id"])
        //         .populate("owner", ["starred", "firstName", "lastName", "_id"])
        //         .populate("updatedBy", ["firstName", "lastName", "_id"])
        //         .populate("lastUpdateSeenBy", ["firstName", "lastName", "_id"])
        //         .populate("subscribed", ["firstName", "lastName", "_id"])
        //         .populate("updatedBy", ["firstName", "lastName", "_id"])
        //         .then(tickets => {
        //           debugger
        //           res.json(tickets);
        //         })
        //         .catch(err =>
        //           res
        //             .status(404)
        //             .json({ noticketsfound: "No tickets found for that search" })
        //         );
        //   }
        // }

    }) 


router.post("/",
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {
        
        const { errors, isValid } = validateTicketInput(req.body);
    
        if (!isValid) {
            return res.status(422).json(errors);
        }
        const newTicket = new Ticket({
            title: req.body.title,
            owner: req.body.owner,
            body: req.body.body,
            status: req.body.status,
            priority: req.body.priority,
            tags: req.body.tags,
            subscribed: req.body.subscribed,
            dependsOn: req.body.dependsOn,
            blocks: req.body.blocks,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            creator: req.body.creator
        });

        newTicket.save()
        .then(ticket => {
            Ticket.findById(ticket._id)
            .populate('creator', ['starred', 'firstName', 'lastName', '_id'])
            .populate('owner', ['starred', 'firstName', 'lastName', '_id'])
            .populate('updatedBy', ['firstName', 'lastName', '_id'])
            .populate('lastUpdateSeenBy', ['firstName', 'lastName', '_id'])
            .populate('subscribed', ['firstName', 'lastName', '_id'])  
            .populate('updatedBy', ['firstName', 'lastName', '_id'])          
            .then(
                populated => res.json(populated)
            )
        });
    }
);

router.get("/:ticketId", (req, res) => {
    Ticket
    .findById(req.params.ticketId)
    .populate('creator', ['firstName', 'lastName', '_id'])
    .populate('owner', ['firstName', 'lastName', '_id'])
    .populate('lastUpdateSeenBy', ['firstName', 'lastName', '_id'])
    .populate('subscribed', ['firstName', 'lastName', '_id'])
    .populate('updatedBy', ['firstName', 'lastName', '_id'])
    .then(ticket => {
        return res.json(ticket)
    })
    .catch(err => err.status(400).json(err))
})

router.patch("/:ticketId", (req, res) => {

      const { errors, isValid } = validateTicketInput(req.body);

      if (!isValid) {
        return res.status(422).json(errors);
      }

    Ticket.findByIdAndUpdate(
        req.params.ticketId,
        req.body,
        { new: true }
    )
    .populate('creator', ['firstName', 'lastName', '_id'])
    .populate('owner', ['firstName', 'lastName', '_id'])
    .populate('lastUpdateSeenBy', ['firstName', 'lastName', '_id'])
    .populate('subscribed', ['firstName', 'lastName', '_id'])
    .populate('updatedBy', ['firstName', 'lastName', '_id'])
    .then(ticket => res.json(ticket))
    .catch(err => {
        return res.status(422).json({ badrequest: err })
    })
})

router.get("/:folder/:userId", (req, res) => {
    if (req.params.folder === 'subscribed') {
        Ticket.find({ [req.params.folder]: { $in: [req.params.userId] } })
        .populate('creator', ['firstName', 'lastName', '_id'])
        .populate('owner', ['firstName', 'lastName', '_id'])
        .populate('lastUpdateSeenBy', ['firstName', 'lastName', '_id'])
        .populate('subscribed', ['firstName', 'lastName', '_id'])
        .populate('updatedBy', ['firstName', 'lastName', '_id'])
        .then(tickets => {
            res.json(tickets)
        })
        .catch(err => res
            .status(404)
            .json({ noticketsfound: "No tickets found from that user" })
        );
    } else if (req.params.folder === "starred") {
        let starredIds 
        User.findById(req.params.userId)
        .exec((err, user) => {
            starredIds = Array.from(user.starred)
            Ticket.find({ _id: { $in: starredIds } })
            .populate("creator", ["firstName", "lastName", "_id"])
            .populate("owner", ["firstName", "lastName", "_id"])
            .populate("lastUpdateSeenBy", ["firstName", "lastName", "_id"])
            .populate("subscribed", ["firstName", "lastName", "_id"])
            .populate("updatedBy", ["firstName", "lastName", "_id"])
            .then(tickets => {
                res.json(tickets)
            })
            .catch(err =>
                res
                .status(404)
                .json({ noticketsfound: "No tickets found from that user" })
            );
        })
    } else {
        Ticket.find({ [req.params.folder]: req.params.userId })
        .populate("creator", ["firstName", "lastName", "_id"])
        .populate("owner", ["firstName", "lastName", "_id"])
        .populate("lastUpdateSeenBy", ["firstName", "lastName", "_id"])
        .populate("subscribed", ["firstName", "lastName", "_id"])
        .populate("updatedBy", ["firstName", "lastName", "_id"])
        .then(tickets => {
            res.json(tickets);
        })
        .catch(err =>
            res
            .status(404)
            .json({ noticketsfound: "No tickets found from that user" })
        );
    }
    
});

module.exports = router;
