import React, { Component } from "react";
import {
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from "reactstrap";
import './TopMenu.css';

class TopMenu extends Component {

	constructor() {
		super();
		this.state = {
			entries: [],
		};
	}

	componentDidMount() {
		let entries = this.props.entries.map((entry) => {
			if (Array.isArray(entry.value)) {
				return (
					<UncontrolledDropdown nav inNavbar>
						<DropdownToggle nav caret>
							{entry.title}
								</DropdownToggle>
						<DropdownMenu right>
							{entry.value.map((subentry) => {
								return <DropdownItem><NavLink href={subentry.value}>{subentry.title}</NavLink></DropdownItem>
							})}
						</DropdownMenu>
					</UncontrolledDropdown>
				)
			} else {
				return (<NavItem>
					<NavLink href={entry.value}>
						{entry.title}
								</NavLink>
				</NavItem>);
			}
		}
		);
		this.setState({
			entries: entries
		});
	}

	render() {
		return <Nav className="ml-auto TopMenu" navbar>
			{this.state.entries}
		</Nav>;
	}
}

export default TopMenu;
