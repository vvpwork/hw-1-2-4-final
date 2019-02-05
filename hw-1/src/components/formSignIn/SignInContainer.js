import React, { Component } from 'react';
import { connect } from 'react-redux';

// componet
import SignIn from './SignIn';
import { asyncOperetion } from '../../redux/modules/auth';
// style

import s from '../../styles/sign.module.css';

class SignInContainer extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { signIn } = this.props;
    signIn(this.state);
  };

  render() {
    return (
      <div className={s.container}>
        <h1>Enter your email and password</h1>
        <SignIn
          user={this.state}
          changeInput={evt => this.handleChange(evt)}
          submit={evt => this.handleSubmit(evt)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  signIn: asyncOperetion.signIn,
};

export default connect(
  null,
  mapDispatchToProps,
)(SignInContainer);
