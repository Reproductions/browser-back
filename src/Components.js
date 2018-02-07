import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Foo extends Component {
  state = { text: 'default text' }

  componentDidMount() {
    console.log('component did mount')
    this.setState({ text: 'default text' })
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
        <input type="text" value={text} onChange={this.handleChange} />
      </div>
    )
  }
}

export const Bar = () => {
  return (
    <div>
      <Link component="a" to="/foo">/foo</Link>
      <p>bar component</p>
    </div>
  )
}