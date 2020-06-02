import React,{Component}from 'react'

class OtherCard extends Component{
 
    render(){

        return(
            <div className="otherCard">
                <img src={this.props.userInfo.avatar_url} alt="user"/>
                <h3>{this.props.userInfo.login}</h3>
                </div>
        )
    }
}

export default OtherCard