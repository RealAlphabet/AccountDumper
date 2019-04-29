import React, { Component } from 'react';

export default class extends Component {
    render() {
        if (!this.props.contact)
            return null;

        return (
            <div className="col col-3 p-3">
                <div className="col-title">
                    Infos
				</div>

                <ul>
                    <li className="detail">
                        <div className="detail-title">Contact</div>
                        <div className="detail-value">{this.props.contact.members[0].username}</div>
                    </li>
                    <li className="detail">
                        <div className="detail-title">Messages</div>
                        <div className="detail-value">{this.props.contact.messages.length}</div>
                    </li>
                    <li className="detail">
                        <div className="detail-title">Messages auteur</div>
                        <div className="detail-value">{this.getOwnCount}</div>
                    </li>
                    <li className="detail">
                        <div className="detail-title">Messages répondant</div>
                        <div className="detail-value">{this.getOtherCount}</div>
                    </li>
                    <li className="detail">
                        <div className="detail-title">Integrity</div>
                        <div className="detail-value text-error">No integrity</div>
                    </li>
                </ul>
            </div>
        )
    }

    get getOwnCount() {
        return this.props.contact.messages.filter(message =>
            message.author === this.props.contact.members[1].id
        ).length;
    }

    get getOtherCount() {
        return this.props.contact.messages.length - this.getOwnCount;
    }
}