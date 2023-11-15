import TodoBtn from "./todoBtn"
import TodoFilter from './todoFilter';

const Todo = () => {
  return (
    <div className="todo">
        <div className="todo__saved-Content">
            <TodoBtn/>
            <div className='todo__saved-ContentFilter'>
            <TodoFilter  />
            </div>
        </div>
        <div className="todo__create-content"></div>
    </div>
  )
}

export default Todo