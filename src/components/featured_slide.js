import React, { Component } from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'

const FlowList = styled.ul`
    /* display: flex;
  flex-direction: inline; */
    list-style: none;
`
const FlowCard = styled.div`
    background-color: ${props => props.background};
    height: 500px;
    /* -webkit-transition-duration: 600ms;
    transition-duration: 600ms; */

    /* &.slide-enter-active {
        transform: translate(100%);
        -webkit-transform: translate(100%);
    } */
`

export default class FeaturedSlide extends Component {
    render() {
        return (
            <FlowList>
                <CSSTransition
                    appear={true}
                    // timeout={{
                    //     enter: 500,
                    //     exit: 500,
                    // }}
                    mountOnEnter
                    classNames="slide"
                >
                    <FlowCard background="tomato" />
                </CSSTransition>
                <FlowCard background="turquoise" />
                <FlowCard background="olive" />
                <FlowCard background="dodgerblue" />
            </FlowList>
        )
    }
}
