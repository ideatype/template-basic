import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './EntryRowRight.css';

class EntryRowRight extends Component {
	render() {
        return <div className="ListEntryRowRight EntryRowRight">
			<h1 className="EntryRowRightTitle"><Link to={`/post/1337`}>Test Title!</Link></h1>
						<div className="EntryRowRightDetails">
							<span className="EntryRowRightDetailsAuthorDesc">
								Submitted by: <span className="EntryRowRightDetailsAuthorName">
									John Wick
								</span>
							</span>
						</div>
						<div className="EntryRowRightText">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
							</p>
						</div>
					</div>;
	}
}

export default EntryRowRight;