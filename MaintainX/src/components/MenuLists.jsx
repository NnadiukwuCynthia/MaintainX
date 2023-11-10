 import { NavLink } from "react-router-dom"
 import { FaInbox, FaRegFileAlt, FaCompressArrowsAlt } from "react-icons/fa"
 import {FaGears} from "react-icons/fa6"
 import {FiBarChart2, FiUsers} from "react-icons/fi"
 import {HiMiniInboxArrowDown, HiMiniListBullet} from "react-icons/hi2"
 import {BiSolidMessageRounded, BiSolidPurchaseTagAlt} from "react-icons/bi"
 import {SlSpeedometer, SlLocationPin} from "react-icons/sl"
 import {ImDrawer} from "react-icons/im"

 const MenuLists = () => {
   return (
     <div>
        <NavLink className={({isActive}) => isActive ? 'active' : 'menuLists'} to='/workorders'> <span><FaInbox/></span>Work Order</NavLink>
        <NavLink className={({isActive}) => isActive ? 'active' : 'menuLists'} to='/purchaseorders'><span><FaRegFileAlt/></span>Purchase Orders</NavLink>
        <NavLink className={({isActive}) => isActive ? 'active' : 'menuLists'} to='/reporting'><span><FiBarChart2/></span>Reporting</NavLink>
        <NavLink className={({isActive}) => isActive ? 'active' : 'menuLists'} to='/request'><span><HiMiniInboxArrowDown/></span>Request</NavLink>
        <NavLink className={({isActive}) => isActive ? 'active' : 'menuLists'} to='/assets'><span><FaCompressArrowsAlt/></span> Assets</NavLink>
        <NavLink className={({isActive}) => isActive ? 'active' : 'menuLists'} to='/messages'> <span><BiSolidMessageRounded/></span>Messages</NavLink>
        <NavLink className={({isActive}) => isActive ? 'active' : 'menuLists'} to='/categories'><span><BiSolidPurchaseTagAlt/></span>Categories</NavLink>
        <NavLink className={({isActive}) => isActive ? 'active' : 'menuLists'} to='/partinventory'><span><FaGears/></span>Part Inventory</NavLink>
        <NavLink className={({isActive}) => isActive ? 'active' : 'menuLists'} to='/procedureliberary'><span><HiMiniListBullet/></span>Procedure Liberary</NavLink>
        <NavLink className={({isActive}) => isActive ? 'active' : 'menuLists'} to='/meters'><span><SlSpeedometer/></span>Meter</NavLink>
        <NavLink className={({isActive}) => isActive ? 'active' : 'menuLists'} to= '/location'><span><SlLocationPin/></span>Location</NavLink>
        <NavLink className={({isActive}) => isActive ? 'active' : 'menuLists'} to= '/teams'><span><FiUsers/></span>Teams / Users</NavLink>
        <NavLink className={({isActive}) => isActive ? 'active' : 'menuLists'} to= '/vendor'><span><ImDrawer/></span>Vendor</NavLink>
     </div>
   )
 }
 
 export default MenuLists