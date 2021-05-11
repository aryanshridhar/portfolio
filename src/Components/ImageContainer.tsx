import React from 'react';

import avatar from '../static/personal-image.png';

import styles from '../styles/ImageContainer';

type props = {
    isCaption: boolean;
};

class ImageContainer extends React.Component<props> {
    renderCaption = (isCaption: boolean): JSX.Element => {
        if (isCaption) {
            return (
                <figure style={styles.figureStyle}>
                    <img src={avatar} style={styles.avatarStyle}></img>
                    <figcaption style={styles.figureCaptionStyle}>
                        Still hunting for a better frontal view face image!
                    </figcaption>
                </figure>
            );
        }
        return <div></div>;
    };

    render(): JSX.Element {
        return (
            <div>
                <div>{this.renderCaption(this.props.isCaption)}</div>
            </div>
        );
    }
}

export default ImageContainer;
