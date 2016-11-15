import React from 'react';
import { connect } from 'react-redux';
import { showGreeting } from '../redux/actions/action_show_greeting';
import { Link } from 'react-router';

class ComponentOne extends React.Component {
  constructor(props){
    super(props);

    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    this.props.showGreeting();
  }

    render() {
        return (
            <div>
                {this.props.greeting}
                <p>This is the main app component</p>
                <Link to="/component2">To Component2</Link>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  greeting: state.greeting
});

export default connect(mapStateToProps, { showGreeting })(ComponentOne);
