import React, { Component } from 'react'
import FeaturedStreams from './featured_streams'
import Search from './search_bar'
import { CSSTransition } from 'react-transition-group'
import onClickOutside from 'react-onclickoutside'
import { showFeatured, showRecent } from '../actions/header'
import { getShowFeatured, getShowRecent } from '../selectors/selectors.js'
import { connect } from 'react-redux'
import RecentStreams from './recent_streams'
import styled from 'styled-components'

const TVHeaderButton = styled.a`
    text-decoration: none;
    padding: 5px 10px 5px 10px;
    line-height: 1.5;
    color: purple;
    border: thin solid purple;
    margin-left: 5px;
    margin-right: 5px;
    &: link,&: visted,&: focus {
        background: white;
        text-decoration: none;
    }
    &: hover {
        background: purple;
        color: white;
        text-decoration: none;
    }
`

const TVHeaderBrand = styled.h3`
    color: purple;
    flex: 1;
    display: flex;
    justify-content: space-around;

    @media (max-width: 650px) {
        font-size: 1.5em;
        margin-top: 0;
        margin-bottom: 5px;
    }
`

const HeaderColumn = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 650px) {
        margin-top: 5px;
        margin-bottom: 5px;
    }
`

const StyledHeader = styled.div`
    height: 76px;
    color: black;
    background-color: white;
    display: flex;

    @media (max-width: 650px) {
        h3 {
            order: 1;
        }
        div {
            order: 2;
        }
        flex-direction: column;
        height: auto;
    }
`

const HeaderContainer = styled.div`
    position: fixed;
    z-index: 99;
    top: 0;
    right: 0;
    left: 0;
`

const FeaturedStreamsContainer = styled.div`
    width: 100%;
    background-color: black;
    color: white;
    height: 0px;
    overflow: hidden;
    -webkit-transition: height 0.5s ease;
    -moz-transition: height 0.5s ease;
    -o-transition: height 0.5s ease;
    transition: height 0.5s ease;

    &.featured-enter-done {
        height: 350px;
        background-color: black;
    }
    &.featured-exiting {
        height: 0px;
    }
`

class TVHeader extends Component {
    static defaultProps = {
        showFeaturedStreams: false,
        showRecentStreams: false,
    }

    handleClickOutside = () => {
        this.props.showFeatured(false)
        this.props.showRecent(false)
    }

    toggleFeaturedStreams = () => {
        this.props.showRecent(false)
        this.props.showFeaturedStreams
            ? this.props.showFeatured(false)
            : this.props.showFeatured(true)
    }
    toggleRecentStreams = () => {
        this.props.showFeatured(false)
        this.props.showRecentStreams
            ? this.props.showRecent(false)
            : this.props.showRecent(true)
    }

    render() {
        return (
            <div>
                <HeaderContainer>
                    <StyledHeader>
                        <HeaderColumn>
                            <Search />
                        </HeaderColumn>
                        <TVHeaderBrand>TwitchViewer</TVHeaderBrand>
                        <HeaderColumn>
                            <TVHeaderButton
                                onClick={() => this.toggleRecentStreams()}
                            >
                                Recent
                            </TVHeaderButton>
                            <TVHeaderButton
                                onClick={() => this.toggleFeaturedStreams()}
                            >
                                Featured
                            </TVHeaderButton>
                        </HeaderColumn>
                    </StyledHeader>

                    <CSSTransition
                        in={this.props.showFeaturedStreams}
                        timeout={{
                            enter: 0,
                            exit: 500,
                        }}
                        mountOnEnter
                        unmountOnExit
                        classNames="featured"
                    >
                        <FeaturedStreamsContainer>
                            <FeaturedStreams />
                        </FeaturedStreamsContainer>
                    </CSSTransition>
                    <CSSTransition
                        in={this.props.showRecentStreams}
                        timeout={{
                            enter: 0,
                            exit: 500,
                        }}
                        mountOnEnter
                        unmountOnExit
                        classNames="recent"
                    >
                        <RecentStreams />
                    </CSSTransition>
                </HeaderContainer>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        showFeaturedStreams: getShowFeatured(state),
        showRecentStreams: getShowRecent(state),
    }
}

export default connect(
    mapStateToProps,
    { showFeatured, showRecent }
)(onClickOutside(TVHeader))
