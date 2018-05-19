import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import "./index.css";
import Header from "./Header.js";
import MainPage from "./MainPage";
import SinglePostPage from "./SinglePostPage";
import registerServiceWorker from './registerServiceWorker';
import "bootstrap/dist/css/bootstrap.min.css";

class AppLayout extends Component {
	render() {
        return <div className="MainPage">
						<Header />
						<main>
							<Route path="/" exact component={MainPage} />
							<Route path="/post/:postId" exact component={SinglePostPage} />
						</main>
					</div>;
	}
}

export default AppLayout;