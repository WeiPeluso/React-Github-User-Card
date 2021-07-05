import React,{Component}from 'react'
import './Card.css'
class OtherCard extends Component{
 
    render(){

        return(
            <div className="card">
                <img className="photo" src={this.props.userInfo.avatar_url} alt="user"/>
                <h3>{this.props.userInfo.login}</h3>
                </div>
        )
    }
}

export default OtherCard