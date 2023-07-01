const TodayContentButton = ({activeWindow, handleWindowToggle, text}) => {
	return (
		<button
			className={`${
				activeWindow === text
					? 'text-[#5855D6] border-[#5855D6]/50 '
					: 'text-gray-400 border-red border-transparent'
			} w-[3em] font-semibold border-b-[2px] `}
			onClick={() => handleWindowToggle(text)}
		>
			{text}
		</button>
	);
};

export default TodayContentButton;
