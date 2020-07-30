import React from 'react';

export default class ScrollUp extends React.Component {
  componentDidMount() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  render() {
    const { children } = this.props;
    return children || null;
  }
}
