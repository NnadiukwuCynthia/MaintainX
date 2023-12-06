import { FiUser, FiSettings } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { VscWand } from "react-icons/vsc";




const FilterBtns = () => {
  return ( 
    <div className="filterBtns">
        <div className="filterBtns__threeBtn">
            <button className="filterBtns__threeBtn__button"><FiUser/> Assigned To</button>
            <button className="filterBtns__threeBtn__button"><FiSettings/> Assigned To</button>
            <button className="filterBtns__threeBtn__button"><FiSettings/>Priority</button>
            <button className="filterBtns__threeBtn__button"><GoPlus/> Add Filter</button>
        </div>
        <div className="filterBtns__oneBtn">
            <button className="filterBtns__oneBtn__button"><VscWand/>My Filters</button>
        </div>
    </div>      
      )

    }
 

export default FilterBtns