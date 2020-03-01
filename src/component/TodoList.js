import React, { Component } from 'react'


class TodoList extends Component {

    render() {

        return (

            <ul>

                {this.props.data.map(todo => {

                    return <li className='list-group-item'>{todo.title}</li>

                }
                )}

            </ul>

        )
    }
}


export default TodoList;