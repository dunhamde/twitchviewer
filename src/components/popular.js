import React, { Component } from 'react';
import { fetchFeaturedStreams } from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';

class Popular extends Component {
    componentDidMount() {
        this.props.fetchFeaturedStreams();
    }
    renderStreams() {
        const strim = this.props.streams.streams[0];
        const streams = this.props.streams.streams;
        console.log(strim);
        if (strim && strim.title) {
            console.log('yus');
            //return <div>{strim.title}</div>;
        }

        return _.map(streams, stream => {
            return (
                <li className="list-group-item" key={stream.title}>
                    <h3>{stream.title}</h3>
                    <img src={stream.image} />
                </li>
            );
        });  
        return <div></div>      
    }
    render() {
        if (!this.props.streams) {
            return (
                <div>Popular strims page!!</div>
            );
        }
        return (
            <ul className="list-group">
                {this.renderStreams()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // TODO: this is questionable for now
    return { streams: state };
}

export default connect(mapStateToProps, { fetchFeaturedStreams })(Popular);