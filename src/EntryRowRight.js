import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './EntryRowRight.css';

class EntryRowRight extends Component {
	render() {
        return <div className="ListEntryRowRight EntryRowRight">
						<h1 className="EntryRowRightTitle">
				<Link to={`/post/1337`}>{this.props.title}</Link>
						</h1>
						<div className="EntryRowRightDetails">
							<span className="EntryRowRightDetailsAuthorDesc">
								Submitted by: <span className="EntryRowRightDetailsAuthorName">
						{this.props.author}
								</span>
							</span>
						</div>
						<div className="EntryRowRightText">
							<p>
								{this.props.bodyPreview}
							</p>
						</div>
					</div>;
	}
}

export default EntryRowRight;