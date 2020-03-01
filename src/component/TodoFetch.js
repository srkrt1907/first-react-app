
import React, { Component } from 'react'

class TodoFetch extends Component {


    state = {
        isLoading: false,
        todos: []

    }


    async componentDidMount() {

        this.setState({ isLoading: false })

        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

        const todo = await response.json();

        this.setState({ todo, isLoading: true })

    }


    render() {


        const { isLoading, todo } = this.state;


        if (!isLoading)
            return <div>Loading ...</div>

        return <div>


            return <p>{todo.userId} {todo.title}</p>


        </div>



    }

}

export default TodoFetch;