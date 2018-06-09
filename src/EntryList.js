import React, { Component } from "react";
import ListEntry from './ListEntry.js';
import './EntryList.css';

class EntryList extends Component {
	render() {
        return <div className="container-fluid EntryList">
						<ListEntry title="tytul posta 1" author="autor posta 1" bodyPreview="pierwszy paragraf posta" />
						<ListEntry title="tytul posta 2" author="autor posta 2" bodyPreview="pierwszy paragraf posta" />
						<ListEntry title="tytul posta 3" author="autor posta 3" bodyPreview="pierwszy paragraf posta" />
						<ListEntry title="tytul posta 4" author="autor posta 4" bodyPreview="pierwszy paragraf posta" />
					</div>;
	}
}

export default EntryList;