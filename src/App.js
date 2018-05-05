import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';
import EntryList from './EntryList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />  
        <EntryList />
      </div>
    );
  }
}

export default App;