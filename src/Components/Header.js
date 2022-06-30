import React, { useEffect, useState } from 'react'
import AirbnbLogo from '../assets/Airbnb_Logo.png'
import {
    SearchIcon,
    GlobeAltIcon, MenuIcon, UserCircleIcon, UserGroupIcon,
} from '@heroicons/react/solid'
import { Fade } from 'react-reveal'
import { SearchFilter } from './SearchFilter'
import { useNavigate, Link } from 'react-router-dom'
import { format } from 'date-fns'

export const Header = ({ placeholder,isDashboard }) => {
    const [search, setSearch] = useState('');
    const [noOfGuest, setNoOfGuest] = useState(1);
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [animated, setAnimated] = useState(false);

    const resetFilters = () => {
        setSearch('');
        setNoOfGuest(1);
    }

    const handleSearchFilter = () => {
        setStartDate(e => format(e, 'MM/dd/yyyy'));
        setEndDate(e => format(e, 'MM/dd/yyyy'));
        const params = { startDate: format(startDate, 'MM/dd/yyyy'), endDate: format(endDate, 'MM/dd/yyyy'), noOfGuest, search };
        navigate({ pathname: `/search` }, { state: params })
    }

    const handleDateSelect = (e) => {
        setStartDate(e.selection.startDate);
        setEndDate(e.selection.endDate);
    }

    const handleScroll=(e)=> {
        const wScroll = window.scrollY;
        if (wScroll >= 50) {
            setAnimated(true);
        } else {
            setAnimated(false);
        }
        console.log(animated)
    }

    useEffect(() => {
       if(isDashboard){
           window.addEventListener("scroll", handleScroll, true);
        }else{
            setAnimated(true);
        }
    });

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <header
            className={`p-5 fixed z-50 w-full md:grid-cols-3
        grid grid-flow-row-dense grid-cols-3 ${animated ? `bg-white shadow-md  ease-out` : 'bg-transparent transition-none'}`}>

            <div className="items-center hidden md:inline-flex">
                <Fade left>
                    <Link to='/'>
                        <img src={AirbnbLogo} alt='airbnb logo' className="h-6 cursor-pointer md:h-10" /></Link>
                </Fade>
            </div>
            <div className="flex bg-white border-2 rounded-full items-center md:shadow-sm py-2 col-span-2 md:col-span-1 hover:shadow-lg">
                <Fade top>
                    <input type="text" placeholder={placeholder || `Start type your search`}
                        readOnly={placeholder || false}
                        value={search}
                        onChange={handleChange}
                        className="outline-none bg-transparent md:pl-5 px-2 flex-grow text-gray-600 placeholder-gray-400" />
                    <SearchIcon className='h-8 bg-red-400 text-white rounded-full p-2 hidden md:inline-flex cursor-pointer md:mx-2' />
                </Fade>
            </div>
            <div className="flex justify-end items-center ">
                <Fade right >
                    <div className={`hidden md:inline-flex ${animated ? `text-gray-400` : 'text-white'}`}
                    >Become a host</div>
                    <GlobeAltIcon className={`h-5 ml-3 ${animated ? `text-gray-400` : 'text-white'}`} />
                    <div className="flex rounded-full border-2 shadow-sm p-2 ml-3 hover:shadow-lg">
                        <MenuIcon className={`h-5 cursor-pointer ${animated ? `text-gray-400` : 'text-white'}`} />
                        <UserCircleIcon className={`h-5 cursor-pointer ${animated ? `text-gray-400` : 'text-white'}`} />
                    </div>
                </Fade>
            </div>

            {search ? <Fade bottom >
                <div className="flex flex-col m-auto col-span-3 mt-5 bg-white px-5 pb-4 rounded-xl">
                    <SearchFilter dateSelect={handleDateSelect} />
                    <div className="flex mb-4 items-center">
                        <h2 className='text-2xl font-semibold flex-grow'>
                            Number of guests
                        </h2>
                        <UserGroupIcon className='h-5' />
                        <input min={1} type="number"
                            value={noOfGuest} onChange={(e) => setNoOfGuest(e.target.value)}
                            className='w-12 pl-2 text-lg outline-none text-red-400' />
                    </div>
                    <div className="flex items-center justify-center ">
                        <button className='primary-btn mx-2 flex-grow' onClick={resetFilters}> Cancel</button>
                        <button className='primary-btn mx-2 flex-grow text-white bg-red-400' onClick={handleSearchFilter}> Save</button>
                    </div>
                    <div>

                    </div>
                </div>



            </Fade> : ''}
        </header>

    )
}
