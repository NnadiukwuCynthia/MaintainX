import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Contact from "./Contact"
const Root = () => {
  return (
    <div className="root">
    <div>
    <Sidebar/>
    
    <Contact/>
    </div>

    <Outlet/>
    </div>
  )
}

export default Root