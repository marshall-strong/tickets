import React from 'react';

class OwnerFilter extends React.Component {
    constructor(props) {
        super(props);
        if (!this.props.params.get('ownerVerb')) this.props.params.set('ownerVerb', 'is');
        this.state = {
            verb: this.props.params.get('ownerVerb'),
            input: '',
            added: {},
        };
        this.props.params.getAll('owner').forEach(val =>
            this.state.added[val] = val
        );
    };

    updateInput(e) {
        this.setState({ input: e.target.value });
    };

    updateVerb(e) {
        this.props.params.set('ownerVerb', e.target.value);
        this.setState({ verb: e.target.value });
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
        this.props.params.delete('owner');
        Object.values(this.state.added).forEach(val =>
            this.props.params.append('owner', val)
        );
    };

    renderAdded() {
        return Object.values(this.state.added).map(id =>
            <div className="added-item">
                {id} 
            <span className="remove" onClick={() => this.remove(id)}> x</span>
            </div>
        );
    };

    render() {
        return(
            <div className="filter owner">
                <div className="title">
                    Owner
                </div>
                <div className="option">
                    <select
                        defaultValue={this.state.verb} 
                        className="verb-select"
                        onChange={(e) => this.updateVerb(e)}
                    >
                        <option 
                            value="is"
                        >
                            is
                        </option>
                        <option 
                            value="not"
                        >
                            not
                        </option>
                    </select>
                </div>
                <div className="title">
                    in
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
                    className="button1 add"
                    onClick={(e) => this.add(e)}
                >Add</button>
            </div>
        );
    };
};

export default OwnerFilter;