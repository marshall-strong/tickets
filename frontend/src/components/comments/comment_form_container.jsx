import { connect } from 'react-redux'
import { createComment} from '../../actions/comment_actions'
import CommentForm from './comment_form'
import {withRouter} from "react-router-dom"
import { deleteComment } from '../../util/comment_api_util'
import {getTicket} from "../../util/ticket_api_util"

const mSTP = (state, ownProps) => {
    return {
    currentUser: state.entities.users[state.session._id],
    ticketId: ownProps.match.params.ticketId,
    comments: Object.values(state.entities.comments)
    }
}

const mDTP = dispatch => ({
    getTicket: (id) => dispatch(getTicket()),
    createComment: comment => dispatch(createComment(comment)),
})

export default withRouter(connect(mSTP, mDTP)(CommentForm))