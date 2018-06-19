import React, { Component } from "react";
import ListEntry from './ListEntry.js';
import './EntryList.css';

class EntryList extends Component {

	constructor() {
		super();
		this.state = {
			posts: [],
		};
	}

	componentDidMount() {
		document.getElementById("root").classList.add("loading");
		fetch("http://127.0.0.1:8080/posts")
			.then(results => {
				return results.json();
			}).then(data => {
				if (data.status != "OK") {
					return;
				}
				let posts = data.posts.map((post) => {
					return (
						<ListEntry title={post.meta.title} author={post.meta.author} photo={post.meta.photo} postId={post.fileName} bodyPreview={post.excerpt} />
					)
				})
				this.setState({
					posts: posts
				});
				document.getElementById("root").classList.remove("loading");
		})
	}

	render() {
        return <div className="container-fluid EntryList">
						{this.state.posts}
					</div>;
	}
}

export default EntryList;