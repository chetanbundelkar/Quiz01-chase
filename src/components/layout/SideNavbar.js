import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import {
  AiOutlineHome,
  AiFillHome,
  AiOutlineSetting,
  AiTwotoneSetting,
} from 'react-icons/ai';
import { BsSearch, BsBook, BsBookHalf } from 'react-icons/bs';
import {
  RiDiscussLine,
  RiDiscussFill,
  RiLoginCircleFill,
  RiLoginCircleLine,
} from 'react-icons/ri';
import { MdOutlineExplore, MdExplore } from 'react-icons/md';
import { NavLink } from 'react-router-dom';


const SideNavbar = ({ children }) => {
  return (
    <div className='fixed flex w-full' >
      <ColorModeSwitcher justifySelf="flex-end" top={'2'}  />
      <div className=" flex flex-col w-[20%] h-screen p-3 shadow">
        <div className="space-y-8">
          <div className="flex items-center pl-2 mt-5">
            <h2 className="text-2xl font-bold font-serif">Quiz App</h2>
          </div>

          <div className="flex-1 mt-20 ">
            <ul className="pt-2 pb-4 mt-10 space-y-3 text-sm">
              <li className="rounded-sm">
                <NavLink
                  to={'/'}
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <AiFillHome className="text-2xl" />
                  <span className="text-lg">Home</span>
                </NavLink>
              </li>
              <li className="rounded-sm">
                <NavLink
                  to={'/'}
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <BsSearch className="text-2xl" />
                  <span className="text-lg">Search</span>
                </NavLink>
              </li>
              <li className="rounded-sm">
                <NavLink
                  to={'/discus'}
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <RiDiscussLine className="text-2xl" />
                  <span className="text-lg">Discus</span>
                </NavLink>
              </li>
              <li className="rounded-sm">
                <NavLink
                  to={'/explore'}
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <MdOutlineExplore className="text-2xl" />
                  <span className="text-lg">Explore</span>
                </NavLink>
              </li>
              <li className="rounded-sm">
                <NavLink
                  to={'/test'}
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <BsBook className="text-2xl " />
                  <span className="text-lg ">Test</span>
                </NavLink>
              </li>
              <li className="rounded-sm">
                <NavLink
                  to={'/setting'}
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <AiOutlineSetting className="text-2xl " />
                  <span className="text-lg ">Settings</span>
                </NavLink>
              </li>
              <li className="rounded-sm">
                <NavLink
                  to={'/login'}
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <RiLoginCircleLine className="text-2xl" />
                  <span>Login</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container w-full h-screen overflow-y-scroll">
        {children}
      </div>
    </div>
  );
};

export default SideNavbar;
