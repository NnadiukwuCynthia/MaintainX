import { useState } from "react";


const Content = () => {
      const [workOrderContent, setWorkOrderContent] = useState("todo");

     const handleIconBtns = () => {
        setWorkOrderContent(workOrderContent)
     } 
    return (
    <div>
        <div>
            {}
        </div>
    </div>
  )
}

export default Content