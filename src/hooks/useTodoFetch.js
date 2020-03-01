import React, { useState, useEffect } from 'react'


function useTodoFetch() {

    const [todo, setTodo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


     useEffect( async () => {


        setIsLoading(true);

        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

        const todo = await response.json();

        setTodo(todo);
        setIsLoading(false);


        return () => {};
    }, [])


    return {todo , isLoading};

}

export default useTodoFetch;