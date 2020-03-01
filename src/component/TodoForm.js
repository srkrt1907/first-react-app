import React, { Component } from 'react'
import { connect } from "react-redux";

import { addTodo } from "../redux/modules/todo/todo.action";

class TodoForm extends Component {

    state = {
        title : '',
        description : ''


    };


    handleSubmit = () => {

        this.props.addTodo(this.state)

    };


    render() {

        console.log(this.state);

        return (

            
            <form>
                <div className="form-group">
                    <label hmtlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                    onChange={event => this.setState({ title : event.target.value})}
                    value={this.state.title}
                    
                     />
                </div>
                <div className="form-group">
                    <label hmtlFor="exampleInputPassword1">Password</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password"
                    
                    onChange={event => this.setState({ description : event.target.value})}
                    value={this.state.description}

                     />
                </div>

                <button type="button" className="btn btn-primary" onClick = {this.handleSubmit}>Kaydet</button>
            </form>
        )

    }



}


const mapDispatchToProps = {
    addTodo
}

// null parameter degeri okumak icin 
export default connect(null,mapDispatchToProps)(TodoForm);