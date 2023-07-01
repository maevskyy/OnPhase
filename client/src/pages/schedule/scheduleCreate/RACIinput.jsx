
import {
	MdOutlineKeyboardArrowDown,
	MdOutlineKeyboardArrowUp,
} from 'react-icons/md';
const RACIinput = ({setIsOpenRACI, isOpenRACI}) => {
  return (
    <article className="mt-1 flex flex-col gap-[2px] h-fit ">
    <div
        className="flex gap-[2px] w-fit items-center hover:cursor-pointer  select-none"
        onClick={() => setIsOpenRACI(!isOpenRACI)}
    >
        <h4 className="text-[12px]">Raci</h4>
        {isOpenRACI ? (
            <MdOutlineKeyboardArrowUp className="mt-[1px]" />
        ) : (
            <MdOutlineKeyboardArrowDown className="mt-[1px]" />
        )}
    </div>
</article>  )
}

export default RACIinput
