import React, { Component } from 'react'
import { fetchFeaturedStreams } from '../actions/fetch'
import { connect } from 'react-redux'
import { getFeaturedStreams, getIsLoading } from '../selectors/selectors.js'
import FeaturedStreamCard from './featured_stream_card'
import styled from 'styled-components'

const FeaturedStreamsList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    @media (max-width: 650px) {
        flex-direction: column;
        padding: 0;
        align-items: normal;
    }
`

class FeaturedStreams extends Component {
    componentDidMount() {
        this.props.fetchFeaturedStreams()
    }

    renderStreams() {
        const streams = this.props.streams
        if (streams) {
            return streams.slice(1, 4).map(stream => {
                return (
                    <li key={stream.title}>
                        <FeaturedStreamCard stream={stream} />
                    </li>
                )
            }, this)
        } else {
            return (
                <li className="list-group-item">
                    <h3>Not yet bruh</h3>
                </li>
            )
        }
    }

    render() {
        if (this.props.loading === true) {
            return <div />
        }
        return <FeaturedStreamsList>{this.renderStreams()}</FeaturedStreamsList>
    }
}

function mapStateToProps(state) {
    return {
        streams: getFeaturedStreams(state),
        loading: getIsLoading(state),
    }
}

export default connect(
    mapStateToProps,
    { fetchFeaturedStreams }
)(FeaturedStreams)
