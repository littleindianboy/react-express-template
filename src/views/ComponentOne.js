import React from 'react';
import { Link } from 'react-router';

class ComponentOne extends React.Component {
    render() {
        return (
            <div>
                <h3>ComponentOne</h3>
                <p>This is the main app component</p>
                <Link to="/component2">To Component2</Link>
            </div>
        )
    }
}

ComponentOne.propTypes = { children: React.PropTypes.object };

export default ComponentOne
;
