import { GoColumns, GoTable } from 'react-icons/go';
import { IoCalendarClearOutline } from 'react-icons/io5';
import Button from '../Button';
import PropTypes from 'prop-types';
import Filter from './Filter';

const Header = ({ setShowIconContent }) => {

  const toggleIconContent = (action) => {
    setShowIconContent(action);
    console.log('buttons clicked');
  };

  return (
    <div className="header">
      <div className='header__container'>
        <h1 className="header__container__text">Work Orders</h1>
        <div className='header__btnContainer'>
          <Button className='headerBtn' onClick={() => toggleIconContent('todo')}> <GoColumns /></Button>
          <Button className='headerBtn' onClick={() => toggleIconContent('table')}><GoTable /></Button>
          <Button className='headerBtn' onClick={() => toggleIconContent('calendar')}><IoCalendarClearOutline /></Button>
        </div>
      </div>
      <div className="header__filterContainer">
          <Filter/>
      </div>
    </div>
  );
};

Header.propTypes = {
  setShowIconContent: PropTypes.func.isRequired,
};

export default Header;
