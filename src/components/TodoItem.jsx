import React from "react"

const TodoItem = ({todo, toggleCompleted, deleteTodo}) => {
    const getTodoTitleStyle = () => {
        if (todo.completed === true) {
            return {textDecoration: 'line-through', 
                    backgroundColor: '#ffffff',
                    color: 'rgba(238, 237, 237, 1)'}
        } else {
            return {textDecoration: 'none', 
                    backgroundColor: '#ffffff'}
        }
    }

    return (
    <div style={styles.todoItem}>
        <input 
            type="checkbox" 
            style={styles.checkbox} 
            onChange={() => toggleCompleted(todo.id)} />
        <p style={getTodoTitleStyle()}>{todo.title}</p>
        <button 
            style={styles.button}
            onClick={() => deleteTodo(todo.id)}>x</button>
    </div>
    )

}

const styles = {
    todoItem: {
        fontSize: '18px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        backgroundColor: '#ffffff',
        borderRadius: '6px',
        marginTop: '10px',
    },
    checkbox: {
        marginRight: '10px',
        height: '18px',
        width: '18px',
    },
    button: {
        backgroundColor: 'rgba(215, 19, 19, 1)',
        color: '#fff',
        height: '30px',
        width: '30px',
        borderRadius: '100%',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
    },
}

export default TodoItem