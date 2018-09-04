import React, { Component } from "react";
import "./style/tv_header.css";

class Search extends Component {
	constructor(props) {
		super(props);
		this.onInputChange = this.onInputChange.bind(this);
		this.state = {
			term: ""
		};
	}

	onInputChange(event) {
		this.setState({
			term: event.target.value
		});
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

export default Search;
