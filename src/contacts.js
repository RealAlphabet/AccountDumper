import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }

    render() {
        return (
            <div className="col col-3 p-3">
                <div className="col-title">
                    Contacts
				</div>

                <input className="hide" type="file" accept="application/json" onChange={this.props.onImportContacts} ref={this.input} />

                <ul className="clickable">
                    <li onClick={() => this.input.current.click()}>
                        Importer conversation
                    </li>

                    {this.props.contactList.map((contact, i) =>
                        <li key={i} onClick={() => this.props.onSelectContact(contact)}>
                            {contact.members[0].username}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}