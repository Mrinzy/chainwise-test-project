import React from 'react';
import './App.css'
import MainComponent from './components/MainContent';

class App extends React.Component {
  constructor() {
      super()
      this.state = {}
  }
  
  render() {
    return (
      <>
        {/* <Header/> */}
        <MainComponent/>
        {/* <Footer/> */}
     </>
    );
  }
}


export default App;
