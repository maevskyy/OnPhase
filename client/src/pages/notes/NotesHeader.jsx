import { headStyles } from '../../style';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { nanoid } from '@reduxjs/toolkit';

const NotesHeader = () => {
	const [showFilters, setShowFilters] = useState(false);
	return (
		<header className="bg-white shadow-lg w-full p-4 px-10 flex justify-between items-center select-none">
			<section className="flex gap-2 items-center">
				<button onClick={''} className={`${headStyles.button} bg-[#5855D6]/20`}>
					Today
				</button>
				<button
					onClick={() => setShowFilters(!showFilters)}
					className={`${headStyles.button} ${
						!showFilters && 'text-black/50 bg-gray-100'
					} bg-[#5855D6]/20`}
				>
					Filters
				</button>
				<AnimatePresence>
					{showFilters && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<div className="flex gap-1">
								<div
									className={`${headStyles.button} bg-[#5855D6]/10 text-[#5855D6]/70  ml-[-5px] flex gap-1`}
								>
									Date
								</div>
								<div
									className={`${headStyles.button} bg-[#5855D6]/10 text-[#5855D6]/70  flex gap-1`}
								>
									Meeting
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</section>
			<section>
				<Link to={`/Notes/${nanoid()}`} className={`${headStyles.button}`}>
					Create Note
				</Link>
			</section>
		</header>
	);
};

export default NotesHeader;
