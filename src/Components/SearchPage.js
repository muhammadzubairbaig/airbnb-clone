import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import { Header } from './Header';
import { format } from 'date-fns';
import { SearchResult } from './SearchResult';

export const SearchPage = () => {
    const location = useLocation();
    const [date, setDate] = useState('');
    const [stayDate, setStayDate] = useState('');
    const { startDate, endDate, search, noOfGuest } = location.state;
    const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
    const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');
    const results = [
        {
            img: "https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg",
            location: "Private room in center of London",
            title: "Independant luxury studio apartment description:2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen",
            star: "4.3",
            price: "£40 / night",
            total: "£157 total",
        },
        {
            img: "https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg",
            location: "Private room in center of London",
            title: "London Studio Apartments",
            description: "4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine",
            star: "3.8",
            price: "£35 / night",
            total: "£207 total",
        },
        {
            img: "https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
            , location: "Private room in center of London",
            title: "30 mins to Oxford Street, Excel Londo,n",
            description: "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
            star: "4.1",
            price: "£55 / night",
            total: "£320 total",
        },
        {
            img: "https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg",
            location: "Private room in center of London",
            title: "Spacious Peaceful Modern Bedroom",
            description: "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning",
            star: "5.0",
            price: "£60 / night",
            total: "£450 total"
        },
        {
            img: "https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937",
            location: "Private room in center of London",
            title: "The Blue Room In London",
            description: "2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine",
            star: "4.23",
            price: "£65 / night",
            total: "£480 total",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU",
            location: "Private room in center of London",
            title: "Stay at this spacious Edwardian House",
            description: "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
            star: "4.73",
            price: "£30 / night",
            total: "£117 total"
        }
    ]
    useEffect(() => {
        if (formattedStartDate === formattedEndDate) {
            setDate(formattedStartDate);
            setStayDate(formattedStartDate)

        }
        else {
            setDate(`${formattedStartDate} - ${formattedEndDate}`)
            setStayDate(`${formattedStartDate} to ${formattedEndDate}`)
        }
    }, [formattedStartDate, formattedEndDate])

    return (
        <>
            <Header placeholder={`${search} | ${date} | ${noOfGuest} guest`} />
            <div className="px-6 mx-auto pt-28">
                <p className='text-black font-[500]'>
                    200+ stays · {stayDate} · {noOfGuest} guest</p>
                <h1 className='text-4xl font-[700] mb-5'>Stays in {search}</h1>
                <button className='chip'>Cancellation Flexibility</button>
                <button className='chip'>Type of place</button>
                <button className='chip'>Price</button>
                <button className='chip'>Rooms and beds</button>
                <button className='chip'>More filters</button>
                {results.map((search, i) => {
                    return (
                        <SearchResult
                            img={search.img}
                            location={search.location}
                            title={search.title}
                            description={search.description}
                            star={search.star}
                            price={search.price}
                            total={search.total}
                            key={i}
                        />)
                }
                )}
            </div>
        </>
    )
}
