import React, { Component } from 'react';
import axios from 'axios';

const EMBED_URL = "https://embed.twitch.tv/embed/v1.js";

class MainStream extends Component {
    componentDidMount() {
        let embed;
        const script = document.createElement('script');
        script.setAttribute('src', EMBED_URL);
        script.addEventListener('load', () => {
            embed = new window.Twitch.Embed(this.props.targetID,
            { ...this.props })
        });
        document.body.appendChild(script);
    }

    render() {
        return (
            <div id={this.props.targetID}>
                test
            </div>
        );
    }
}

MainStream.defaultProps = {
    targetID: 'twitch-embed',
    width: '940',
    height: '480',
    channel: 'loltyler1'
}

export default MainStream;