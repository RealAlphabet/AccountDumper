import React, { Component } from 'react';

export default class extends Component {
    render() {
        if (!this.props.contact)
            return null;

        return (
            <div className="col col-6 p-3">
                <div className="col-title">
                    Conversation
				</div>

                <ul className="conversation">
                    {this.props.contact.messages.map((message, i) =>
                        <li key={i} className="message-wrapper">
                            <div className={this.getClasses(message)}>
                                {message.content}
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        )
    }

    getClasses(message) {
        if (this.checkAuthor(message)) return 'message-content message-own';
        else return 'message-content';
    }

    checkAuthor(message) {
        return this.props.contact.members[1].id === message.author;
    }
}