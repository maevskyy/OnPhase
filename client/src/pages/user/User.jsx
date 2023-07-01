import UserHeader from './UserHeader';
import UserMain from './UserMain';

const User = ({setDeleteRefresh}) => {
	return (
		<div className="w-full h-[100vh] p-7 px-[10em] flex flex-col gap-10">
			<UserHeader setDeleteRefresh={setDeleteRefresh} />
			<UserMain />
		</div>
	);
};

export default User;
