import React from 'react';

class TagsFilter extends React.Component {
    constructor(props) {
        super(props);
        if (!this.props.params.get('tagsInclusion')) {
            this.props.params.set('tagsInclusion', 'all');
        };
        this.state = {
            inclusion: this.props.params.get('tagsInclusion'),
            input: '',
            added: {},
        };
        this.props.params.getAll('tags').forEach(val =>
            this.state.added[val] = val
        );
    };

    updateInput(e) {
        this.setState({ input: e.target.value });
    };

    updateInclusion(e) {
        this.props.params.set('tagsInclusion', e.target.value);
        this.setState({ inclusion: e.target.value });
    };

    add(e) {
        // eslint-disable-next-line
        this.state.added[this.state.input] = this.state.input;
        this.updateParams();
        this.setState({ added: this.state.added, input: '' });
    };

    remove(tag) {
        // eslint-disable-next-line
        delete this.state.added[tag];
        this.updateParams();
        this.setState({ added: this.state.added });
    };

    updateParams() {
        this.props.params.delete('tags');
        Object.values(this.state.added).forEach(val =>
            this.props.params.append('tags', val)
        );
    };

    renderAdded() {
        return Object.values(this.state.added).map(tag =>
            <div key={tag} className="added-item">
                {tag}
                <span className="remove" onClick={() => this.remove(tag)}> x</span>
            </div>
        );
    };

    render() {
        return (
            <div className="filter tags">
                <div className="title">
                    Tags has
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
                    placeholder="tag name"
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

export default TagsFilter;