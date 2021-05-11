import React from 'react';
import { ProSidebar, Menu, MenuItem, SidebarContent } from 'react-pro-sidebar';
import { faGithub, faGoogle, faLinkedin, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../styles/Sidebar';

import 'react-pro-sidebar/dist/css/styles.css';

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
            <div>
                <ProSidebar style={styles.sidebarStyle} width={75}>
                    <SidebarContent style={styles.sidebarContentStyle}>
                        <Menu iconShape="circle">
                            <MenuItem icon={<FontAwesomeIcon size={'2x'} icon={faGoogle}></FontAwesomeIcon>}>
                                <a href={this.props.links.gmailLink}></a>
                            </MenuItem>
                        </Menu>
                        <Menu iconShape="circle">
                            <MenuItem icon={<FontAwesomeIcon size={'2x'} icon={faGithub}></FontAwesomeIcon>}>
                                <a href={this.props.links.githubLink}></a>
                            </MenuItem>
                        </Menu>
                        <Menu iconShape="circle">
                            <MenuItem icon={<FontAwesomeIcon size={'2x'} icon={faLinkedin}></FontAwesomeIcon>}>
                                <a href={this.props.links.linkedinLink}></a>
                            </MenuItem>
                        </Menu>
                        <Menu iconShape="circle">
                            <MenuItem icon={<FontAwesomeIcon size={'2x'} icon={faStackOverflow}></FontAwesomeIcon>}>
                                <a href={this.props.links.stackOverFlowLink}></a>
                            </MenuItem>
                        </Menu>
                        <Menu iconShape="circle">
                            <MenuItem icon={<FontAwesomeIcon size={'2x'} icon={faTwitter}></FontAwesomeIcon>}>
                                <a href={this.props.links.twitterLink}></a>
                            </MenuItem>
                        </Menu>
                    </SidebarContent>
                </ProSidebar>
            </div>
        );
    }
}

export default Sidebar;
