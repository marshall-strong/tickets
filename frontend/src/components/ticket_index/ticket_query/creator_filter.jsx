import React from 'react';
import { withRouter } from 'react-router-dom';

class CreatorFilter extends React.Component {
    constructor(props) {
        super(props);
        if (!this.props.params.get('creatorInclusion')) {
            this.props.params.set('creatorInclusion', 'is');
        };
        this.state = {
            inclusion: this.props.params.get('creatorInclusion'),
            input: '',
            added: {},
        };
        this.props.params.getAll('creator').forEach(val =>
            this.state.added[val] = val
        );
    };

    updateInput(e) {
        this.setState({ input: e.target.value });
    };

    updateInclusion(e) {
        this.props.params.set('creatorInclusion', e.target.value);
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
        this.props.params.delete('creator');
        Object.values(this.state.added).forEach(val =>
            this.props.params.append('creator', val)
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
            <div className="filter creator">
                <div className="title">
                    Creator
                </div>
                <div className="option">
                    <select
                        defaultValue={this.state.inclusion}
                        className="inclusion-select"
                        onChange={(e) => this.updateInclusion(e)}
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

export default withRouter(CreatorFilter);