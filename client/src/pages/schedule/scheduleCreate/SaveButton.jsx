import { headStyles } from "../../../style";
const SaveButton = ({ saveHandler }) => {
	return (
		<article className="flex">
			<button
				type="submit"
				className={`${headStyles.button} bg-[#5855D6]/20 mr-2`}
				onClick={saveHandler}
			>
				Save
			</button>
		</article>
	);
};

export default SaveButton;
