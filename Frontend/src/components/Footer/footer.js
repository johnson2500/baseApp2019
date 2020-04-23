import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.poop = 'poop';
  }

  render() {
    return (
      <div>
        <div>{3 + 3}</div>
        <div>TEST</div>
      </div>
    );
  }
}
