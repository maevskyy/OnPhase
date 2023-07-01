const RaciMain = () => {
	const usersData = [
		{ id: '1', name: 'rokmmmmmma' },
		{ id: '2', name: 'platon' },
		{ id: '3', name: 'mitya' },
		{ id: '4', name: 'nastya' },
		{ id: '5', name: 'egor' },
		// { id: '6', name: 'nikcdcsdcdscsdcsdcsdca' },
		// { id: '7', name: 'ilya' },
		// { id: '8', name: 'stat' },
	];
	return (
		<main
			className="border-[1px] border-gray-300 rounded-[8px] flex  h-full bg-white shadow-md "
			id="scrollbar"
		>
			<section className="w-1/4">
				<div className="w-full h-[17%] border-[1px] flex items-center justify-center" />
				{usersData.map((user) => (
					<div
						className="w-[100%] h-[17%] border-[1px] flex items-center justify-center"
						key={user.id}
					>
						<span className="">{user.name}</span>
					</div>
				))}
			</section>
			<section className="w-3/4 flex">
				{usersData.map((el, i) => (
					<div className="w-1/3 h-full" key={i}>
						<div className="w-full h-[17%] border-[1px] flex items-center justify-center">
							<div
								className="text-gray-500 mx-1 font-semibold break-words
                             "
							>
								{el.name}
							</div>
						</div>
						{usersData.map((user) => (
							<div
								className="w-full h-[17%] border-[1px] flex items-center justify-center"
								key={user.id}
							>
								{/* {user.name} */}
							</div>
						))}
					</div>
				))}
				{/* <div className="w-1/3 h-full">
					<div className="w-full h-[17%] border-[1px] flex items-center justify-center" />
					{usersData.map((user) => (
						<div
							className="w-ful h-[15%] border-[1px] flex items-center justify-center"
							key={user.id}
						>
							{user.name}
						</div>
					))}
				</div>
                <div className="w-1/3 h-full">
					<div className="w-full h-[15%] border-[1px] flex items-center justify-center" />
					{usersData.map((user) => (
						<div
							className="w-full h-[15%] border-[1px] flex items-center justify-center"
							key={user.id}
						>
							{user.name}
						</div>
					))}
				</div> */}
			</section>
		</main>
	);
};

export default RaciMain;

//border-[1px] border-gray-300 rounded-[8px] h-full flex flex-col items-center justify-center bg-white shadow-md
