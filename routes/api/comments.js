const passport = require("passport")
const express = require("express")
const router = express.Router()
const validateCommentInput = require("../../validation/comment")
const Comment = require("../../models/Comment")


router.get("/", (req, res) => {
    Comment 
        .find()
        .sort({ createdAt: -1 })
        .then(tickets => res.json(tickets))
})

router.post("/",  
    passport.authenticate("jwt", {session: false}),
    (req, res) => {
        const { errors, isValid } = validateCommentInput(req.body)

        if (!isValid) {
            return res.status(400).json(errors)
        }

            const newComment = new Comment ({
                body: req.body.body
            })

            newComment.save().then(comment => res.json(comment))    
        
})

router.get("/tickets/:ticket_id", (req, res) => {
    Comment
        .find({ ticket: req.params.ticket_id})
        .sort({ createdAt: -1 })
        .then(comments => res.send(comments))
        .catch(err => 
            res.status(404).json({ nocommentsfound: "No comments found for that ticket" }))
})



router.patch("/:id",
        passport.authenticate('jwt', { session: false }),
        (req, res) => {
        Comment
            .findById(req.params.id)
            .then(comment => {
                if (comment.user.equals(req.user.id)) {
                    comment.update(req.body.body, req.body.updateAt)
                        Comment
                            .find()
                            .sort({updateAt: -1})
                            .then(comments => res.json(comments))

                } else {
                    res
                      .status(403)
                      .json({
                        permissionconflict:
                          "You do not have permission to delete"
                      });
                }
            })
    })

router.delete("/:id", 
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
    Comment
        .findById(req.params.id) 
        .then(comment => {
            if (comment.user.equals(req.user.id)) {
                comment.remove()
                    Comment
                        .find()
                        .sort({createdDate: -1})
                        .then(comments => res.json(comments))
                        .catch(err => 
                            res
                                .status(404)
                                .json({ nocommentsfound: "No Comments found"}))
            } else {
                res
                .status(403)
                .json({permissionconflict: "You do not have permission to delete"})
            }
        })  
    })
 