import {GoColumns, GoTable} from 'react-icons/go'
import {IoCalendarClearOutline} from 'react-icons/io5'
import Button from '../Button';


const Header = () => {
  return (
    <div className="header">
       <div className='header__container'>
          <h1 className="header__container__text">Work Orders</h1>
          <div className='header__btnContainer'>
            <Button className='headerBtn'> <GoColumns/></Button>
            <Button className='headerBtn'><GoTable/></Button>
            <Button className='headerBtn'><IoCalendarClearOutline/></Button>
          </div>
       </div>
    </div>
  )
}

export default Header