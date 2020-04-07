import React from 'react';
import { withRouter } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from 'react-icons/fa';
import TicketActivityContainer from "./ticket_activity_container";
import CommentFormContainer from "../comments/comment_form_container";
import LastUpdateSeenBy from './last_update_seen_by';
import StatusSelect from './status_select';
import PrioritySelect from './priority_select';
import Star from './star';
import '../app.css';
import './ticket_form.css';

class TicketForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updatedAt: [],
            tags: [],
            subscribed: [this.props.currentUser._id],
            owner: this.props.currentUser._id,
            title: '',
            body: '',
            lastUpdateSeenBy: [],
            updatedBy: [],
            status: 'No Progress',
            priority: 'Low', 
            dependsOn: [],
            blocks: [],
            startDate: '',
            endDate: '',
            creator: this.props.currentUser._id,
            clipboardText: window.location.href,
            copied: false

        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentWillUnmount() {
        this.props.clearTicketErrors();
    };

    componentDidMount() {
        // in case of page refresh, fetch the current user to overwrite 
        // stale preloaded state from login and get updated starred list
        this.props.getOneUser(this.props.currentUser._id)
        if (this.props.ticketId !== 'new') {
            this.props.getTicket(this.props.ticketId)
            .then(ticket => {
                
                this.props.ticket.startDate = (
                    this.props.ticket.startDate ? 
                    this.props.ticket.startDate.slice(0,10) : ''
                );

                this.props.ticket.endDate = (
                    this.props.ticket.endDate ?
                    this.props.ticket.endDate.slice(0,10) : ''
                );

                this.setState(this.props.ticket)
            })
            .then(() => this.view());
        };
    };

    componentDidUpdate(prevProps) {
        if (this.props.ticketId !== prevProps.ticketId
            && this.props.ticketId === 'new') {
            this.setState({
                updatedAt: [],
                tags: [],
                subscribed: [this.props.currentUser._id],
                owner: this.props.currentUser._id,
                title: '',
                body: '',
                lastUpdateSeenBy: [],
                updatedBy: [],
                status: 'No Progress',
                priority: 'Low',
                dependsOn: [],
                blocks: [],
                startDate: '',
                endDate: '',
                creator: this.props.currentUser._id
            });
        };
    };

    view() {
        let viewerIds = this.props.ticket.lastUpdateSeenBy.map(viewer => viewer._id);
        if (!viewerIds.includes(this.props.currentUser._id)) {
            this.props.ticket.lastUpdateSeenBy.push(this.props.currentUser._id);
            this.props.updateTicket(this.props.ticket);
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        if (e.target.classList.contains('not-edited')) return null;
        this.state.updatedAt.unshift(Date.now());
        this.state.updatedBy.unshift(this.props.currentUser._id);
        this.setState({lastUpdateSeenBy: []});
        
        this.props.clearTicketErrors();
        
        if (this.props.ticketId !== "new") {
            this.props.updateTicket(this.state);
        } else {
            this.props.createTicket(this.state)
            .then(res => {
                if (res.errors) return null;
                this.setState(res.ticket);
                this.props.history.push(`${res.ticket._id}`);
            })
            .catch(err => console.log(err))
        }
        let edits = document.getElementsByClassName('edited')
        
        for (let i = 0; i < edits.length; i++) {
            edits[i].classList.add('not-edited')
        }
        for (let i = 0; i <= edits.length; i++) {
            edits[0].classList.remove('edited')
        }
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
            e.currentTarget.classList.add('edited');
            let button = document.getElementById('ticket-submit-button');
            button.classList.remove('not-edited')
            button.classList.add('edited')
        };
    }

    render(){
        if (this.props.ticketId !== 'new') {
            if (!this.props.ticket) return null;
        }

        const { status, priority } = this.state;
        const { currentUser, updateUser, ticket } = this.props;

        this.update = this.update.bind(this);
        
        let type = this.props.ticketId === 'new' ? 'new' : 'show';
        
        return (
        <div className="outer-container">
            <div className="form-and-activity-container">
              <form className="form">
                <div className="form-header">
                    <span className="ticket-number">T{this.props.match.params.ticketId} - </span>
                    <CopyToClipboard text={this.state.clipboardText} onCopy={() => this.setState({ copied: true })}>
                            <span className="copy">Copy Link <FaCopy /></span>
                    </CopyToClipboard>
                    {this.state.copied ? <span className="copied fade-out"> Copied to Clipboard!</span> : null}
                </div>
              <div className="ticket-errors">
                <p>{this.props.errors.title}</p>
              </div>
                <div className="title-star">
                    <input
                        className={`${type} title`}
                        type="text"
                        placeholder="title"
                        value={this.state.title}
                        onChange={this.update("title")}
                    />
                    <Star 
                        currentUser={currentUser}
                        updateUser={updateUser}
                        ticket={ticket}
                    />
                </div>
                <div className="selectors">
                    <label>Status
                        <StatusSelect 
                            type={type} 
                            status={status} 
                            update={this.update} 
                        />
                    </label>
                    <label>Owner
                        <input
                            className={`${type} owner`}
                            type="text"
                            placeholder="owner"
                            value={this.state.owner}
                            onChange={this.update("owner")}
                        />
                    </label>
                    <label>Priority
                        <PrioritySelect 
                            type={type}
                            priority={priority}
                            update={this.update} 
                        />
                    </label>
                    <button
                        onClick={this.handleSubmit}
                        className="button1 not-edited"
                        id="ticket-submit-button"
                    >
                        {this.props.ticketId === "new" ? "Create" : "Save"}
                    </button>
                </div>
                <div className="ticket-errors">
                    <p>{this.props.errors.date}</p>
                </div>
                <div className="schedule">
                    Start<br/>Date
                    <input
                        className={type}
                        type="date"
                        value={this.state.startDate}
                        onChange={this.update("startDate")}
                    />
                    End<br/>Date
                    <input
                        className={type}
                        type="date"
                        value={this.state.endDate}
                        onChange={this.update("endDate")}
                    />
                </div>
                <textarea
                  className={`${type} margin`}
                  cols="30"
                  rows="10"
                  value={this.state.body}
                  placeholder="body"
                  onChange={this.update("body")}
                ></textarea>
                <label className="subs-title">
                    subscribed
                </label> 
                <textarea
                    className={`${type} margin subscribed`}
                    value={this.state.subscribed}
                    placeholder="subscribed"
                    onChange={this.update("subscribed")}
                ></textarea>
                <input
                  className={`${type} margin`}
                  type="text"
                  placeholder="depends on"
                  onChange={this.update("dependsOn")}
                />
                <input
                  className={`${type} margin`}
                  type="text"
                  value={this.state.blocks}
                  placeholder="blocks"
                  onChange={this.update("blocks")}
                />
              </form>
                {this.props.ticketId !== "new" ? (
                <ul className="activity-container">
                    <div className="activity-header">
                        <h1 className="title">Comments and activity</h1>
                        <LastUpdateSeenBy ticket={this.props.ticket}/>
                    </div>
                    <CommentFormContainer />
                    <TicketActivityContainer currentUser={this.props.currentUser}/>
                </ul>
                ) : null}
            </div>
        </div>
        );         
    }
}

export default withRouter(TicketForm);