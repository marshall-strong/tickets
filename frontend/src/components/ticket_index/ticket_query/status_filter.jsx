import React from 'react';

class StatusFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.props.params.getAll('status').forEach(val =>
            this.state[val] = val
        );
    };

    update(e) {
        let value = e.target.value;
        if (this.state[value]) {
            // eslint-disable-next-line
            delete this.state[value];
        } else {
            // eslint-disable-next-line
            this.state[value] = value;
        };
        this.props.params.delete('status');
        Object.values(this.state).forEach(val =>
            this.props.params.append('status', val)
        );
        this.setState(this.state);
    };

    render() {
        return (
            <div className="filter">
                <div className="title">
                    Status
                </div>
                <div className="options">
                    <div className="option">
                        <div className="label">
                            No Progress
                        </div>
                        <input
                            className="checkbox"
                            type="checkbox"
                            onChange={(e) => this.update(e)}
                            value="no progress"
                            checked={this.state['no progress'] ? true : false}
                        />
                    </div>
                    <div className="option">
                        <div className="label">
                            Planned
                        </div>
                        <input
                            className="checkbox"
                            type="checkbox"
                            onChange={(e) => this.update(e)}
                            value="planned"
                            checked={this.state.planned ? true : false}
                        />
                    </div>
                    <div className="option">
                        <div className="label">
                            In Progress
                        </div>
                        <input
                            className="checkbox"
                            type="checkbox"
                            onChange={(e) => this.update(e)}
                            value="in progress"
                            checked={this.state['in progress'] ? true : false}
                        />
                    </div>
                    <div className="option">
                        <div className="label">
                            Blocked
                        </div>
                        <input
                            className="checkbox"
                            type="checkbox"
                            onChange={(e) => this.update(e)}
                            value="blocked"
                            checked={this.state.blocked ? true : false}
                        />
                    </div>
                    <div className="option">
                        <div className="label">
                            Closed
                        </div>
                        <input
                            className="checkbox"
                            type="checkbox"
                            onChange={(e) => this.update(e)}
                            value="closed"
                            checked={this.state.closed ? true : false}
                        />
                    </div>
                </div>
            </div>
        );
    };
};

export default StatusFilter;