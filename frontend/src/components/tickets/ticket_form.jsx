import React from 'react';
import TicketActivityContainer from "./ticket_activity_container"
import CommentFormContainer from "../comments/comment_form_container"
import {withRouter} from "react-router-dom"

import '../app.css'
import './ticket_form.css'
class TicketForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            updatedAt: [],
            tags: [],
            subscribers: [this.props.currentUser.id],
            organization: this.props.currentOrg,
            owner: this.props.currentUser.firstName + ' ' + this.props.currentUser.lastName,
            title: '',
            body: '',
            lastUpdateSeenBy: [],
            updatedBy: [],
            status: 'No Progress',
            priority: 'Low', 
            dependsOn: [],
            blocks: [],
            startDate: undefined,
            endDate: undefined,
            creator: this.props.currentUser.id
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        //debugger
        this.props.getOrgUsers(this.props.currentUser.organization)
        .then(response => {
            // debugger
            this.setState({ users: response.users })
        })

        if (this.props.ticketId !== 'new') {
            this.props.getTicket(this.props.ticketId)
            .then(ticket => {
                this.setState(this.props.ticket)
            })
            .then(() => this.view());
        }
    }

    view() {
        let viewerIds = this.props.ticket.lastUpdateSeenBy.map(viewer => viewer._id)
        if (!viewerIds.includes(this.props.currentUser.id)) {
            this.props.ticket.lastUpdateSeenBy.push(this.props.currentUser.id)
            this.props.updateTicket(this.props.ticket)
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if (e.target.classList.contains('not-edited')) return null
        this.state.updatedAt.unshift(Date.now());
        this.state.updatedBy.unshift(this.props.currentUser.id)
        this.state.lastUpdateSeenBy = []

        let edits = document.getElementsByClassName('edited')
        for (let i = 0; i < edits.length; i++) {
            edits[i].classList.remove('edited')
            edits[i].classList.add('not-edited')
        }

        if (this.props.ticketId !== "new") {
            this.props.updateTicket(this.state)
        } else {
            this.props.createTicket(this.state)
            .then(res => {
                if (res.errors) return null 
                this.props.history.push(`${res.ticket._id}`)
            })
            .catch(err => console.log(err))
        }
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
            this.edited = 'edited';
            e.currentTarget.classList.add(this.edited);
            let button = document.getElementById('ticket-submit-button');
            button.classList.remove('not-edited')
            button.classList.add('edited')
        };
    }

    render(){
        
        if (this.props.ticketId !== 'new') {
            if (!this.props.ticket) return null;
        }

        this.edited = 'not-edited';

        let type = this.props.ticketId === 'new' ? 'new' : 'show';

        // const getUsersInCurrUserOrg = (this.props.currentUser.organization) => {};

        // let usersArr = []
        // for (let i = 0; i < this.props.ownerUsers.length; i++) {
        //     user = this.props.ownerUsers[i];
        // }

        // const ownerSelect = (
        //     <select
        //         className={type}
        //         defaultValue={this.state.owner}
        //         onChange={this.update('owner')}
        //     >
        //         <option
        //             value="Low"
        //         >
        //             Low
        //         </option>

        //         <option
        //             value="Medium"
        //         >
        //             Medium
        //         </option>

        //         <option
        //             value="High"
        //         >
        //             High
        //         </option>

        //         <option
        //             value="CATastrophic"
        //         >
        //             CATastrophic
        //         </option>

        //     </select>
        // )

        const statusSelect = (
            <select 
                className={type}
                defaultValue={this.state.status}
                onChange={this.update('status')}
            >
                <option value="No Progress">
                    No Progress
                </option>

                <option value="Planned">
                    Planned
                </option>

                <option value="Blocked">
                    Blocked
                </option>

                <option value="In Progress">
                    In Progress
                </option>

                <option value="Closed">
                    Closed
                </option>
            </select>

        )

        const prioritySelect = (
            <select 
                className={type}
                defaultValue={this.state.priority} 
                onChange={this.update('priority')}
            >
                <option value="Low">
                    Low
                </option>

                <option value="Medium">
                    Medium
                </option>

                <option value="High">
                    High
                </option>

                <option value="CATastrophic">
                    CATastrophic
                </option>

            </select>
        )

        return (
          <div>
            <div className="form-container">
              <form className="form">
                <input
                  className={type}
                  type="text"
                  placeholder="title"
                  value={this.state.title}
                  onChange={this.update("title")}
                />

                {/* ownerSelect */}
                <input
                  className={type}
                  type="text"
                  placeholder="owner"
                  value={this.state.owner}
                  onChange={this.update("owner")}
                />

                <textarea
                  className={type}
                  cols="30"
                  rows="10"
                  value={this.state.body}
                  placeholder="body"
                  onChange={this.update("body")}
                ></textarea>

                {statusSelect}

                {prioritySelect}

                <input
                  className={type}
                  type="text"
                  placeholder="depends on"
                  onChange={this.update("dependsOn")}
                />

                <input
                  className={type}
                  type="text"
                  value={this.state.blocks}
                  placeholder="blocks"
                  onChange={this.update("blocks")}
                />

                <input
                  className={type}
                  type="date"
                  value={this.state.startDate}
                  onChange={this.update("startDate")}
                />

                <input
                  className={type}
                  type="date"
                  value={this.state.endDate}
                  onChange={this.update("endDate")}
                />

                <button 
                    onClick={this.handleSubmit} 
                    className="button1"
                    id="ticket-submit-button"
                >

                {this.props.ticketId === "new" ? "create" : "save"}
                </button>
              </form>
            </div>
            {this.props.ticketId !== "new" ? (
            <div>
                <TicketActivityContainer />
                <CommentFormContainer />
            </div>
            ) : null}
          </div>
        );        
        
    }

}

export default withRouter(TicketForm);
