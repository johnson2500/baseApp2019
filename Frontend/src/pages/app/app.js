import React from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}
