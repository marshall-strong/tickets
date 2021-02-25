import React from "react";
import Slide1 from "./slide_1";
import Slide2 from "./slide_2";
import Slide3 from "./slide_3";
import "./slides.css";
import Slide4 from "./slide_4";
import Slide5 from "./slide_5";
import Slide6 from "./slide_6";
import Slide7 from "./slide_7";
import Slide8 from "./slide_8";
import Slide9 from "./slide_9";
import Slide10 from "./slide_10";
import Slide11 from "./slide_11";
import Slide12 from "./slide_12";
import Slide13 from "./slide_13";
import Slide14 from "./slide_14";
import Slide15 from "./slide_15";
import Slide16 from "./slide_16";
import Slide17 from "./slide_17";
import { connect } from "react-redux";
class Slides extends React.Component {
  constructor(props) {
    super(props);
    this.slides = [
      <Slide1 />,
      <Slide2 />,
      <Slide3 />,
      <Slide4 />,
      <Slide5 />,
      <Slide6 />,
      <Slide7 />,
      <Slide8 />,
      <Slide9 />,
      <Slide10 />,
      <Slide11 />,
      <Slide12 />,
      <Slide13 />,
      <Slide14 />,
      <Slide15 />,
      <Slide16 />,
      <Slide17 />,
    ];
    this.state = {
      slideCount: localStorage.tutorial === "true" ? 0 : this.slides.length + 1,
    };
  }

  handleClick(int) {
    const { slideCount } = this.state;
    const slides = this.slides;
    this.setState({ slideCount: slideCount + int }, () => {
      this.state.slideCount >= slides.length
        ? (localStorage.tutorial = false)
        : (localStorage.tutorial = true);
    });
  }

  render() {
    const slides = this.slides;
    const { slideCount } = this.state;
    // const { loggedIn } = this.props;
    if (slideCount >= slides.length)
      return (
        <div
          className="play-tutorial"
          onClick={(e) => {
            localStorage.tutorial = true;
            this.handleClick(-1 * slideCount);
          }}
        >
          ?
        </div>
      );

    if (localStorage.tutorial === "true")
      return (
        <div className="slides-and-modal-container">
          <div
            className="slides-modal"
            onClick={(e) => this.handleClick(slides.length + 1)}
          ></div>
          <div className="slide-and-button">
            <div className="slide-header">
              <div className="slide-title">Welcome To Tickets</div>
              <div
                className="close-tutorial"
                onClick={(e) => this.handleClick(slides.length + 1)}
              >
                Close
              </div>
            </div>
            <div className="slide-buttons-and-content">
              {slides[slideCount]}
              <div className="slide-buttons">
                {slideCount > 0 ? (
                  <button
                    className="btn1"
                    onClick={(e) => this.handleClick(-1)}
                  >
                    BACK
                  </button>
                ) : (
                  <div></div>
                )}
                <button className="btn1" onClick={(e) => this.handleClick(1)}>
                  {!slideCount ? "GET STARTED" : "CONTINUE"}
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    return null;
  }
}

const msp = (state) => ({
  loggedIn: state.session.isAuthenticated,
});

export default connect(msp, null)(Slides);
