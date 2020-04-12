import React from 'react';
import { Results } from '../Results/Results';
import './Players.css';
import { Buttons } from '../Buttons/Buttons';
import { Weapon } from '../Layout/Weapon';
import Reaction  from '../Layout/Reaction';
import { Counter } from '../Layout/Counter';
import { Life } from './Life';
import { Winner } from './Winner';
//import { Transition } from 'react-transition-group';

var lives = 3;
var cpuLives = 3;
var count;
var winner = false;
var timer;
//var winnaar = false;



class Players extends React.Component {
  constructor(props){
    super(props);
    this.state = { weapon: "empty", weaponCPU: "empty", action: "", count: 10, message: 'Je hebt 3 pogingen', winner: '', life: 3};
    this.handleRockClick = this.handleRockClick.bind(this);
    this.handlePaperClick = this.handlePaperClick.bind(this);
    this.handleScissorsClick = this.handleScissorsClick.bind(this);
    this.changeMessage = this.changeMessage.bind(this);
    this.restart = this.restart.bind(this);
    count = this.state.count;

  }



  handleRockClick(){
    //reset timer
    count = 10;

    const cpu = this.cpuPlay();

    this.setState({ weapon: "rock", weaponCPU: cpu, action:"", count: 10 });

    if(cpu === "rock"){
      this.changeMessage('Gelijk spel!');
    } else if (cpu === "paper" ) {
      // take one life
      this.userLives();
      this.showWinner();
    } else {
      // take one cpu life
      this.cpuLives();
      this.showWinner();
      // show action image after timeout
      setTimeout(()=> {
        this.setState({ action: 'bang'});
      }, 750)

    }
  };

  handlePaperClick(){
    //reset timer
    count = 10;
    const cpu = this.cpuPlay();
    this.setState({ weapon: "paper", weaponCPU: cpu, action:""});
    if(cpu === "paper"){
      this.changeMessage('Gelijk spel!');
    } else if (cpu === "scissors" ) {
      // take one life
      this.userLives();
      this.showWinner();
    } else {
      // take one cpu life
      this.cpuLives();
      this.showWinner();
      // show action image after timeout
      setTimeout(()=> {
        this.setState({ action: 'bang'});
      }, 750)
    }
    console.log(cpu)
  };
  handleScissorsClick(){
    //reset timer

    count = 10;
    const cpu = this.cpuPlay();
    this.setState({ weapon: "scissors", weaponCPU: cpu, action:""});
    if(cpu === "scissors"){
      this.changeMessage('Gelijk spel!');
    } else if (cpu === "rock" ) {
      // take one life
      this.userLives();
      this.showWinner();
    } else {
      // take one cpu life
      this.cpuLives();
      this.showWinner();
      // show action image after timeout

      setTimeout(()=> {
        this.setState({ action: 'bang'});
      }, 750)

    }

  };


  userLives(){
    lives--;
    var userLife = "";
    if (lives === 2){
      userLife = document.getElementById('userLife3');
      userLife.src='/images/death.svg';
      this.changeMessage('Helaas je hebt deze ronde verloren!');
    } else if (lives === 1) {
      userLife = document.getElementById('userLife2');
      userLife.src='/images/death.svg';
      this.changeMessage('Helaas je hebt deze ronde verloren!');
    } else {
      userLife = document.getElementById('userLife1');
      userLife.src='/images/death.svg';
      this.changeMessage('Helaas je hebt deze ronde verloren!');
    }
  }

  cpuLives(){
    cpuLives--;
    var cpuLife= "";
    if (cpuLives === 2){
      cpuLife = document.getElementById('cpuLife3');
      cpuLife.src='/images/death.svg';
      this.changeMessage('Je hebt deze ronde gewonnen!');
    } else if (cpuLives === 1) {
      cpuLife = document.getElementById('cpuLife2');
      cpuLife.src='/images/death.svg';
      this.changeMessage('Je hebt deze ronde gewonnen!');
    } else {
      cpuLife = document.getElementById('cpuLife1');
      cpuLife.src='/images/death.svg';
      this.changeMessage('Je hebt deze ronde gewonnen!');

    }
  };

  changeMessage(newMessage){

    this.setState({ message: newMessage });
  }

  counter(){
        if (count > -1 ){
            this.setState({counter: count--});
            console.log(count);
          }
          if (count === -1) {
            this.automaticLose();

          }
  };

  automaticLose(){
    this.userLives();
    clearInterval(timer);
    const cpu = this.cpuPlay();
    this.setState({weaponCPU:cpu});
    count = 10;
    timer = setInterval(() => this.counter(), 1000);

    this.showWinner();


  }

  componentDidMount(){

    timer = setInterval(() => this.counter(), 1000);

  }

  restart(restart){
    if (restart === true){
      winner = false;
      lives = 3;
      cpuLives = 3;
      //winnaar = false;
      this.setState({ weapon: "empty", weaponCPU: "empty", action: "", count: 10, message: 'Je hebt 3 pogingen', winner: '', life: 3});
      timer = setInterval(() => this.counter(), 1000);
    }
  }

// set random cpu play
  cpuPlay(){

    switch (Math.floor(Math.random() * 3)) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
      default:
        return "rock";

    };

  }
  showWinner(){
    if(cpuLives === 0) {
      clearInterval(timer);
      winner = true;
      console.log("user is the winner!");
      this.setState({ winner: 'Gefeliciteerd jij bent de winnaar!', life: lives});

    } else if (lives === 0) {
      clearInterval(timer);
      winner = true;
      console.log("computer is the winner");
      this.setState({ winner: 'Helaas je heb te vaak verloren!', life: 0});
    }

  }

  render() {
    if(winner === true) {
      return (
        <Winner message={this.state.winner} life={this.state.life} restart={this.restart} lastWeapon={this.state.weapon} />
    )} else {
    return (
      <div>
        <Results message={this.state.message} />

          <div className="row">
            <div className="col text-right">
              <div className="userLabel">
                {this.props.userName}
              </div>
            </div>
            <div className="col vs">
              VS
            </div>
            <div className="col cpu">
              <div className="contestantLabel">
                Computer
              </div>
            </div>
          </div>
          <div className="row">
                  <div className="col">
                      <div className="col mx-auto">
                      </div>
                      <div className="w-100"></div>
                      <div className="placeHolder rounded">
                        <div className="overlay"></div>
                        <Weapon tool={this.state.weapon} />
                      </div>
                      <Life player='user' />
                  </div>
                  <div className="col">
                    <div className="col mx-auto">
                    </div>
                    <div className="w-100"></div>
                      <div className="placeHolder rounded">
                        <div className="overlay"><Reaction action={this.state.action} /></div>
                        <Weapon tool={this.state.weaponCPU}/>
                    </div>
                    <Life player='cpu' />
                  </div>
          </div>
          <div className="row">
              <div className="col grey bottom">
                <div className="col">
                  <Counter counter={this.state.counter} />
                </div>
                <div className="col">
                  <span className="keuze">Maak je keuze</span>
                </div>
                  <Buttons onClickRock={this.handleRockClick} onClickPaper={this.handlePaperClick} onClickScissors={this.handleScissorsClick}  />
                </div>
              </div>
        </div>

  )}
  }

}

export default Players;
