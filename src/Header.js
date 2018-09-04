import React, { Component } from "react";
import {
	Navbar,
	NavbarBrand
} from "reactstrap";
import "./Header.css";
import LoadingManager from "./LoadingManager";
import TopMenu from "./TopMenu.js";
import { API_ROOT } from "./ApiConf";


class Header extends Component {

	constructor() {
		super();
		this.state = {
			siteConfig: [],
			topMenuEntries: []
		};
	}

	componentDidMount() {
		LoadingManager.start("Header");
		fetch(`${API_ROOT}/api/config/main`)
			.then(results => {
				return results.json();
			})
			.then(data => {
				if (data.status != "OK") {
					return;
				}
				this.setState({ siteConfig: data.config.site, topMenuEntries: data.config.menu.top_menu });
				LoadingManager.finish("Header");
			});
	}

	render() {
		console.log(this.state.topMenuEntries);
		return (
			<div className="Header">
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">{this.state.siteConfig.site_name}</NavbarBrand>
					<TopMenu entries={this.state.topMenuEntries} />
				</Navbar>
			</div>
		);
	}
}

export default Header;