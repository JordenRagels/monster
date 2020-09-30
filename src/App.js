import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box'; 

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }


render() {
  const { monsters, searchField } = this.state;
  const filteredMonsters = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
  return (
    <div className='App'>
    <h1> Monster Rolodex </h1>
    <SearchBox placeholder={'search monsters'} onSearchChange={this.onSearchChange}/>
    <CardList monsters={filteredMonsters}/>
    </div>
  );
}
}

export default App;
