import React, { Component } from 'react'
import TodoForm from './TodoForm'

import TodoList from './TodoList'
import TodoFetch from './TodoFetch'

import {withRouter} from 'react-router-dom'

class Todo extends Component {


    state = {

        todos: []

    }

    saveTodo = todo => {

        this.setState(prevState => {

            return {

                todos: [...prevState.todos, todo]

            }

         }
        )

    }



    render() {

        return (

            <div>

                <TodoForm saveTodo={this.saveTodo} />
                <TodoList data={this.state.todos} />


                <TodoFetch />

            <button className="btn btn-success" onClick={() => this.props.history.push('/user')}> User Page</button>

            </div>


        )



    }


}
// this.props.history.push('/user') history withrouter ile geliyor burdaki parametre ile kullanılıyor.
export default withRouter(Todo);