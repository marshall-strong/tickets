import React from "react";
import UserSuggest from "../../autosuggest/user_suggest";
import "./owner.css";

class Owner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: this.props.owner,
      clicked: false,
    };
  }

  onSuggestionSelected(e, { suggestion }) {
    let target = document.getElementById("owner-div");
    this.setState({ owner: suggestion, clicked: false }, () =>
      target.classList.add("edited")
    );
    this.props.updateFromSuggestion("owner", suggestion, target, e);
    const clickedItems = document.getElementsByClassName("true");
    if (clickedItems) {
      while (clickedItems.length) {
        clickedItems[0].classList.add("false");
        clickedItems[0].classList.remove("true");
      }
    }
  }

  handleClick(e) {
    e.stopPropagation();
    let target = e.currentTarget;
    let edited = target.classList.contains("edited");
    if (target.classList.contains("false")) {
      const clickedItems = document.getElementsByClassName("false");
      while (clickedItems.length) {
        clickedItems[0].classList.add("true");
        clickedItems[0].classList.remove("false");
      }
    } else {
      const clickedItems = document.getElementsByClassName("true");
      while (clickedItems.length) {
        clickedItems[0].classList.add("false");
        clickedItems[0].classList.remove("true");
      }
    }
    this.setState({ clicked: !this.state.clicked }, () =>
      setTimeout(() => (edited ? target.classList.add("edited") : null), 100)
    );
  }

  render() {
    const { owner, clicked } = this.state;
    return (
      <div className={`owner false`} onClick={(e) => this.handleClick(e)}>
        <div
          id="owner-div"
          className={`owner-name false`}
          // onClick={(e) => this.handleClick(e)}
        >
          <div className="avitar">
            {owner.firstName.slice(0, 1)}
            {owner.lastName.slice(0, 1)}
          </div>
          {`${owner.firstName} ${owner.lastName}`}
          <div className="false arrow">{"▴"}</div>
        </div>

        <div className="input false" onClick={(e) => e.stopPropagation()}>
          <UserSuggest
            onSuggestionSelected={this.onSuggestionSelected.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default Owner;
