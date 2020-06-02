import React,{Component}from 'react'

class Card extends Component{
 
    render(){
        console.log(this.props.userInfo)
        return(
            <div className="card">
                <img src={this.props.userInfo.avatar_url} alt="user"/>
                <h3>{this.props.userInfo.name}</h3>
                <p>UserName:&nbsp;{this.props.userInfo.login}</p>     
                <p>Location:&nbsp;{this.props.userInfo.location}</p> 
                <p>Followers:&nbsp;{this.props.userInfo.followers}</p>  
                <p>Following:&nbsp;{this.props.userInfo.following}</p>
                <p>Bio:&nbsp;{this.props.userInfo.bio}</p>
                    
                </div>
        )
    }
}

export default Card