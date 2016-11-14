import React from 'react';


class ComponentTwo extends React.Component {
    render() {
        return (
            <div>
                React router has routed you to the a second component

            </div>
        )
    }
}

ComponentTwo.propTypes = { children: React.PropTypes.object };

export default ComponentTwo;
