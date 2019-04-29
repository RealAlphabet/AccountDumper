import React, { Component } from 'react';

export default class extends Component {
    render() {
        return (
            <div className="col-6 p-3">
                <div className="col-title">
                    SMS
				</div>

                <ul>
                    {this.props.contact.conversations.map((message, i) =>
                        <li key={i}>
                            <div className={message.author && 'right'}>
                                <div className="message-content">
                                    {message.content}
                                </div>
                            </div>
                        </li>
                    )}
                </ul>

                <form className="message-form">
                    <textarea name="message" rows="5"></textarea>
                    <input type="submit" value="Envoyer"></input>
                </form>
            </div>
        )
    }
}