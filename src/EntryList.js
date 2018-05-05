import React, { Component } from "react";
import ListEntry from './ListEntry.js';
import './EntryList.css';

class EntryList extends Component {
	render() {
        return <div className="container-fluid EntryList">
				<ListEntry />
				<ListEntry />
				<ListEntry />
				<ListEntry />
			</div>;
	}
}

export default EntryList;