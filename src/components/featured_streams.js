import React, {Component} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./style/featured_streams.css"

class FeaturedStreams extends Component {
    render() {
        return (
            <CSSTransition timeout={500} classNames="move">
                <div className="featured_streams">
                    Featured Streams
                </div>
            </CSSTransition>
        );
    }
}

export default FeaturedStreams;