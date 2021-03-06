import React, { Component } from 'react'
import { connect } from "react-redux";


class TodoList extends Component {

    render() {

        return (

            <ul>

                {this.props.todos.map(todo => {

                    return <li className='list-group-item'>{todo.title}</li>

                }
                )}

            </ul>

        )
    }
}

const mapStateToProps = store => {

    return {
        todos : store.todo.todos
    }

};

export default connect(mapStateToProps)(TodoList);