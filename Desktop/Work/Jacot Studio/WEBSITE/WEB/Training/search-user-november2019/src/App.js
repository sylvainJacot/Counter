import React, { Component } from 'react';
import './App.css';
import {CardList} from './CardList/CardList';
import {SearchField} from './SearchField/SearchField';
import WhatIveLearn from './WhatIveLearnSection/WhatIveLearnCards/WhatIveLearnCards';

class App extends Component {
  constructor() {
    super();
    this.state = { 
        users:[],
        searchfield:'',
    } 
}

componentDidMount() {
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(jsonfile => this.setState({users:jsonfile}))
};

handleChange = (e) => {
  this.setState({searchfield: e.target.value}, () => console.log(this.state));
}

  render() {
    const {users, searchfield} = this.state;
    const usersfiltered = users.filter(user =>
      user.name.toLowerCase().includes(searchfield.toLowerCase())
    );

  return (
    <div className="App">
      <SearchField onChange={this.handleChange} />

      <CardList users={usersfiltered}/>

      <WhatIveLearn />

    </div>
  );
}
}

export default App;
