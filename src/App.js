import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import User from './User.js';
import { Layout } from './components/Layout/Layout';
import './App.css';
import { Transition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { page: 'homepage', name:'', errorMessage: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getName = this.getName.bind(this);
    this.mediaQuery = this.mediaQuery.bind(this);
  };
  handleSubmit(e){
    e.preventDefault();
    if(this.state.name.length === 0){
      return;
    }
    if (this.state.name.length > 22){
      //show error
      this.setState({ errorMessage: 'Je gebruikersnaam is te lang'});
      // remove message
      setTimeout(()=> {this.setState({errorMessage: ''})},3000);
      return;
    }
    // check if username is letters and digits
    const regEx = /[^A-Za-z0-9]+/g;

    if(this.state.name.match(regEx)){
      //show error
      this.setState({ errorMessage: 'Alleen letters of cijfers gebruiken'});
      // remove message
      setTimeout(()=> {this.setState({errorMessage: ''})},3000);
      return;
    }

    this.setState({ page: 'play'});
  };
  getName(userName){
    this.setState({ name:userName });
  }
  mediaQuery(){
    var container = 'container';
    var x = window.matchMedia("(max-width: 414px)");
    console.log(x);
    if (x.matches) {
      return  container = 'container-fluid';
    } else {
      return container;
    }

  };
  render() {
    const homepage = (
      <div>
        <div className="row">
          <div className="col images">
              <img src="/images/Rock.svg" alt="Rock" height="115px"/>
              <img src="/images/Paper.svg" alt="Paper" height="115px"/>
              <img src="/images/Scissors.svg" alt="Scissors" height="115px"/>

          </div>
        </div>
        <div className="row">
          <div className="col">
            <label className="labelUsername">Wat is jouw naam?</label>
          </div>
        </div>
        <div className="row">
          <div className="col grey bottomHome">
            <User getName={this.getName} onEnter={this.handleSubmit}/>
            <label className="error">{this.state.errorMessage}</label>
            <button className="spelen" onClick={this.handleSubmit}>SPELEN</button>
          </div>
        </div>
      </div>
    );
    return (
      <div className="App">
        <div className={this.mediaQuery()}>
          <div className="row">
              <div className="col">
                    <div className={this.state.page === 'homepage'? "title" : "titleSmall" }>
                    <a href='/'>Rock, Paper, Scissors</a>
                    </div>
              </div>
          </div>
             { this.state.page === 'homepage'? homepage : <Layout userName={this.state.name} /> }
        </div>
      </div>
    );
  }
}

export default App;
