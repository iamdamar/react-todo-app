import React, { useState } from "react"

const TodoForm = ({addTodo}) => {
    const [title, setTitle] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        addTodo(title)
    }

    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    console.log(title)

    return (
        <div style={styles.container}>
            <form 
                onSubmit={(event) => {
                    handleSubmit(event)
                }}>
                <input
                    type="text"
                    placeholder="Add your Todo"
                    style={styles.formInput}
                    onChange={(event) => {
                        handleChangeTitle(event)
                    }}
                />
                <button style={styles.button}>
                    Add Todo
                </button>
            </form>
        </div>
    )
}

const styles = {
    container: {
        marginBottom: '32px',
    },
    formInput: {
        height: '48px',
        width: '40%',
        fontSize: '16px',
        padding: '0 16px',
        borderRadius: '6px 0 0 6px',
        boxShadow: '5px 10px 5px rgba(0, 0, 0, 0.15)',
        backgroundColor: '#ffffff',
        borderColor: 'rgba(0, 0, 0, 0)',
    },
    button: {
        height: '52px',
        fontSize: '16px',
        borderRadius: '0 6px 6px 0',
        padding: '0 16px',
        marginLeft: '-2px',
        boxShadow: '5px 10px 5px rgba(0, 0, 0, 0.15)',
        backgroundColor: 'rgba(13, 18, 130, 1)',
        color: 'rgba(238, 237, 237, 1)',
        borderColor: 'rgba(0, 0, 0, 0)',
    },
}

export default TodoForm