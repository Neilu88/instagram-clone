import Image from "next/image"
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline"

import { HomeIcon } from "@heroicons/react/solid"

const Header = () => {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl items-center mx-5 xl:mx-auto">
        {/* Left */}
        <div className="hidden lg:inline-grid cursor-pointer select-none">
          <h1 className="text-3xl font-spring">Neilugram</h1>
        </div>
        <div className="relative w-10 h-10 lg:hidden cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
            draggable={false}
          />
        </div>

        {/* Center */}
        <div className="max-w-xs">
          <div className="mt-1 relative p-3 rounded-md">
            <div className="pl-3 absolute inset-y-0 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        {/* Right */}

        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn rotate-45 mb-1" />
            <div className="absolute -top-1.5 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center text-white justify-center animate-pulse">
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />

          <img
            src="https://links.papareact.com/3ke"
            alt="profile pic"
            draggable={false}
            className="h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}
export default Header
