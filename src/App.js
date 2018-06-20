import React, { Component } from 'react';
import './App.css';

import scrollToComponent from 'react-scroll-to-component';

import Header from './components/Header/Header';
import Label from './components/Label/Label';
import rules from './rules.png';
import StartButton from './components/StartButton/StartButton';
import Choice from './components/Choice/Choice';
import Game from './components/Game/Game';

import scissors from './components/Choice/scissors.png';
import paper from './components/Choice/paper.png'
import rock from './components/Choice/rock.png'
import lizard from './components/Choice/liz.png'
import spock from './components/Choice/spock.png'
import blank from './components/Choice/blank.png'

class App extends Component {

  constructor() {
    super();
    this.state = {
      started: false,
      player_choice: blank,
      computer_choice: blank,
      player_points: 0,
      computer_points: 0,
      winner: ''
    };
  }

  onButtonClick = () => {
    scrollToComponent(this.Game, { align: 'top', duration: 1000 });
    this.setState({
      started: false,
      player_choice: blank,
      computer_choice: blank,
      player_points: 0,
      computer_points: 0,
      winner: ''
    })
    this.setState({ started: true });
  }

  onPlayerChoice = (img) => {
    this.setState({ player_choice: img })
    return img;
  }

  setComputerChoice = () => {
    let picks = [scissors, paper, rock, lizard, spock];
    let pick = picks[Math.floor(Math.random() * 5)];
    this.setState({ computer_choice: pick });
    return pick;
  }

  playTurn = (img) => {
    let player = this.onPlayerChoice(img);
    let computer = this.setComputerChoice();

    if (player == computer) {
      this.setState({winner: 'draw'})
    } else if (player == scissors && computer == paper ||
      player == scissors && computer == lizard ||
      player == paper && computer == rock ||
      player == paper && computer == spock ||
      player == rock && computer == scissors ||
      player == rock && computer == lizard ||
      player == lizard && computer == paper ||
      player == lizard && computer == spock ||
      player == spock && computer == rock ||
      player == spock && computer == scissors) {
      let p_points = this.state.player_points;
      this.setState({ player_points: p_points + 1 });
      this.setState({winner: 'player'});
    } else {
      let c_points = this.state.computer_points;
      this.setState({ computer_points: c_points + 1 });
      this.setState({winner: 'computer'});
    }

  }


  render() {
    const size = '250px';
    return (
      <div className='App'>
        <Header />
        <div className='labels--group'>
          <Label name='rock' color='grey' />
          <Label name='paper' color='pink' />
          <Label name='scissors' color='blue' />
          <Label name='lizard' color='green' />
          <Label name='spock' color='light-blue' />
        </div>
        <img className='rules' src={rules} alt='rules' width='400px' height='400px'></img>
        <div className='game' ref={(section) => { this.Game = section; }}>
          <StartButton onButtonClick={this.onButtonClick} />
          {(!this.state.started) ? <div></div> : <div>

            <h1>Choose: </h1>
            <div className='choices--group'>
              <Choice img={scissors} playTurn={this.playTurn} />
              <Choice img={paper} playTurn={this.playTurn} />
              <Choice img={rock} playTurn={this.playTurn} />
              <Choice img={lizard} playTurn={this.playTurn} />
              <Choice img={spock} playTurn={this.playTurn} />
            </div>
            <div className='board'>
              <div className='player'>
                Player:
                <img src={this.state.player_choice} className='choice-player' alt='players_choice' width={size} height={size}></img>
              </div>
              <div className='points-container'>
                <div className='points'>
                  {this.state.player_points}
                </div>
                <div className='points'>
                  :
              </div>
                <div className='points'>
                  {this.state.computer_points}
                </div>
              </div>
              <div className='player'>
                Opponent:
                <img src={this.state.computer_choice} className='choice-comp' alt='opponents_choice' width={size} height={size}></img>
              </div>
            </div>
            <div className='winner'>
              {(this.state.winner == 'draw') ? <div className='draw'>DRAW</div> : 
              (this.state.winner == 'player') ? <div className='player_won'>YOU WIN!</div> :
              (this.state.winner == 'computer') ? <div className='comp_won'>YOU LOSE!</div> : 
              <div></div>}
            </div>
          </div>}
        </div>
      </div>
    );
  }
}

export default App;
