import { NavLink } from 'react-router-dom';
import { NavStyles } from '../../style';

const NavBarItem = ({ title, link, img }) => {
  return (
    <li className="w-full">
      <NavLink
        to={link}
        className={`${NavStyles.itemForm} `}
      >
        <div className={`${NavStyles.navIconShape} `}>{img}</div>
        <h3 className="text-xs text-[#C0BEFF]">{title}</h3>
      </NavLink>
    </li>
  );
};

export default NavBarItem;
