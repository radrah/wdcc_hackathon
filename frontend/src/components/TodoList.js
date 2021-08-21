function TodoList({ todos }) {
    return todos.map(function(todo, index) {
        return (
            <StyledDiv
            <input type "checkbox" value={todo.isComplete} />
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
        )
    })
}

export default TodoList;