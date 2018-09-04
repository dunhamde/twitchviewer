import React, { Component } from "react";
import { fetchFeaturedStreams } from "../actions/fetch";
import { connect } from "react-redux";
import { getFeaturedStreams, getIsLoading } from "../reducers/reducer_streams";

class Popular extends Component {
	componentDidMount() {
		this.props.fetchFeaturedStreams();
	}
	renderStreams() {
		const streams = this.props.streams;
		if (streams) {
			return streams.map(stream => {
				return (
					<li className="list-group-item" key={stream.title}>
						<h3>
							<a href={stream.stream.channel.url}>{stream.title}</a>
						</h3>
						<img src={stream.image} alt={stream.title} />
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
		if (this.props.loading === true) {
			return <div>Popular strims page!!</div>;
		}

		return <ul className="list-group">{this.renderStreams()}</ul>;
	}
}

function mapStateToProps(state) {
	return {
		streams: getFeaturedStreams(state),
		loading: getIsLoading(state)
	};
}

export default connect(
	mapStateToProps,
	{ fetchFeaturedStreams }
)(Popular);
