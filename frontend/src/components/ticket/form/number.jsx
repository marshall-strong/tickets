import React from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from 'react-icons/fa';
import './number.css';

class Number extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            copied: false
        }
    };

    handleCopy() {
        this.setState({ copied: true })
        setTimeout(() => this.setState({copied: false}), 4000)
    }

    render() {
        const { ticket } = this.props;
        return(
            <div>
            {ticket ?
                <div className="form-header">
                    <span className="ticket-number">T{ticket._id} - </span>
                    <CopyToClipboard text={window.location.href} onCopy={() => this.handleCopy()}>
                        <span className="copy">Copy Link <FaCopy /></span>
                    </CopyToClipboard>
                    {this.state.copied ? <span className="copied fade-out"> Copied to Clipboard!</span> : null}
                </div> : null
            }
            </div>
        );
    };
};

export default Number;