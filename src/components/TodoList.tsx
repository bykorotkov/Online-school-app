import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const TodoList: React.FC = () => {
    const {error,limit,loading,page,todos} = useTypedSelector(state => state.todo)
    const {fetchTodos, setTodoPage} = useActions()
    const pages = [1,2,3,4,5]

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])


    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    
  return (
    <div>
        <h1>Official list of <span>Todos</span> </h1>
        {todos.map(todo => 
            <div key={todo.id}>{todo.id} - {todo.title}</div>       
        )}
        <div style={{display: 'flex', margin: 10}}>
           {pages.map(p => 
            <div onClick={() => setTodoPage(p)} style={{border: p === page ? '2px solid blue' : '1px solid gray', padding: 10}}>
                {p}
            </div>
        )} 
        </div>
        
    </div>
  )
}

export default TodoList