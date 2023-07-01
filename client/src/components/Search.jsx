import {useContext} from 'react'
import {FaSearch} from 'react-icons/fa'
import { SearchContext } from './context/searchContext'


const Serach = () => {
  const toggle = useContext(SearchContext)
  return (
    <article
    className="w-[100%] h-[100%] absolute flex justify-center items-center bottom-[2em] z-[51] "
    onClick={() => toggle(prev => !prev)}
  >
    <div
      className="w-[37em] h-[20em] bg-white pt-5 shadow-2xl rounded-lg"
      onClick={(e) => e.stopPropagation()}
    >
      <input
        type="text"
        className="w-full outline-none px-7 text-[18px] placeholder:text-gray-300"
        placeholder="Trying to search something? Just start typing "
      />
      <div className="border-b-[2px] border-gray-200 w-full mt-4 "></div>
      <div className="px-7 flex flex-col gap-5 mt-3">
        <h3 className="font-semibold text-gray-600">Search</h3>
        <div className="flex gap-3 items-center p-2 rounded-md hover:bg-gray-200 hover:cursor-pointer transition ease-in-out duration-500">
          <FaSearch className=" text-gray-400 text-[14px]" />
          <h3 className="text-sm text-gray-500 tracking-wide">
            Search meetings
          </h3>
        </div>
        <div className="flex gap-3 items-center p-2 rounded-md hover:bg-gray-200 hover:cursor-pointer transition ease-in-out duration-500">
          <FaSearch className=" text-gray-400 text-[14px]" />
          <h3 className="text-sm text-gray-500 tracking-wide">
            Search notes
          </h3>
        </div>
        <div className="flex gap-3 items-center p-2 rounded-md hover:bg-gray-200 hover:cursor-pointer transition ease-in-out duration-500">
          <FaSearch className=" text-gray-400 text-[14px]" />
          <h3 className="text-sm text-gray-500 tracking-wide">
            Search tasks
          </h3>
        </div>
      </div>
    </div>
  </article>  )
}

export default Serach