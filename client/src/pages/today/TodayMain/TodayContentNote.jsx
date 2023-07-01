import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const TodayContentNote = ({ text, setTextAtea, textAreaBlur }) => {
	return (
		<main className="border-[1px] border-gray-300 rounded-[8px] h-full flex flex-col items-center justify-center bg-white shadow-md">
			<textarea
				className=" border-y-[1.5px] h-[80%] w-full outline-none p-3 resize-none"
				onBlur={textAreaBlur}
				value={text}
				onChange={(e) => setTextAtea(e.target.value)}
			/>
		</main>
	);
};

export default TodayContentNote;
