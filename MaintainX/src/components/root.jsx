import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
const Root = () => {
  return (
    <div className="root">
    <Sidebar/>

    <Outlet/>
    </div>
  )
}

export default Root