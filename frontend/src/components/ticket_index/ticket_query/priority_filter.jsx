import React from 'react';

class PriorityFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.props.params.getAll('priority').forEach(val => 
            this.state[val] = val
        );
    };
        
    update(e) {
        let value = e.target.value;
        if (this.state[value]) {
            delete this.state[value];
        } else {
            this.state[value] = value;
        };
        this.props.params.delete('priority');
        Object.values(this.state).forEach(val => 
            this.props.params.append('priority', val)
        );
        this.setState(this.state);
    };

    render() {
        return(
            <div className="filter">
                <div className="title">
                    Priority
                </div>
                <div className="options">
                    <div className="option">
                        <div className="label">
                            Low
                        </div>
                        <input
                            className="checkbox"
                            type="checkbox"
                            onChange={(e) => this.update(e)}
                            value="low"
                            checked={this.state.low ? true : false}
                        />
                    </div>
                    <div className="option">
                        <div className="label">
                            Med
                        </div>
                        <input
                            className="checkbox"
                            type="checkbox"
                            onChange={(e) => this.update(e)}
                            value="medium"
                            checked={this.state.medium ? true : false}
                        />
                    </div>
                    <div className="option">
                        <div className="label">
                            Hi
                        </div>
                        <input
                            className="checkbox"
                            type="checkbox"
                            onChange={(e) => this.update(e)}
                            value="high"
                            checked={this.state.high ? true : false}
                        />
                    </div>
                    <div className="option">
                        <div className="label">
                            CAT
                        </div>
                        <input
                            className="checkbox"
                            type="checkbox"
                            onChange={(e) => this.update(e)}
                            value="catastrophic"
                            checked={this.state.catastrophic ? true : false}
                        />
                    </div>
                </div>
            </div>
        );
    };
};

export default PriorityFilter;