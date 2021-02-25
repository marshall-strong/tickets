import React from "react";
import UserSuggest from "../../autosuggest/user_suggest";

class OwnerFilter extends React.Component {
  constructor(props) {
    super(props);
    if (!this.props.params.get("ownerInclusion")) {
      this.props.params.set("ownerInclusion", "is");
    }
    this.state = {
      inclusion: this.props.params.get("ownerInclusion"),
      added: {},
    };
    this.props.params
      .getAll("owner")
      .forEach((id) => (this.state.added[id] = this.props.users[id]));
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
  }

  updateInclusion(e) {
    this.props.params.set("ownerInclusion", e.target.value);
    this.setState({ inclusion: e.target.value });
  }

  add(suggestion) {
    // eslint-disable-next-line
    this.state.added[suggestion._id] = suggestion;
    this.updateParams();
    this.setState({ added: this.state.added });
  }

  remove(id) {
    // eslint-disable-next-line
    delete this.state.added[id];
    this.updateParams();
    this.setState({ added: this.state.added });
  }

  updateParams() {
    this.props.params.delete("owner");
    Object.keys(this.state.added).forEach((id) =>
      this.props.params.append("owner", id)
    );
  }

  onSuggestionSelected(e, { suggestion }) {
    this.add(suggestion);
  }

  renderAdded() {
    return Object.values(this.state.added).map((user) => (
      <div key={user._id} className="added-item">
        {user.firstName} {user.lastName}
        <span className="remove" onClick={() => this.remove(user._id)}>
          {" "}
          X
        </span>
      </div>
    ));
  }

  render() {
    return (
      <div className="filter owner">
        <div className="title">Owner</div>
        <div className="option">
          <select
            defaultValue={this.state.inclusion}
            className="inclusion-select"
            onChange={(e) => this.updateInclusion(e)}
          >
            <option value="is">is</option>
            <option value="not">not</option>
          </select>
        </div>
        <div className="title">in</div>
        <div className="added">{this.renderAdded()}</div>
        <UserSuggest onSuggestionSelected={this.onSuggestionSelected} />
      </div>
    );
  }
}

export default OwnerFilter;
