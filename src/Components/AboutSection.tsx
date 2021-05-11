import React from 'react';

import styles from '../styles/AboutSection';

type props = {
    resumeLink: string;
};

class AboutSection extends React.Component<props> {
    render(): JSX.Element {
        return (
            <div style={styles.sectionContainerStyle}>
                <div style={styles.textContainerStyle}>
                    <p style={styles.textStyle}>
                        Hey, I’m Aryan Shridhar, a second year undergraduate from Vellore Institute of Technology,
                        pursuing Computer Science and Engineering. I am an open source enthusiast and have a keen
                        interest in developing user-end applications. This curiosity brought me closer to frameworks
                        like React.js, React-Native, Electron.js, Django, Flask and other similar frameworks including a
                        few DL libraries like Pytorch, Keras and so. Apart from my computers, I love playing football
                        and listening to music.
                        <br />
                        <br /> Click <a href={this.props.resumeLink}>here</a> to download my resume :)
                    </p>
                </div>
            </div>
        );
    }
}

export default AboutSection;
