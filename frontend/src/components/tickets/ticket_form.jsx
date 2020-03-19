import React from 'react';

class TicketForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            updatedAt: Date.now,
            tags: [],
            subscribers: [],
            owner: '',
            title: '',
            body: '',
            lastUpdateSeenBy: [],
            updatedBy: [],
            status: 'No Progress',
            priority: 'Low', 
            dependsOn: [],
            blocks: [],
            startDate: undefined,
            endDate: undefined
        }
    }

    componentDidMount() {
        if (this.props.ticketId !== 'new') {
            this.props.getTicket(this.props.ticketId)
            .then((ticket) => {
                this.setState({

                    updatedAt: ticket.updatedAt,
                    tags: ticket.tags,
                    subscribers: ticket.subscribers,
                    owner: ticket.owner,
                    title: ticket.title,
                    body: ticket.body,
                    lastUpdateSeenBy: ticket.lastUpdateSeenBy,
                    updatedBy: ticket.updatedBy,
                    status: ticket.status,
                    priority: ticket.priority,
                    dependsOn: ticket.dependsOn,
                    blocks: ticket.blocks,
                    startDate: ticket.startDate,
                    endDate: ticket.endDate,
                
                })
            })
        }
    }

    view() {
        if (!this.state.lastUpdateSeenBy.includes(this.props.currentUser.id)) {
            this.state.lastUpdateSeenBy.push(this.props.currentUser.id)
            this.props.updateTicket(this.state)
        }
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render(){

        
        if (this.props.ticketId !== 'new') {
            this.view();
            if (!this.props.ticket) return null
        }

        const statusSelect = (
            <select onChange={this.update('status')}>
                <option 
                    selected={this.state.status === "No Progress"} 
                    value="No Progress"
                >
                    No Progress
                </option>

                <option 
                    selected={this.state.status === "Planned"} 
                    value="Planned"
                >
                    Planned
                </option>

                <option 
                    selected={this.state.status === "Blocked"} 
                    value="Blocked"
                >
                    Blocked
                </option>

                <option 
                    selected={this.state.status === "In Progress"} 
                    value="In Progress"
                >
                    In Progress
                </option>

                <option 
                    selected={this.state.status === "Closed"} 
                    value="Closed"
                >
                    Closed
                </option>
            </select>

        )

        const prioritySelect = (
            <select onChange={this.update('priority')}>
                <option 
                    selected={this.state.priority === "Low"}
                    value="Low"
                >
                    Low
                </option>

                <option 
                    selected={this.state.priority === "Medium"}
                    value="Medium"
                >
                    Medium
                </option>

                <option 
                    selected={this.state.priority === "High"}
                    value="High"
                >
                    High
                </option>

                <option 
                    selected={this.state.priority === "CATastrophic"}
                    value="CATastrophic"
                >
                    CATastrophic
                </option>

            </select>
        )

        return(
            <div className="form-container">
                <form className="form">
                    <input 
                        type="text" 
                        placeholder="title" 
                        value={this.state.title}
                        onChange={this.update('title')}
                    />

                    <input 
                        type="text" 
                        placeholder="owner" 
                        value={this.state.owner}
                        onChange={this.update('owner')}
                    />

                    <textarea 
                        cols="30" rows="10"
                        value={this.state.body}
                        placeholder="body"
                        onChange={this.update('body')}
                    >

                    </textarea>

                    {statusSelect}

                    {prioritySelect}

                    <input 
                        type="text"
                        placeholder="depends on" 
                        onChange={this.update('dependsOn')}
                    />

                    <input 
                        type="text"
                        value={this.state.blocks}
                        placeholder="blocks" 
                        onChange={this.update('blocks')}
                    />

                    
                    <input 
                        type="date"
                        value={this.state.startDate}
                        onChange={this.update('startDate')}
                    />

                    <input 
                        type="date"
                        value={this.state.endDate}
                        onChange={this.update('endDate')}
                    />

                    
                </form>
            </div>
        )
        
        
    }

}

export default TicketForm;