import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import TVHeader from "./tv_header";
import Popular from "./popular";
import MainStream from "./main_stream";

class TwitchViewer extends Component {
	render() {
		return (
			<div>
				<TVHeader />
				<div className="maincontent">
					<Switch>
						<Route path="/popular" component={Popular} />
					</Switch>
					<MainStream />
				</div>
			</div>
		);
	}
}

export default TwitchViewer;
