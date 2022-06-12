import React from 'react'
import AirbnbLogo from '../assets/Airbnb_Logo.png'
import {
    SearchIcon,
    GlobeAltIcon, MenuIcon, UserCircleIcon,
} from '@heroicons/react/solid'

export const Header = () => {
    return (
        <header className="shadow-md p-5 fixed bg-white z-50 w-full  md:grid-cols-3
        grid grid-flow-row-dense grid-cols-3">

            <div className="items-center hidden md:inline-flex">
                <img src={AirbnbLogo} alt='airbnb logo' className="h-6 cursor-pointer md:h-10" />
            </div>
            <div className="flex border-2 rounded-full items-center md:shadow-sm py-2 col-span-2 md:col-span-1 hover:shadow-lg">
                <input type="text" placeholder="Start type your search"
                    className="outline-none bg-transparent md:pl-5 px-2 flex-grow text-gray-600 placeholder-gray-400" />
                <SearchIcon className='h-8 bg-red-400 text-white rounded-full p-2 hidden md:inline-flex cursor-pointer md:mx-2' />
            </div>
            <div className="flex justify-end items-center">
                <div className="text-gray-400 hidden md:inline-flex">Become a host</div>
                <GlobeAltIcon className="h-5 ml-3 text-gray-500" />
                <div className="flex rounded-full border-2 shadow-sm p-2 ml-3 hover:shadow-lg">
                    <MenuIcon className='h-5 text-gray-500 cursor-pointer' />
                    <UserCircleIcon className='h-5 text-gray-500 cursor-pointer' />
                </div>
            </div>
        </header>
    )
}
