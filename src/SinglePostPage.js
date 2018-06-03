import React, { Component } from "react";
import Header from "./Header.js";
import { Row, Col } from "reactstrap";
import "./SinglePostPage.css";
import EntryRowRight from "./EntryRowRight";

class SinglePostPage extends Component {
    render() {
        return <div className="Entry">
						<Row className="EntryRow">
							<Col className="EntryImage" xs="12" lg="5">
								<div className="SinglePostEntryImage EntryRowImage sticky-top fixed-bottom" style={{ backgroundImage: "url('http://via.placeholder.com/1000x1000/2eaaf2/ffffff')" }} />
							</Col>
							<Col className="" xs="12" lg="7">
								<EntryRowRight />
							</Col>
						</Row>
					</div>;
            
}
}

export default SinglePostPage;