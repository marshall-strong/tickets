import { connect } from 'react-redux'
import { createComment } from '../../actions/comment_actions'
import CommentForm from './comment_form'
import {withRouter} from "react-router-dom"

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.user],
    ticket: ownProps.match.params.ticketId
})

const mDTP = dispatch => ({
    createComment: comment => dispatch(createComment(comment))
})

export default withRouter(connect(mSTP, mDTP)(CommentForm))