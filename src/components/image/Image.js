import React, { Component } from 'react';

class Image extends Component {
  render() {
    const { source, className } = this.props;

    return (
      <div>
        <img src={source} className={className ? className : ''} />
      </div>
    )
  }
}

export default Image;
