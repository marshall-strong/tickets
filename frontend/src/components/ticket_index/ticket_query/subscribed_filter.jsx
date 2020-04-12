import React from 'react';

class SubscribedFilter extends React.Component {
    constructor(props) {
        super(props);
        if (!this.props.params.get('subscribedInclusion')) {
            this.props.params.set('subscribedInclusion', 'all');
        };
        this.state = {
            inclusion: this.props.params.get('subscribedInclusion'),
            input: '',
            added: {},
        };
        this.props.params.getAll('subscribed').forEach(val =>
            this.state.added[val] = val
        );
    };

    updateInput(e) {
        this.setState({ input: e.target.value });
    };

    updateInclusion(e) {
        this.props.params.set('subscribedInclusion', e.target.value);
        this.setState({ inclusion: e.target.value });
    };

    add(e) {
        // eslint-disable-next-line
        this.state.added[this.state.input] = this.state.input;
        this.updateParams();
        this.setState({ added: this.state.added, input: '' });
    };

    remove(id) {
        // eslint-disable-next-line
        delete this.state.added[id];
        this.updateParams();
        this.setState({ added: this.state.added });
    };

    updateParams() {
        this.props.params.delete('subscribed');
        Object.values(this.state.added).forEach(val =>
            this.props.params.append('subscribed', val)
        );
    };

    renderAdded() {
        return Object.values(this.state.added).map(id =>
            <div key={id} className="added-item">
                {id}
                <span className="remove" onClick={() => this.remove(id)}> x</span>
            </div>
        );
    };

    render() {
        return (
            <div className="filter subscribed">
                <div className="title">
                    Subscribed has
                </div>
                <div className="option">
                    <select
                        defaultValue={this.state.inclusion}
                        className="inclusion-select"
                        onChange={(e) => this.updateInclusion(e)}
                    >
                        <option
                            value="all"
                        >
                            all
                        </option>
                        <option
                            value="any"
                        >
                            any
                        </option>
                        <option
                            value="none"
                        >
                            none
                        </option>
                    </select>
                </div>
                <div className="title">
                    of
                </div>
                <div className="added">
                    {this.renderAdded()}
                </div>
                <input
                    type="text"
                    placeholder="userId"
                    value={this.state.input}
                    onChange={(e) => this.updateInput(e)}
                />
                <button
                    className="btn1 add"
                    onClick={(e) => this.add(e)}
                >Add</button>
            </div>
        );
    };
};

export default SubscribedFilter;