import React, { Component } from "react";
import { fetchFeaturedStreams } from "../actions/streams";
import { connect } from "react-redux";
import _ from "lodash";
import {
	getFortniteStreams,
	getLoadingStatus
} from "../reducers/reducer_streams";

class Popular extends Component {
	componentDidMount() {
		this.props.fetchFeaturedStreams();
	}
	renderStreams() {
		const streams = this.props.streams.streams;
		if (streams) {
			return Object.keys(streams).map(stream => {
				console.log(stream.title);
				return (
					<li className="list-group-item" key={stream.title}>
						<h3>{stream.title}</h3>
						<img src={stream.image} />
					</li>
				);
			});
		} else {
			return (
				<li className="list-group-item">
					<h3>Not yet bruh</h3>
				</li>
			);
		}
	}
	render() {
		if (this.props.loading) {
			return <div>Popular strims page!!</div>;
		}

		return <ul className="list-group">{this.renderStreams()}</ul>;
	}
}

function mapStateToProps(state) {
	return {
		streams: getFortniteStreams(state),
		loading: getLoadingStatus(state)
	};
}

export default connect(
	mapStateToProps,
	{ fetchFeaturedStreams }
)(Popular);
