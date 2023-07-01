import { FaUserCircle } from 'react-icons/fa';
import { NavStyles } from '../../style';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import a7lina from '../../assets/image/alinaMG.jpg'

const NavBarUser = () => {
	const userImage = useSelector((el) => el.userReducer.user?.image);
	return (
		<Link to="/User" className={`${NavStyles.itemForm}  hover:cursor-pointer`}>
			{userImage ? (
				<img
					src={userImage}
					alt=""
					className="h-[1.7em] w-[1.7em] rounded-full object-cover"
				/>
			) : (
				<div className={'text-[#C0BEFF] '}>
					<FaUserCircle className="text-[27px]" />
				</div>
			)}
		</Link>
	);
};

export default NavBarUser;
