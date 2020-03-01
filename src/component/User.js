import React, { Component } from "react";
import { withRouter } from "react-router-dom";


class User extends Component{

    render(){

        return(

            <div>
                <h1> user page</h1>
                <button className='btn btn-danger' onClick={() => this.props.history.goBack()}>Geri git</button>

            </div>

        )

    }

}

export default withRouter(User);