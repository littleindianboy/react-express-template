import React from 'react';
import { IndexLink } from 'react-router';


class ComponentTwo extends React.Component {
    render() {
        return (
            <div>
                React router has routed you to the a second component.
                <br />
                <IndexLink to="/"> Back To Main </IndexLink>
            </div>
        )
    }
}

ComponentTwo.propTypes = { children: React.PropTypes.object };

export default ComponentTwo;
