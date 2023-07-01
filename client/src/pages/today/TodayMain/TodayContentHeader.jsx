import { headStyles } from "../../../style";
import moment from "moment";

const TodayContentHeader = ({title, date, hourFrom}) => {
  const newMoment = moment(date);
  return (
    <header className="flex justify-between">
      <article className="flex items-center">
        <div className="flex flex-col ">
          <h1 className="font-bold text-lg">{title}</h1>
          <p className="text-xs text-gray-400 font-semibold">
            {newMoment.format('dddd, DD MMM')} {hourFrom}
          </p>
        </div>
      </article>
      <article className="flex gap-2 items-center">
        <a
          href="#"
          className={`${headStyles.button} bg-white text-[20px] px-5 `}
        >
          Files
        </a>
        <div className="border-l-[2px] h-[80%] border-gray-300"></div>
        <a
          href="#"
          className={`${headStyles.button} bg-white text-[20px] px-5 `}
        >
          Join
        </a>
      </article>
    </header>
  );
};

export default TodayContentHeader;
