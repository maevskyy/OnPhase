import { useNavigate } from 'react-router-dom';

const UserHeader = ({ setDeleteRefresh }) => {
	const navigate = useNavigate();
	const logoutHandler = () => {
		document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
		navigate('/');
		setDeleteRefresh((prev) => !prev);
	};
	return (
		<header className="flex flex-col">
			<div className="flex justify-between">
				<h3 className="font-bold text-lg text-gray-700">OnPhase Account</h3>
				<h3
					onClick={logoutHandler}
					className="px-5 py-2 text-[#5855D6] bg-[#5855D6]/20 rounded-md font-semibold hover:cursor-pointer"
				>
					Sign out
				</h3>
			</div>
			<div className="border-b w-full border-gray-500 mt-5"></div>
		</header>
	);
};

export default UserHeader;
