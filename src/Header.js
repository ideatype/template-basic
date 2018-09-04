import React, { Component } from "react";
import {
	Navbar,
	NavbarBrand
} from "reactstrap";
import "./Header.css";
import LoadingManager from "./LoadingManager";
import TopMenu from "./TopMenu.js";


class Header extends Component {

	constructor() {
		super();
		this.state = {
			siteName: "",
			menuEntries: []
		};
	}

	componentDidMount() {
		LoadingManager.start("Header");
		// fetch(`${API_ROOT}/api/post/${this.props.match.params.postId}`)
		// 	.then(results => {
		// 		return results.json();
		// 	})
		// 	.then(data => {
		// 		if (data.status != "OK") {
		// 			return;
		// 		}
		// 		let post = <Row className="EntryRow">
		// 			<Col className="EntryImage" xs="12" lg="5">
		// 				<div className="SinglePostEntryImage EntryRowImage sticky-top fixed-bottom" style={{ backgroundImage: `url('${data.post.meta.photo}')` }} />
		// 			</Col>
		// 			<Col className="" xs="12" lg="7">
		// 				<SinglePostEntryRowRight title={data.post.meta.title} author={data.post.meta.author} body={data.post.content} />
		// 			</Col>
		// 		</Row>;
		// 		this.setState({ post: post });
		// 		LoadingManager.finish("Header");
		// 	});
	}

	render() {
		let entries = [
			{ title: "Title1", value: "/val1" },
			{ title: "Title2", value: "/val2" },
			{
				title: "Title3opt",
				value: [
					{ title: "Title1sub", value: "/val11" },
					{ title: "Title2sub", value: "/val12" },
					{ title: "Title3sub", value: "/val13" }
				]
			}
		];
		return (
			<div className="Header">
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">{this.state.siteName}</NavbarBrand>
					<TopMenu entries={this.state.menuEntries} />
				</Navbar>
			</div>
		);
	}
}

export default Header;