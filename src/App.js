                                                                                                import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo';
import InProgress from './components/InProgress';
import Done from './components/Done'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.getStateFromProps();
    this.deleteCardHandler = this.deleteCardHandler.bind(this);
    this.addCardHandler = this.addCardHandler.bind(this);
    this.moveCardHandler = this.moveCardHandler.bind(this);
  }

  addCardHandler(listname) {
    const cardName = prompt('Please enter the card name');
    const currlistItems = this.state.list.filter(list => list.name === listname);
    if (cardName) {
      currlistItems[0].cards.push(cardName);
      
      this.setState({
        list: [...this.state.list]
      })
    }
  }

  deleteCardHandler(listname, filterCard) {
    this.state.list.filter(list => list.name === listname)
    .map((list) => {
     for(let i=0; i< list.cards.length; i++) {
       if(list.cards[i] === filterCard) {
        list.cards.splice(i,1);
       }
     }
     return ;
    })
    this.setState({
      list: [...this.state.list]
    })
  }

  moveCardHandler(listname, moveCard) {
    const cardName = prompt('Please enter the list name wherein to move card');
    this.state.list.map((list) => {
        if(list.name === listname) {
          for(let i=0; i< list.cards.length; i++) { 
            if(list.cards[i] === moveCard){
              list.cards.splice(i,1);
            }
          }
        }
        if(cardName && list.name === cardName) {
            list.cards.push(moveCard);
        }
    })
    this.setState({
      list: [...this.state.list]
    })
  }

getStateFromProps() {
  return {
    list: [{ name: 'Todo', cards: [] },{name: 'InProgress', cards: []},{name: 'Done', cards: []}]
  }
}
  
  render() {
    return (
      <div className="App">
        <Todo moveCardHandler = {this.moveCardHandler} addCardHandler = {this.addCardHandler} listItems={this.state.list} deleteCardHandler={this.deleteCardHandler} />
        <InProgress moveCardHandler = {this.moveCardHandler} addCardHandler = {this.addCardHandler} listItems={this.state.list} deleteCardHandler={this.deleteCardHandler} />
        <Done moveCardHandler = {this.moveCardHandler} addCardHandler = {this.addCardHandler} listItems={this.state.list} deleteCardHandler={this.deleteCardHandler} />
      </div>
    );
  }
}

export default App;
