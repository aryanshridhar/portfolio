import React from 'react';
import avatar from '../static/personal-image.png';

import '../styles/ImageContainer.css';

class ImageContainer extends React.Component {
    renderImage = (): JSX.Element => {
        return (
            <figure className="figure">
                <img className="avatar" src={avatar}></img>
            </figure>
        );
    };

    render(): JSX.Element {
        return (
            <div>
                <div>{this.renderImage()}</div>
            </div>
        );
    }
}

export default ImageContainer;
