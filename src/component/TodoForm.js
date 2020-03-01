import React, { Component } from 'react'


class TodoForm extends Component {

    state = {
        title : '',
        description : ''


    };


    handleSubmit = () => {

        this.props.saveTodo(this.state)

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


export default TodoForm;