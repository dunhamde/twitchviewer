import React, { Component } from "react";
import "./style/tv_header.css";
import { search } from "../actions/search";
import { connect } from "react-redux";

class Search extends Component {
	constructor(props) {
		super(props);
		this.onInputChange = this.onInputChange.bind(this);
		this.timeout = 0;
		this.state = {
			term: ""
		};
	}

	onInputChange(event) {
		if (this.timeout) {
			clearTimeout(this.timeout);
		}
		this.setState({
			term: event.target.value
		});
		if (this.state.term !== "") {
			this.timeout = setTimeout(() => {
				this.props.search(this.state.term);
			}, 300);
		}
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} className="input-group">
				<input
					placeholder="Search for streams"
					className="form-control"
					size="40"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
			</form>
		);
	}
}

export default connect(
	null,
	{ search }
)(Search);
