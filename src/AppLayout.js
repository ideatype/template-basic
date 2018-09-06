import React, { Component } from "react";
import "./index.css";
import Header from "./Header.js";
import MainPage from "./MainPage";
import SinglePostPage from "./SinglePostPage";
import PagePage from "./PagePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";

class AppLayout extends Component {
	render() {
        return <div className="MainPage">
						<Header />
						<main>
							<Route path="/" exact component={MainPage} />
							<Route path="/post/:postId" exact component={SinglePostPage} />
							<Route path="/page/:pageId" exact component={PagePage} />
						</main>
					</div>;
	}
}

export default AppLayout;