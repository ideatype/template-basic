import React, { Component } from "react";
import Header from "./Header.js";
import { Row, Col } from "reactstrap";
import "./SinglePostPage.css";
import SinglePostEntryRowRight from "./SinglePostEntryRowRight";

class SinglePostPage extends Component {
	constructor() {
		super();
		this.state = {
			post: [],
		};
	}

	componentDidMount() {
		document.getElementById("root").classList.add("loading");
		fetch(`/api/post/${this.props.match.params.postId}`)
			.then(results => {
				return results.json();
			}).then(data => {
				if (data.status != "OK") {
					return;
				}
				let post = (
						<Row className="EntryRow">
							<Col className="EntryImage" xs="12" lg="5">
								<div className="SinglePostEntryImage EntryRowImage sticky-top fixed-bottom" style={{ backgroundImage: `url('${data.post.meta.photo}')` }} />
							</Col>
							<Col className="" xs="12" lg="7">
								<SinglePostEntryRowRight title={data.post.meta.title} author={data.post.meta.author} body={data.post.content} />
							</Col>
					</Row>
				);
				this.setState({
					post: post
				});
				document.getElementById("root").classList.remove("loading");
		})
	}

    render() {
		return <div>
			<div className="SinglePostEntryShadow" />
			<div className="Entry">
				{this.state.post}
			</div>
		</div>;
    
	}
}

export default SinglePostPage;
