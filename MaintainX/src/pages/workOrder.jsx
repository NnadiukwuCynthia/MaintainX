import {useState} from 'react'
import CalendarData from '../components/workOrder/calendar'
import Header from "../components/workOrder/header"
import Todo from '../components/workOrder/Todo'

const WorkOrder = () => {
  const [showIconContent, setShowIconContent] = useState('todo')


  return (
    <div className="workOrder">
      <Header setShowIconContent={setShowIconContent}/>
      {showIconContent === "todo" && <Todo/>}
      {showIconContent === "calendar" && <CalendarData/>}
    </div>
  )
}

export default WorkOrder