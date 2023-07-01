

export const NavStyles = {
  adaptive: `Laptop:text-[18px] MyLaptop:text-[16px] IP:text-[20px]`,
  navIconShape: `min-h-[1.2em] min-w-[1.2em] max-w-[1.2em] max-h-[1.2em] text-[#C0BEFF]`, // pls, pretend you didn't see it
  logoIconShape: `min-w-[2.2em] min-h-[2.2em] max-w-[2.2em] max-h-[2.2em] `, // same
  itemForm: `hover:bg-slate-100/5 py-2 ease-in-out duration-500
               flex flex-col items-center aria-[current=page]:bg-sky-100/10 border-l-[2px] border-transparent mr-[2px]
               aria-[current=page]:border-red-500 `,
};

export const headStyles = {
  button: `px-[14px] py-[8px]  font-semibold  text-sm tracking-wide rounded-[3px] text-[#5855D6] 
    hover:opacity-80  active:text-[#27268b] active:bg-[#27268b]/20 duration-300 easy-in-out`,
};

export const ScheduleStyle = {
  input: `border-gray-300 border-[1px] w-full outline-none rounded-sm placeholder:italic text-[12px] p-[.3em] px-[1em]`
};



export const AuthStyles = {
  input: "bg-inherit  outline-none border-b-2 border-gray-300 py-1"
}
