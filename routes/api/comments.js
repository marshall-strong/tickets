const passport = require("passport")
const express = require("express")
const router = express.Router()
const validateCommentInput = require("../../validation/comment")
const Comment = require("../../models/Comment")


router.get("/comments", (req, res) => {
    Comment 
        .find()
        .sort({ createdDate: -1 })
        .then(tickets => res.json(tickets))
})

router.post("/comments",  
    passport.authenticate("jwt", {session: false}),
    (req, res) => {
        const { errors, isValid } = validateCommentInput(req.body)

        if (!isValid) {
            return res.status(400).json(errors)
        }

            const newComment = newComment ({
                body: req.body.body
            })

            newComment.save().then(comment => res.json(comment))    
        
})

router.get("/tickets/:ticket_id/comments", (req, res) => {
    Comment
        .find({ ticket: req.params.ticket_id})
        .sort({ createdDate: -1 })
        .then(comments => res.send(comments))
        .catch(err => 
            res.status(404).json({ nocommentsfound: "No comments found for that ticket" }))
})

router.get("/comments/:id", (req, res) => {
    Comment
        .findById(req.params.id) 
        .then(comment => res.send(comment))
        .catch(err => 
            res.status(404).json({ nocommentfound: "No comments found with that Id" }))
})

router.patch("/comments/:id",
        passport.authenticate('jwt', { session: false }),
        (req, res) => {
        Comment.findById(req.params.id)
            const { errors, isValid } = validateCommentInput(req.body)
        
        if (!isValid) {
            return res.status(400).json(errors)
        }

        const newComment = new Comment ({
            body: req.body.body
        })
        
        newComment.save().then(comment => res.send(comment))

    })

router.delete("/:id", 
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
    Comment
        .findByIdAndRemove(req.params.id) 
        .catch( err => res.status(400).json(errors))
  })
 