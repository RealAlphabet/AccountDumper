import React, { Component } from 'react';

import Contacts from './contacts';
import Conversation from './conversation';
import Infos from './infos';

export default class extends Component {
	constructor(props) {
		super(props);

		this.state = {
			contactList: [],
			contact: null
		}
	}

	render() {
		return (
			<div className="row">
				<Contacts contactList={this.state.contactList} onSelectContact={this.onSelectContact.bind(this)} onImportContacts={this.onImportContacts.bind(this)} />
				<Conversation contact={this.state.contact} />
				<Infos contact={this.state.contact} />
			</div>
		)
	}

	onImportContacts(e) {
		var reader = new FileReader();

		reader.onload = () => this.setState({
			contactList: [JSON.parse(reader.result)]
		});

		reader.readAsText(e.target.files[0]);
	}

	onSelectContact(contact) {
		this.setState({
			contact: contact
		})
	}
}