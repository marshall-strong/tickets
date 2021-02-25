import React from "react";
import Autosuggest from "react-autosuggest";
import { connect } from "react-redux";
import "./autosuggest.css";
import { getOrgTags } from "../../util/tag_api_util";

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getSuggestions(value, tags) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === "") {
    return [];
  }

  const regex = new RegExp("\\b" + escapedValue, "i");

  return tags.filter((tag) => regex.test(getSuggestionValue(tag)));
}

function getSuggestionValue(suggestion) {
  return `${suggestion.name}`;
}

function renderSuggestion(suggestion, { query }) {
  const suggestionText = `${suggestion.name}`;
  return (
    <span className={suggestion._id}>
      <span className="name">
        <span className={"suggestion-text"} key={suggestionText}>
          {suggestionText}
        </span>
      </span>
    </span>
  );
}

class TagSuggest extends React.Component {
  constructor(props) {
    super(props);
    const { value } = this.props;
    this.state = {
      value: value ? value.name : "",
      suggestions: [],
      tags: this.props.tags,
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.props.getSuggestions
        ? this.props.getSuggestions(value, this.state.tags)
        : getSuggestions(value, this.state.tags),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({ suggestions: [], value: "" });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: this.props.placeholder || "Type a tag name",
      value,
      onChange: this.onChange,
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionSelected={this.props.onSuggestionSelected}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

const msp = (state) => ({
  tags: Object.values(state.entities.tags),
});

export default connect(msp, null)(TagSuggest);
