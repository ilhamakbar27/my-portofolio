import { cn } from "@/utils/cn";

export const Navbar = () => {
  return (
    <div className="flex justify-center mt-28 fixed z-20 ">
      <div className="text-lg tracking-tight rounded-full  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 to bg-gray-400 w-[300px] text-center h-[50px] font-thin  flex justify-center items-center">
        <ul className="flex justify-between font-[300] gap-6  text-center">
          <li className="hover:text-gray-200 cursor-pointer  transition-all ease-in-out duration-200">
            Home
          </li>
          <li className="hover:text-gray-200 transition-all cursor-pointer ease-in-out duration-200">
            About
          </li>
          <li className="hover:text-gray-200 transition-all cursor-pointer ease-in-out duration-200">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};
