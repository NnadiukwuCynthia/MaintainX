import { Outlet } from "react-router-dom"
import MenuLists from "./MenuLists"


const Sidebar = () => {
  return (
    <div>
      <div><MenuLists/></div>

      <Outlet/>
    </div>
  )
}

export default Sidebar