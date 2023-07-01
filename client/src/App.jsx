import { useEffect, useState } from 'react';
import axios from 'axios';
import Authentication from './pages/authentication/Authentication';
import { useDispatch, useSelector } from 'react-redux';
import { authUser } from './store/user';
import NavBar from './components/navBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import { navLinks } from './assets/constants';
import User from './pages/user/User';
import Search from './components/Search';
import { SearchContext } from './components/context/searchContext';
import { getAllSchedule } from './store/schedule';
import { getAllNotes } from './store/notes';
import NotesItem from './pages/notes/NotesItem';
import { getAllTasks } from './store/tasks';

const App = () => {
	axios.defaults.baseURL = 'http://localhost:7000';
	axios.defaults.withCredentials = true;
	const dispatch = useDispatch();
	const userState = useSelector((el) => el.userReducer.user);

	const [isSerchOpen, setIsSerchOpen] = useState(false);
	//!fix it
	const [_, setDeleteRefresh] = useState(false)
	useEffect(() => {
		if (document.cookie) {
			// axios.get('/user/fetchUser').then(res => console.log(res.data))
			dispatch(authUser());
		}
	}, []);
	useEffect(() => {
		dispatch(getAllTasks(userState.email));
		dispatch(getAllSchedule(userState.email));
		dispatch(getAllNotes(userState.email));
	}, [dispatch, userState.email]);

	return (
		<div className="w-full h-[100vh] bg-[#F0EFF5] overflow-hidden">
			{document.cookie ? (
				<div className="flex w-full">
					<SearchContext.Provider value={setIsSerchOpen}>
						<NavBar />
					</SearchContext.Provider>
					<Routes>
						{navLinks.map((el) => (
							<Route key={el.id} path={el.link} element={el.page} />
						))}
						<Route
							path="/User"
							element={<User setDeleteRefresh={setDeleteRefresh} />}
						/>
						<Route path="/Notes/:id" element={<NotesItem />} />
					</Routes>
					{isSerchOpen && (
						<SearchContext.Provider value={setIsSerchOpen}>
							<Search />
						</SearchContext.Provider>
					)}
				</div>
			) : (
				<Authentication setDeleteRefresh={setDeleteRefresh} />
			)}
		</div>
	);
};

export default App;
