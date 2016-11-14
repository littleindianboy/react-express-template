import React from 'react';
import { IndexLink } from 'react-router';

class ComponentOne extends React.Component {
    render() {
        return (
            <div>
                <h3>ComponentOne</h3>
                <p>This is the main app component</p>
                <IndexLink to="/component2">To Component2</IndexLink>
            </div>
        )
    }
}

ComponentOne.propTypes = { children: React.PropTypes.object };

export default ComponentOne
;
