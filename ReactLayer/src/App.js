import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends Component {
  render() {
    return (
      <nav id="header" className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header col-md-4 navbar-left">
            <a className="navbar-brand" href="#">
              <img className="App-logo" alt="Brand" src={logo}/>
            </a>
          </div>
          <h1 className="col-md-4">Welcome To StudyWars!</h1>
          <ul className="nav navbar-nav navbar-right col-md-4">
            <li role="presentation"><a href="about.html">About Us</a></li>
            <li role="presentation"><a href="login.html">Sign In/Sign Up</a></li>
            <li role="presentation" className="active"><a href="#">Home</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <p className="text-muted">Place sticky footer content here.</p>
        </div>
      </footer>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer />
      </div>
    );
  }
}

export default App;