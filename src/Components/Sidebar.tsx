import React from 'react';
import { faGithub, faGoogle, faLinkedin, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/Sidebar.css';

type hrefLinks = {
    gmailLink: string;
    githubLink: string;
    linkedinLink: string;
    stackOverFlowLink: string;
    twitterLink: string;
};

type props = {
    links: hrefLinks;
};

class Sidebar extends React.Component<props> {
    render(): JSX.Element {
        return (
            <div className="sidebar">
                <a href={this.props.links.gmailLink}>
                    <FontAwesomeIcon size={'2x'} icon={faGoogle}></FontAwesomeIcon>
                </a>
                <a href={this.props.links.githubLink}>
                    <FontAwesomeIcon size={'2x'} icon={faGithub}></FontAwesomeIcon>
                </a>
                <a href={this.props.links.linkedinLink}>
                    <FontAwesomeIcon size={'2x'} icon={faLinkedin}></FontAwesomeIcon>
                </a>
                <a href={this.props.links.stackOverFlowLink}>
                    <FontAwesomeIcon size={'2x'} icon={faStackOverflow}></FontAwesomeIcon>
                </a>
                <a href={this.props.links.twitterLink}>
                    <FontAwesomeIcon size={'2x'} icon={faTwitter}></FontAwesomeIcon>
                </a>
            </div>
        );
    }
}

export default Sidebar;
