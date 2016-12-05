import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';
 
class AccountsUIWrapper extends Component {
  render() {
    return <span ref="container" />;
  }
  
  componentWillUnmount() {
    Blaze.remove(this.view);
  }

  componentDidMount() {
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container));
  }
}

export default AccountsUIWrapper;