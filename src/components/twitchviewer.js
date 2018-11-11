import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import TVHeader from './tv_header'
import Popular from './popular'
// import MainStream from "./main_stream";
import FeaturedFlow from './featured_slide'

class TwitchViewer extends Component {
    render() {
        return (
            <Fragment>
                <TVHeader />
                <Switch>
                    <Route path="/popular" component={Popular} />
                </Switch>
                <FeaturedFlow />
            </Fragment>
        )
    }
}

export default TwitchViewer
