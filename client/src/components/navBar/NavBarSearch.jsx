import { FaSearch } from 'react-icons/fa';
import { NavStyles } from '../../style';
import { useContext } from 'react';
import { SearchContext } from '../context/searchContext';

const NavBarSearch = () => {
  const toggle = useContext(SearchContext)

  return (
    <li className={`${NavStyles.itemForm} hover:cursor-pointer`} onClick={() => toggle(prev => !prev)}>
      <div className={`${NavStyles.navIconShape}`}>
        <FaSearch />
      </div>
      <h3 className="text-xs text-[#C0BEFF] ">Search</h3>
    </li>
  );
};

export default NavBarSearch;
