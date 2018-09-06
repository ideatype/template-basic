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
import { Link } from 'react-router-dom';
import './TopMenu.css';

class TopMenu extends Component {
	render() {
		let entries = this.props.entries.map((entry) => {
			if (Array.isArray(entry.value)) {
				return (
					<UncontrolledDropdown nav inNavbar>
						<DropdownToggle nav caret>
							{entry.title}
						</DropdownToggle>
						<DropdownMenu right>
							{entry.value.map((subentry) => {
								return <DropdownItem><NavLink tag={Link} to={subentry.value}>{subentry.title}</NavLink></DropdownItem>
							})}
						</DropdownMenu>
					</UncontrolledDropdown>
				)
			} else {
				return (<NavItem>
					<NavLink tag={Link} to={entry.value}>
						{entry.title}
					</NavLink>
				</NavItem>);
			}
		}
		);
		return <Nav className="ml-auto TopMenu" navbar>
			{entries}
		</Nav>;
	}
}

export default TopMenu;
