import React from 'react';
import TagSuggest from '../../autosuggest/tag_suggest'

class TagsFilter extends React.Component {
    constructor(props) {
        super(props);
        if (!this.props.params.get('tagsInclusion')) {
            this.props.params.set('tagsInclusion', 'all');
        };
        this.state = {
            inclusion: this.props.params.get('tagsInclusion'),
            added: {},
        };
        this.props.params.getAll('tags').forEach(id =>
            this.state.added[id] = this.props.tags[id]
        );
        this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
    };

    updateInclusion(e) {
        this.props.params.set('tagsInclusion', e.target.value);
        this.setState({ inclusion: e.target.value });
    };

    add(suggestion) {
        // eslint-disable-next-line
        this.state.added[suggestion._id] = suggestion;
        this.updateParams();
        this.setState({ added: this.state.added });
    };

    remove(id) {
        // eslint-disable-next-line
        delete this.state.added[id];
        this.updateParams();
        this.setState({ added: this.state.added });
    };

    updateParams() {
        this.props.params.delete('tags');
        Object.keys(this.state.added).forEach(id =>
            this.props.params.append('tags', id)
        );
    };

    renderAdded() {
        return Object.values(this.state.added).map(tag =>
            <div key={tag._id} className="added-item">
                {tag.name}
                <span className="remove" onClick={() => this.remove(tag._id)}> X</span>
            </div>
        );
    };

    onSuggestionSelected(e, { suggestion }) {
        this.add(suggestion);
    }

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
                <TagSuggest 
                    onSuggestionSelected={this.onSuggestionSelected}
                />
            </div>
        );
    };
};

export default TagsFilter;