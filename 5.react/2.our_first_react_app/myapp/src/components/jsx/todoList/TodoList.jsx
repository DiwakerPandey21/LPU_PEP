
import './TodoList.css'

function TodoList(){

    const todoList = [
        {
            todoText: "Go to Gym",
            isCompleted: true,
        },
        {
            todoText: "Buy Glocery",
            isCompleted: true,
        },
        {
            todoText: "Learn React",
            isCompleted: false,
        }
    ]

    return <div class="todo-container">
        <h1>My Todo List </h1>
        <ul className="todo-list">
            
        {todoList.map((todos)=>{
                return <li className={`todo-item ${todos.isCompleted ? 'completed': ''}`}>
                    <span>{todos.todoText}</span>
                    <input type="checkbox" defaultChecked={todos.isCompleted}/>
                </li>
        })}
        </ul>
    </div>
}

export default TodoList