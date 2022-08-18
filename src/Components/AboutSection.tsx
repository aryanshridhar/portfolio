import React from 'react';

import '../styles/AboutSection.css';

type props = {
    resumeLink: string;
};

class AboutSection extends React.Component<props> {
    render(): JSX.Element {
        return (
            <div className="sectionContainer">
                <div className="textContainer">
                    <p className="textStyle">
                        Hey, I'm Aryan Shridhar, a fourth year undergraduate from Vellore Institute of Technology,
                        pursuing Computer Science and Engineering. I am an open source enthusiast and have a keen
                        interest in developing user-end applications. This curiosity brought me closer to frameworks
                        like React.js, React-Native, Electron.js, Django, Flask and other similar frameworks. Currently,
                        I am working with <a href="https://github.com/electron">Electron</a> as a GSoC'22 student
                        enhancing <a href="https://github.com/electron/fiddle">fiddle's</a> architecture from a security
                        standpoint.
                        <br />
                        <br /> Click <a href={this.props.resumeLink}>here</a> to view my resume :)
                    </p>
                </div>
            </div>
        );
    }
}

export default AboutSection;
