import React, { Component } from 'react';
import GitHubButton from 'react-github-btn';

class Footer extends Component {
    render() {
        return(
            <footer>
              <GitHubButton href="https://github.com/naphthalene">Follow @naphthalene</GitHubButton>
            </footer>
        );
    }
}

export default Footer;
