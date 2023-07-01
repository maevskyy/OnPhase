import { navLinks } from '../../assets/constants';
import logo from '../../assets/images/navbar/logo.svg';
import { NavStyles } from '../../style.js';

import NavBarItem from './NavBarItem';
import NavBarSearch from './NavBarSearch'
import NavBarUser from './NavBarUser'
const NavBar = () => {
  return (
    <nav className={`${NavStyles.adaptive} min-w-[4em]  h-[100vh] bg-[#333269] flex flex-col py-[1.5em] justify-between`}>
      <div className = 'self-center'>
        <img
          src={logo}
          alt=""
          className={`${NavStyles.logoIconShape}`}
        />
      </div>
      <ul className="flex flex-col gap-[1.8em] w-full">
        {navLinks.map((el) => (
          <NavBarItem
            title={el.title}
            img={el.img}
            link={el.link}
            key={el.id}
          />
        ))}
        <NavBarSearch/>
      </ul>
      <div className="">
      <NavBarUser/>

      </div>
    </nav>
  );
};

export default NavBar;
