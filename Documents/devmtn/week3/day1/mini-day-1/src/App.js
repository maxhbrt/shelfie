import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      friends: [],
      pictures: "",
      name: ""
      
    };
    this.updatePicture = this.updatePicture.bind(this);
    this.updateName = this.updateName.bind(this);
    this.addFriend = this.addFriend.bind(this)
  }

  updatePicture(event){
    this.setState({
      picture: event.target.value
    });
  }

  updateName(event){
    this.setState({
      name: event.target.value
    });
  }

  addFriend(){
    const myNewFriendArray = [...this.state.friends, 
      {name: this.state.name, picture: this.state.picture}]
    this.setState({
      friends: myNewFriendArray,
      name: "",
      picture: ""
    });

    
  }
  render(){
  const myMappedFriends = this.state.friends.map(friend => {
    return <div key={friend.picture}>
    <img width="100px" src={friend.picture}/>
    <span>{friend.name}</span>
    </div>
  })
   return( 
   <div className="App">
     <label>Image URL</label>
     <input onChange={this.updatePicture}  value={this.state.picture}/>

     <label>Friend Name</label>
     <input onChange={this.updateName}  value={this.state.name}/>

     <button onClick={this.addFriend}>Add a Friend</button>
{myMappedFriends}

   </div>
   )
  };
}

export default App;
