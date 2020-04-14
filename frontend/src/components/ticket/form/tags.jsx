import React from 'react';
import TagSuggest from '../../autosuggest/tag_suggest';
import './tags.css';

class Tags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            added: {},
            newTag: '',
            errors: '',
            clicked: false,
        };
        this.props.tags.forEach(tag =>
            // eslint-disable-next-line
            this.state.added[tag._id] = tag
        );
    };

    add(tag) {
        // eslint-disable-next-line
        this.state.added[tag._id] = tag;
        this.setState({ added: this.state.added });
    };

    remove(id) {
        // eslint-disable-next-line
        delete this.state.added[id];
        this.setState({ added: this.state.added });
        this.props.updateFromSuggestion(
            'tags',
            Object.values(this.state.added),
            document.getElementById('tags-container'),
        );
    };

    onSuggestionSelected = (e = null, { suggestion }) => {
        this.add(suggestion)
        this.props.updateFromSuggestion(
            'tags',
            Object.values(this.state.added),
            document.getElementById('tags-container'),
            e,
        );
    };

    renderAdded() {
        return Object.values(this.state.added).map(tag =>
            <div key={tag._id} className="added-item">
                {tag.name}
                <span className="remove" onClick={() => this.remove(tag._id)}> x</span>
            </div>
        );
    };

    handleChange(e) {
        this.setState({ newTag: e.target.value });
    };

    handleClick(e) {
        e.preventDefault();
        const { newTag, clicked } = this.state;
        const { currentUser, createTag } = this.props;
        if (clicked) {
            createTag({ name: newTag, orgHandle: currentUser.orgHandle })
            .then(action => { 
                if (action.tag){
                    this.onSuggestionSelected(null, { suggestion: action.tag });
                    this.setState({ clicked: !clicked, newTag: '', errors: '' });
                } else {
                    this.setState({ errors: Object.values(action.errors), newTag: '' });
                    return null;
                }
            })
        } else {
            this.setState({ clicked: !clicked });
        }
    };

    render() {
        return (
            <div id="tags-container" className="subscribed-container">
                <span className="added">
                    {this.renderAdded()}
                </span>
                <TagSuggest
                    onSuggestionSelected={this.onSuggestionSelected}
                />
                <div className="newTag">
                    {this.state.clicked ?
                    <input 
                        type="text"
                        className="input"
                        placeholder={ this.state.errors ? this.state.errors : "New tag name" }
                        value={this.state.newTag}
                        onChange={(e) => this.handleChange(e)}    
                    /> : null}
                    <button 
                        className="btn1 add"
                        onClick={(e) => this.handleClick(e)}
                    >{this.state.clicked ? 'Create' : 'New Tag'}</button>
                </div>
            </div>
        );
    };
};

export default Tags;