import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Components/Sidebar';
import ImageContainer from './Components/ImageContainer';
import AboutSection from './Components/AboutSection';

import './index.css';
import reportWebVitals from './reportWebVitals';

type links = {
    gmailLink: string;
    githubLink: string;
    linkedinLink: string;
    stackOverFlowLink: string;
    twitterLink: string;
    resumeLink: string;
};

const hrefLinks: links = {
    gmailLink: 'mailto:aryanshridhar7@gmail.com',
    githubLink: 'https://github.com/aryanshridhar',
    linkedinLink: 'https://www.linkedin.com/in/aryan-shridhar-b3a44b19a/',
    stackOverFlowLink: 'https://stackoverflow.com/users/13148815/aryan-shridhar',
    twitterLink: 'https://twitter.com/ShridharAryan',
    resumeLink: 'https://drive.google.com/file/d/1g0vNfaQODeqjDfgbDLOZWtYbG3EN-kLW/view?usp=sharing',
};

ReactDOM.render(
    <React.StrictMode>
        <Sidebar links={hrefLinks} />
        <ImageContainer />
        <AboutSection resumeLink={hrefLinks.resumeLink} />
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
