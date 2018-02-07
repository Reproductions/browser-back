import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'

class Foo extends Component {
  state = { text: 'Sarah' }

  componentDidMount() {
    console.log('component did mount')
    this.setState({ text: 'Sarah' })
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }

  render() {
    const { text } = this.state

    return(
      <div>
        <Link component="a" to="/bar">/bar</Link>
        <p>foo component</p>
        <Field
          name="name"
          type="text"
          component="input"
        />
      </div>
    )
  }
}

export default reduxForm({
  form: 'FooForm',
  enableReinitialize: true
})(Foo);

export const Bar = () => {
  return (
    <div>
      <Link component="a" to="/foo">/foo</Link>
      <p>bar component</p>
    </div>
  )
}