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
            priority: '', 
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

    render(){

        
        if (this.props.ticketId !== 'new') {
            this.view();
            if (!this.props.ticket) return null
        }
        
        return(
            <div className="form-container">
                <form className="form">
                    <input 
                        placeholder="title" 
                        type="text" 
                        value={this.state.title}
                    />

                    <input 
                        placeholder="owner" 
                        type="text" 
                        value={this.state.owner}
                    />

                    <select>
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


                </form>
            </div>
        )
        
        
    }

}

export default TicketForm;