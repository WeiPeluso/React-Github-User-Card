import React,{Component} from 'react';
import './App.css';
import Card from './components/Card'
import OtherCard from './components/OtherCard'
import axios from 'axios'

class App extends Component {

  state={
    user: "weipeluso",
    userInfo: {},
    followers:[],
    following:[],
  }

  componentDidMount(){
     axios.get(`https://api.github.com/users/${this.state.user}`)
       .then((res)=>{
         console.log(res.data)
        
         this.setState({
           userInfo:res.data
         
         })
       })
       .catch(err=>{console.log(err)})

       axios.get(`https://api.github.com/users/${this.state.user}/followers`)
       .then((res)=>{
        this.setState({
          followers:res.data
        
        })
        
       })
       .catch(err=>{console.log(err)})

       axios.get(`https://api.github.com/users/${this.state.user}/following`)
       .then((res)=>{
        this.setState({
          following:res.data
        
        })
        
       })
       .catch(err=>{console.log(err)})
  }

   componentDidUpdate(prePros,preState){
     if(this.state.user!==preState.user){

      axios.get(`https://api.github.com/users/${this.state.user}/followers`)
      .then((res)=>{
       this.setState({
         followers:res.data
       
       })
       
      })
      .catch(err=>{console.log(err)})

      axios.get(`https://api.github.com/users/${this.state.user}/following`)
      .then((res)=>{
       this.setState({
         following:res.data
       
       })
       
      })
      .catch(err=>{console.log(err)})




     }
   }

  handleChanges=(e)=>{
    this.setState({
      user:e.target.value
    })
  }

  fetchUser=()=>{
    axios.get(`https://api.github.com/users/${this.state.user}`)
       .then((res)=>{
        
         this.setState({
           userInfo:res.data
         
         })
       })
       .catch(err=>{console.log(err)})

  }
  render(){
    return (
      <div className="App">
        <h1>Hello Github Users</h1>
        <input type="text"
                value={this.state.user}
                onChange={this.handleChanges}
        />
        <button onClick={this.fetchUser}>Search By UserName</button>
       <Card userInfo={this.state.userInfo}/>
       <h2>Followers</h2>
       {this.state.followers.map((follower,index)=>{
         return <OtherCard userInfo={follower} key={index}/>
       })}
       <h2>Following</h2>
      {this.state.following.map((following,index)=>{
         return <OtherCard userInfo={following} key={index}/>
       })}
      </div>
    );
  }

}

export default App;
