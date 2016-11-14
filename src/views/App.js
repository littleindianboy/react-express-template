import React from 'react';
import '../styles/App.scss';

import { IndexLink } from 'react-router';

class App extends React.Component {
    render() {
        return (
            <div>
                { this.props.children || 404}
            </div>
        )
    }
}

App.propTypes = { children: React.PropTypes.object };

export default App;
